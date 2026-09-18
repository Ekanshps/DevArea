"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, WHATSAPP_FLOWS } from "@/lib/whatsapp";

interface WhatsAppFloatingButtonProps {
  type?: keyof typeof WHATSAPP_FLOWS;
  position?: "bottom-right" | "bottom-left";
}

export function WhatsAppFloatingButton({
  type = "default",
  position = "bottom-right",
}: WhatsAppFloatingButtonProps) {
  const flow = WHATSAPP_FLOWS[type];
  const whatsappLink = generateWhatsAppLink(flow.message);
  const positionClasses = position === "bottom-right" ? "bottom-6 right-6" : "bottom-6 left-6";

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`group fixed ${positionClasses} z-40`} aria-label="Chat on WhatsApp" title={flow.heading}>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.45 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#a7ebf2]/40 bg-[#a7ebf2] text-[#011c2d] shadow-xl shadow-[#a7ebf2]/20 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[#a7ebf2]/40"
      >
        <MessageCircle size={29} strokeWidth={2.5} />
        <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] top-1/2 w-max -translate-y-1/2 translate-x-2 rounded-lg border border-[#a7ebf2]/20 bg-[#062b43] px-3 py-2 text-xs font-semibold text-[#a7ebf2] opacity-0 shadow-xl transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">{flow.heading}</span>
      </motion.div>
    </a>
  );
}
