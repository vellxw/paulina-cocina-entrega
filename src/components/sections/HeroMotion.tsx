"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const easeExpoOut = [0.16, 1, 0.3, 1] as const;

export default function HeroMotion({ children }: { children: ReactNode }) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeExpoOut, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
