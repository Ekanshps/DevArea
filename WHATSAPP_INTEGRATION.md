# WhatsApp Integration Guide

## Setup (1 minute)

### Step 1: Update Your WhatsApp Number

Open [`lib/whatsapp.ts`](lib/whatsapp.ts) and replace the number:

```typescript
export const WHATSAPP_NUMBER = "917068317379"; // ✅ Change this to your number
```

**Format:** Country code + number (no + sign)
- India: `91XXXXXXXXXX`
- USA: `1XXXXXXXXXX`
- UK: `44XXXXXXXXXX`

---

## Usage

### 1. Floating Button (On All Pages)

Already added to `app/layout.tsx` - appears on bottom-right of every page.

```tsx
<WhatsAppFloatingButton type="default" position="bottom-right" />
```

**Types available:**
- `default` - General inquiry
- `demo` - Free demo request
- `businessWebsite` - Business website package
- `portfolioWebsite` - Portfolio website
- `uiuxDesign` - UI/UX design
- `webDevelopment` - Web development

---

### 2. CTA Section (Conversions)

Add this to any page for a conversion-focused section:

```tsx
import { WhatsAppCTASection } from "@/components/sections/WhatsAppCTASection";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <WhatsAppCTASection 
        title="Ready to start your project?"
        showMultipleOptions={true}
      />
    </>
  );
}
```

---

### 3. Individual Buttons

Use in any component:

```tsx
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function PricingCard() {
  return (
    <div>
      <h3>Professional Website</h3>
      <p>₹2999</p>
      <WhatsAppButton 
        type="businessWebsite" 
        variant="default" 
        size="lg"
      />
    </div>
  );
}
```

**Variants:** `default`, `outline`, `ghost`  
**Sizes:** `sm`, `md`, `lg`

---

### 4. Custom Messages

Add new message types in `lib/whatsapp.ts`:

```typescript
export const WHATSAPP_FLOWS = {
  customService: {
    heading: "Custom Service",
    message: "Hi! I'm interested in your custom service",
  },
  // ... rest
};
```

Then use:
```tsx
<WhatsAppButton type="customService" />
```

---

## Sales Flow (Backend)

When customers message, follow this flow:

### 1️⃣ **Greeting (Immediate)**
```
Hi 🙂

Sure, I'd love to help! 

What kind of project do you have in mind?
```

### 2️⃣ **Requirements (Short)**
- What's your business?
- How many pages?
- Any reference websites?

### 3️⃣ **Demo Offer** ⭐ (Game changer)
```
Great! 👍

Let me create a quick demo homepage to show you our style.

Can you tell me your business name?
```

### 4️⃣ **Send Demo**
- Clean screenshot or link
- Personalized for their business

### 5️⃣ **Pricing** (If they love it)
```
Sir, if you like this design, I can complete the full website for ₹2999

✅ Mobile friendly
✅ Fast delivery
✅ 1 month support

Interested?
```

### 6️⃣ **Payment Terms**
```
50% advance → Start work
50% after → Delivery

Let's do this! 💪
```

### 7️⃣ **Delivery + Review**
```
Your website is ready! 🎉

Can you review and share feedback?

(Get testimonial + screenshot for portfolio)
```

---

## Pre-filled Messages for Different Services

| Button | Message | Use Case |
|--------|---------|----------|
| Demo | "I'd like to see a demo homepage" | Homepage demo |
| Business | "I'm interested in a business website" | E-commerce / Services |
| Portfolio | "I want to create a portfolio website" | Freelancers / Professionals |
| UI/UX | "I need UI/UX design services" | Design projects |
| Web Dev | "Looking for web development services" | Dev projects |

---

## Where to Add Buttons

### 🏠 Homepage
- Add `WhatsAppCTASection` after hero section
- Add individual buttons in pricing cards

### 📱 Service Pages
```tsx
// app/services/web-development/page.tsx
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";

export default function WebDevelopmentPage() {
  return (
    <>
      <Hero />
      <ServiceDetails />
      <Pricing>
        {/* Add buttons in each pricing card */}
        <WhatsAppButton type="webDevelopment" />
      </Pricing>
    </>
  );
}
```

### 💰 Pricing Page
```tsx
// app/pricing/page.tsx
<div className="pricing-card">
  <h3>₹2999</h3>
  <WhatsAppButton type="businessWebsite" variant="default" size="lg" />
</div>
```

### 📧 Contact Page
```tsx
// app/contact/page.tsx
<WhatsAppCTASection 
  title="Prefer WhatsApp?"
  showMultipleOptions={true}
/>
```

---

## Customization Tips

### 1. Change Button Position
```tsx
// Move to bottom-left
<WhatsAppFloatingButton position="bottom-left" />
```

### 2. Modify CTA Section Colors
Edit `WhatsAppCTASection.tsx` - change `bg-gradient-to-r from-green-50 to-emerald-50`

### 3. Change Icon
Replace SVG in components with your own icon

### 4. Add Animation
```tsx
// Add to WhatsAppFloatingButton.tsx
className="animate-bounce hover:animate-none"
```

---

## Analytics Tips

### Track Button Clicks (Optional)
```tsx
const handleWhatsAppClick = () => {
  // Send to analytics
  gtag.event('whatsapp_click', {
    type: 'demo',
    timestamp: new Date()
  });
};
```

---

## Mobile View

✅ Floating button automatically hides text on mobile  
✅ Shows only icon + color  
✅ Fully responsive buttons  
✅ Touch-friendly sizes

---

## FAQ

**Q: Will the link work on desktop?**  
A: Yes! Opens WhatsApp Web if installed, or redirects to WhatsApp.com

**Q: Can I add multiple buttons?**  
A: Yes! Add multiple `<WhatsAppButton />` components anywhere

**Q: How do I change the message?**  
A: Edit the message in `WHATSAPP_FLOWS` in `lib/whatsapp.ts`

**Q: Does it work internationally?**  
A: Yes! Just update the country code in `WHATSAPP_NUMBER`

---

## Files Created

- `lib/whatsapp.ts` - Configuration & utility functions
- `components/sections/WhatsAppFloatingButton.tsx` - Always-visible button
- `components/sections/WhatsAppButton.tsx` - Individual CTA button
- `components/sections/WhatsAppCTASection.tsx` - Full conversion section

---

**All set!** Your WhatsApp integration is ready. Just update your phone number and start getting leads! 💚
