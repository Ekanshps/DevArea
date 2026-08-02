// WhatsApp Integration Configuration
export const WHATSAPP_NUMBER = "917068317379"; // Country code + number, no +

export const WHATSAPP_MESSAGES = {
  default: "Hi! I want to know more about your services",
  demo: "Get Free Demo",
  businessWebsite: "Business Website ₹2999",
  portfolioWebsite: "Portfolio Website",
  uiuxDesign: "UI/UX Design",
  webDevelopment: "Web Development",
};

export const generateWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const WHATSAPP_FLOWS = {
  default: {
    heading: "Chat on WhatsApp",
    message: "Hi! I want to know more about your services",
  },
  demo: {
    heading: "Get Free Demo",
    message: "Hi 🙂\n\nI'd like to see a demo homepage for my business",
  },
  businessWebsite: {
    heading: "Business Website",
    message: "Hi! I'm interested in a business website. Can you tell me about your packages?",
  },
  portfolioWebsite: {
    heading: "Portfolio Website",
    message: "Hi! I want to create a portfolio website. What's your process?",
  },
  uiuxDesign: {
    heading: "UI/UX Design",
    message: "Hi! I need UI/UX design services. Can we discuss?",
  },
  webDevelopment: {
    heading: "Web Development",
    message: "Hi! I'm looking for web development services. Let's connect!",
  },
};
