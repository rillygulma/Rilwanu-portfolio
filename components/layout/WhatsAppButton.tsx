"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "2348035504017";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-lg"
      >
        Chat with me on WhatsApp
      </motion.div>

      {/* Animated Arrow */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
        className="mr-6 text-white"
      >
        <ArrowDown size={22} />
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phone}?text=Hello%20Rilwanu,%20I%20would%20like%20to%20discuss%20a%20project.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rilwanu on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl shadow-green-500/30"
      >
        <MessageCircle size={26} />
      </motion.a>
    </div>
  );
}