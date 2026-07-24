"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface CertificateModalProps {
  image: string | null;
  title?: string;
  onClose: () => void;
}

export default function CertificateModal({
  image,
  title,
  onClose,
}: CertificateModalProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white"
          >
            <X />
          </button>

          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl"
          >
            <Image
              src={image}
              alt={title || "Certificate"}
              width={1600}
              height={1100}
              className="max-h-[85vh] w-full rounded-xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}