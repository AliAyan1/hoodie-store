"use client";

import { motion, Variants } from "framer-motion";
import { Circle } from "lucide-react";

export function HeroGeometric({
  badge = "🔥 Hoodie Store",
  title1 = "Your Own",
  title2 = "Clothing Brand",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + custom * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0c0c]">
      {/* Red + White gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-white/5 to-red-600/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12"
          >
            <Circle className="h-2 w-2 fill-red-500" />
            <span className="text-sm text-white tracking-wide font-medium">
              {badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 md:mb-8 tracking-tight text-white drop-shadow-lg">
              {title1}
              <br />
              {title2}
            </h1>
          </motion.div>

          {/* Sub Text */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Crafting exceptional clothing experiences through unique design and elevated streetwear fashion.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
