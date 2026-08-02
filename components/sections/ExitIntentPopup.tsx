'use client';

import { useEffect, useState, useRef } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface ExitIntentPopupProps {
  whatsappNumber?: string;
  whatsappMessage?: string;
}

export function ExitIntentPopup({
  whatsappNumber = '917068317379',
  whatsappMessage = 'Hi, mujhe website development ke baare mein details chahiye',
}: ExitIntentPopupProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupShown, setPopupShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityDetectedRef = useRef(false);

  // ✅ STEP 1: DETECT MOBILE VS DESKTOP
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ STEP 2: POPUP OPEN LOGIC - CHECK SESSION STORAGE
  const openPopup = () => {
    if (!popupShown && !sessionStorage.getItem('leadPopupShown')) {
      setShowPopup(true);
      setPopupShown(true);
      sessionStorage.setItem('leadPopupShown', 'true');
    }
  };

  // ✅ STEP 3: DESKTOP - MOUSE EXIT INTENT (TOP 10% AREA)
  useEffect(() => {
    if (isMobile) return; // Skip on mobile

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving to the very top (browser toolbar area)
      if (e.clientY < 10 && !popupShown) {
        openPopup();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [isMobile, popupShown]);

  // ✅ STEP 4: MOBILE - TIME DELAY (25 SECONDS)
  useEffect(() => {
    if (!isMobile) return; // Skip on desktop

    const timeoutId = setTimeout(() => {
      openPopup();
    }, 25000); // 25 seconds

    return () => clearTimeout(timeoutId);
  }, [isMobile, popupShown]);

  // ✅ STEP 5: MOBILE - SCROLL TRIGGER (60% OF PAGE)
  useEffect(() => {
    if (!isMobile) return; // Skip on desktop

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 60 && !popupShown) {
        openPopup();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, popupShown]);

  // ✅ STEP 6: MOBILE - INACTIVITY TRIGGER (10 SECONDS NO INTERACTION)
  useEffect(() => {
    if (!isMobile) return; // Skip on desktop

    const resetInactivityTimer = () => {
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }

      inactivityDetectedRef.current = false;

      inactivityTimeoutRef.current = setTimeout(() => {
        if (!popupShown) {
          inactivityDetectedRef.current = true;
          openPopup();
        }
      }, 10000); // 10 seconds
    };

    // Only set up inactivity detection if scroll or time triggers haven't fired yet
    if (!popupShown) {
      document.addEventListener('touchstart', resetInactivityTimer);
      document.addEventListener('click', resetInactivityTimer);
      document.addEventListener('scroll', resetInactivityTimer);
      document.addEventListener('keydown', resetInactivityTimer);

      resetInactivityTimer(); // Start initial timer

      return () => {
        document.removeEventListener('touchstart', resetInactivityTimer);
        document.removeEventListener('click', resetInactivityTimer);
        document.removeEventListener('scroll', resetInactivityTimer);
        document.removeEventListener('keydown', resetInactivityTimer);
        if (inactivityTimeoutRef.current) {
          clearTimeout(inactivityTimeoutRef.current);
        }
      };
    }
  }, [isMobile, popupShown]);

  // ✅ STEP 7: BACK BUTTON DETECTION (OPTIONAL)
  useEffect(() => {
    const handlePopState = () => {
      if (!popupShown) {
        openPopup();
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [popupShown]);

  // WhatsApp Link Generator
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // ✅ CLOSE POPUP HANDLER
  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  // ✅ MOBILE - BOTTOM SHEET STYLE
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 flex items-end">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        />

        {/* Bottom Sheet */}
        <div className="relative w-full bg-white rounded-t-3xl p-6 shadow-2xl animate-in slide-in-from-bottom duration-300">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Content */}
          <div className="pr-8">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              🚀 Don't Miss Your Perfect Website!
            </h2>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              Get a free consultation with our experts. We'll create a stunning, fast website that drives real results for your business.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-y-3">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold transition transform hover:scale-105 active:scale-95 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now 💚
            </a>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="w-full text-gray-600 hover:text-gray-900 py-3 font-medium transition hover:bg-gray-50 rounded-lg"
            >
              Maybe Later
            </button>
          </div>

          {/* Footer Text */}
          <p className="text-xs text-gray-500 text-center mt-4">
            Reply within 24 hours • No spam • No charges ✓
          </p>
        </div>
      </div>
    );
  }

  // ✅ DESKTOP - CENTERED MODAL STYLE
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header Background */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 h-2" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900">
            🎯 Stop! Your Website is Just One Chat Away
          </h2>

          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Get a free consultation and discover how we can transform your online presence with a website that converts visitors into customers.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <span className="text-sm text-gray-600">💰 Free consultation • No hidden charges</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <span className="text-sm text-gray-600">🎨 Modern design • Mobile-first approach</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 font-bold mt-0.5">✓</span>
              <span className="text-sm text-gray-600">⚡ Lightning-fast • SEO-optimized</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 space-y-3">
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95 gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Free Consultation 💚
            </a>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="w-full text-gray-600 hover:text-gray-900 py-3 font-medium transition hover:bg-gray-50 rounded-lg border border-gray-200"
            >
              I'll think about it
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-5">
            ⏱️ Limited offer • 24-hour response time • Zero spam guarantee
          </p>
        </div>
      </div>
    </div>
  );
}
