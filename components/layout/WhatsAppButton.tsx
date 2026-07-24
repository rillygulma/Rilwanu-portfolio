"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "2348035504017";

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=Hello%20Rilwanu,%20I%20would%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rilwanu on WhatsApp"
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30"
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}