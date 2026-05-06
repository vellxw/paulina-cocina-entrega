'use client';

import { motion, useAnimation } from 'framer-motion';

interface RegisterButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  children?: React.ReactNode;
}

export function RegisterButton({ href, onClick, type = 'button', className = '', children }: RegisterButtonProps) {
  const controls = useAnimation();

  const baseClasses = `relative overflow-hidden bg-[#c11836] text-white font-semibold tracking-wide text-lg py-3 px-12 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-[#c11836] focus:ring-offset-2 inline-flex items-center justify-center cursor-pointer ${className}`;

  const inner = (
    <>
      <motion.div
        animate={controls}
        initial={{ x: '-100%' }}
        className="absolute inset-0 bg-[#1a1a1a] z-0"
      />
      <span className="relative z-10">{children || 'Registrate'}</span>
    </>
  );

  const motionProps = {
    onHoverStart: () => {
      controls.set({ x: '-100%' });
      controls.start({ x: '0%', transition: { duration: 0.3, ease: 'easeOut' } });
    },
    onHoverEnd: () => {
      controls.start({ x: '100%', transition: { duration: 0.3, ease: 'easeIn' } });
    },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
