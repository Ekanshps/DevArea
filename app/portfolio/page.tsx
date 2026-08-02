'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus, X, Trash2, Eye, EyeOff, Lock } from 'lucide-react';
import FilterTabs from '@/components/sections/FilterTabs';
import ProjectCard from '@/components/sections/ProjectCard';
import CaseStudySection from '@/components/sections/CaseStudySection';

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  result: string;
  slug: string;
};

type CaseStudy = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  imagePosition: 'left' | 'right';
  slug: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: 'TechStartup Website Redesign',
    category: 'Web Development',
    challenge:
      'TechStartup had an outdated website that didn\'t showcase their innovative product. Their bounce rate was high (65%), and they struggled to convert visitors into leads. The site wasn\'t mobile-responsive and lacked a clear value proposition.',
    solution:
      'We completely redesigned their website with a modern, mobile-first approach. We created compelling hero sections, streamlined navigation, integrated a lead capture form, and added detailed product showcase sections. We implemented smooth animations and optimized page speed.',
    results: [
      { label: 'Conversion Rate Increase', value: '+45%' },
      { label: 'Bounce Rate Reduction', value: '-35%' },
      { label: 'Monthly Leads Generated', value: '200+' },
      { label: 'Page Load Time', value: '2.1s' },
    ],
    image: 'https://images.unsplash.com/photo-1499747292307-58a92ef88001?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'techstartup-redesign',
  },
  {
    title: 'E-commerce Platform Optimization',
    category: 'Ecommerce',
    challenge:
      'An established e-commerce store had poor conversion rates (1.2%) and high cart abandonment (72%). Product pages lacked compelling imagery and detailed descriptions. The checkout process was confusing with too many steps.',
    solution:
      'We redesigned the entire shopping experience with high-quality product images, improved descriptions, customer reviews integration, and a streamlined 1-click checkout process. We added trust signals, security badges, and abandoned cart recovery emails.',
    results: [
      { label: 'Conversion Rate Increase', value: '+60%' },
      { label: 'Cart Abandonment Reduction', value: '-45%' },
      { label: 'Average Order Value', value: '+32%' },
      { label: 'Customer Satisfaction', value: '4.8/5' },
    ],
    image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e9f65?w=800&h=600&fit=crop',
    imagePosition: 'left',
    slug: 'ecommerce-optimization',
  },
  {
    title: 'SaaS Dashboard UI Redesign',
    category: 'UI/UX',
    challenge:
      'A B2B SaaS company had a complex dashboard that overwhelmed users with information. User testing revealed high churn rates (45% after 30 days) and low feature adoption. Users didn\'t know where to start.',
    solution:
      'We redesigned the dashboard with a focus on user goals. We created personalized home screens, simplified data visualization, improved navigation, and added contextual help. We implemented dark/light modes and customizable widgets for power users.',
    results: [
      { label: 'User Engagement Increase', value: '+35%' },
      { label: 'Feature Adoption Rate', value: '+72%' },
      { label: 'Churn Rate Reduction', value: '-28%' },
      { label: 'Support Tickets Reduction', value: '-40%' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'saas-dashboard-ui',
  },
];

const categories = ['All', 'Web Development', 'UI/UX', 'Ecommerce', 'SEO'];

const EMPTY_FORM = { title: '', category: 'Web Development', image: '', result: '', slug: '' };

export default function PortfolioPage() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');

  // Admin state
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  const fetchProjects = useCallback(async () => {
    const res = await fetch('/api/portfolio');
    if (res.ok) setProjects(await res.json());
  }, []);

  useEffect(() => {
    // Detect ?admin=true from URL without useSearchParams (avoids Suspense requirement)
    setIsAdminMode(window.location.search.includes('admin=true'));
    fetchProjects();
  }, [fetchProjects]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  function handleUnlock(e: React.FormEvent) {
    e.preventDefault();
    // Client-side pre-check; real auth happens on the API
    if (password.trim() === '') { setPasswordError('Password daalo'); return; }
    setAdminUnlocked(true);
    setPasswordError('');
  }

  function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  async function handleAddProject(e: React.FormEvent) {
    e.preventDefault();
    setSaveError('');
    setSaving(true);
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-secret': password },
        body: JSON.stringify({ ...form, slug: form.slug || slugify(form.title) }),
      });
      if (res.status === 401) { setSaveError('Password galat hai'); setSaving(false); return; }
      if (!res.ok) { setSaveError('Kuch error aaya, dobara try karo'); setSaving(false); return; }
      await fetchProjects();
      setShowModal(false);
      setForm(EMPTY_FORM);
    } catch {
      setSaveError('Network error');
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('Is project ko delete karna chahte ho?')) return;
    await fetch('/api/portfolio', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', 'x-admin-secret': password },
      body: JSON.stringify({ id }),
    });
    await fetchProjects();
  }

  return (
    <main className="min-h-screen bg-light-bg">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-light-heading mb-4">
              Our Work
            </h1>
            <p className="text-xl text-light-text max-w-2xl mx-auto mb-8">
              Discover how we've helped businesses transform their digital presence and achieve remarkable results
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">50+</div>
                <div className="text-light-text text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">40+</div>
                <div className="text-light-text text-sm mt-1">Happy Clients</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-light-border">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">5+ Yrs</div>
                <div className="text-light-text text-sm mt-1">Industry Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admin Panel — only visible at /portfolio?admin=true */}
      {isAdminMode && (
        <section className="w-full px-4 mb-6">
          <div className="max-w-6xl mx-auto">
            {!adminUnlocked ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 border border-amber-300 rounded-2xl p-6 max-w-md mx-auto"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-amber-800">Admin Access</h3>
                </div>
                <form onSubmit={handleUnlock} className="flex gap-3">
                  <div className="relative flex-1">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Admin password"
                      className="w-full px-4 py-2 pr-10 rounded-lg border border-amber-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <button type="submit"
                    className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm font-semibold hover:bg-amber-600 transition">
                    Unlock
                  </button>
                </form>
                {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-300 rounded-2xl p-4 flex items-center justify-between"
              >
                <span className="text-green-700 font-semibold text-sm">Admin Mode Active — Sirf aapko yeh dikh raha hai</span>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg text-sm font-semibold hover:shadow-md transition"
                >
                  <Plus className="w-4 h-4" />
                  New Project Add Karo
                </button>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="w-full px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <FilterTabs categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
      </section>

      {/* Project Grid */}
      <section className="w-full px-4 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="relative">
                <ProjectCard {...project} index={index} />
                {/* Delete button — only in admin mode when unlocked */}
                {isAdminMode && adminUnlocked && (
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="absolute top-3 right-3 z-10 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg transition"
                    title="Delete project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-light-text text-lg">No projects found in this category. Try another filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4 bg-[#f59e0b]/5 border-y border-[#f59e0b]/20">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-light-heading mb-4">
              Featured <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              In-depth looks at our most impactful projects and the strategies that drove success
            </p>
          </motion.div>
        </div>
        {caseStudies.map((caseStudy, index) => (
          <CaseStudySection key={index} {...caseStudy} index={index} />
        ))}
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-5xl sm:text-6xl font-serif font-bold text-light-heading">
              Ready to Create Your <span className="bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl text-light-text max-w-2xl mx-auto">
              Let's work together to transform your digital vision into measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-600 text-[#b91c1c] font-bold rounded-lg hover:bg-amber-600/10 transition-all">
                Get a Free Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Project Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Naya Project Add Karo</h2>
                <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Title *</label>
                  <input required value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value, slug: slugify(e.target.value) })}
                    placeholder="e.g. Restaurant Website Design"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select required value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {categories.filter((c) => c !== 'All').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
                  <input required value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <p className="text-xs text-gray-400 mt-1">Unsplash ya kisi bhi image ka link daalo</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Result / Description *</label>
                  <textarea required value={form.result}
                    onChange={(e) => setForm({ ...form, result: e.target.value })}
                    rows={2}
                    placeholder="e.g. 300% traffic increase in 3 months"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
                  <input value={form.slug}
                    onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })}
                    placeholder="auto-generate hoga title se"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                {saveError && <p className="text-red-500 text-sm">{saveError}</p>}

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
                    Cancel
                  </button>
                  <button type="submit" disabled={saving}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#b91c1c] to-[#f59e0b] text-white rounded-lg text-sm font-semibold hover:shadow-md transition disabled:opacity-60">
                    {saving ? 'Save ho raha hai...' : 'Project Save Karo'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}


type CaseStudy = {
  title: string;
  category: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  image: string;
  imagePosition: 'left' | 'right';
  slug: string;
};

// Case studies data
const caseStudies: CaseStudy[] = [
  {
    title: 'TechStartup Website Redesign',
    category: 'Web Development',
    challenge:
      'TechStartup had an outdated website that didn\'t showcase their innovative product. Their bounce rate was high (65%), and they struggled to convert visitors into leads. The site wasn\'t mobile-responsive and lacked a clear value proposition.',
    solution:
      'We completely redesigned their website with a modern, mobile-first approach. We created compelling hero sections, streamlined navigation, integrated a lead capture form, and added detailed product showcase sections. We implemented smooth animations and optimized page speed.',
    results: [
      { label: 'Conversion Rate Increase', value: '+45%' },
      { label: 'Bounce Rate Reduction', value: '-35%' },
      { label: 'Monthly Leads Generated', value: '200+' },
      { label: 'Page Load Time', value: '2.1s' },
    ],
    image: 'https://images.unsplash.com/photo-1499747292307-58a92ef88001?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'techstartup-redesign',
  },
  {
    title: 'E-commerce Platform Optimization',
    category: 'Ecommerce',
    challenge:
      'An established e-commerce store had poor conversion rates (1.2%) and high cart abandonment (72%). Product pages lacked compelling imagery and detailed descriptions. The checkout process was confusing with too many steps.',
    solution:
      'We redesigned the entire shopping experience with high-quality product images, improved descriptions, customer reviews integration, and a streamlined 1-click checkout process. We added trust signals, security badges, and abandoned cart recovery emails.',
    results: [
      { label: 'Conversion Rate Increase', value: '+60%' },
      { label: 'Cart Abandonment Reduction', value: '-45%' },
      { label: 'Average Order Value', value: '+32%' },
      { label: 'Customer Satisfaction', value: '4.8/5' },
    ],
    image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e9f65?w=800&h=600&fit=crop',
    imagePosition: 'left',
    slug: 'ecommerce-optimization',
  },
  {
    title: 'SaaS Dashboard UI Redesign',
    category: 'UI/UX',
    challenge:
      'A B2B SaaS company had a complex dashboard that overwhelmed users with information. User testing revealed high churn rates (45% after 30 days) and low feature adoption. Users didn\'t know where to start.',
    solution:
      'We redesigned the dashboard with a focus on user goals. We created personalized home screens, simplified data visualization, improved navigation, and added contextual help. We implemented dark/light modes and customizable widgets for power users.',
    results: [
      { label: 'User Engagement Increase', value: '+35%' },
      { label: 'Feature Adoption Rate', value: '+72%' },
      { label: 'Churn Rate Reduction', value: '-28%' },
      { label: 'Support Tickets Reduction', value: '-40%' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    imagePosition: 'right',
    slug: 'saas-dashboard-ui',
  },
];

