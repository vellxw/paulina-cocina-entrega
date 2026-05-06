'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const CARDS = [
  { id: 1, text: 'Mini Chefs en accion', src: '/images/foto-random-1.png' },
  { id: 2, text: 'Cocinando juntos', src: '/images/foto-random-2.png' },
  { id: 3, text: 'Momentos especiales', src: '/images/foto-random-3.png' },
];

export function AnimatedStack() {
  const [cards, setCards] = useState(CARDS);

  const handleNext = useCallback(() => {
    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift();
      if (first) {
        newCards.push(first);
      }
      return newCards;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      className="relative w-[320px] h-[220px] md:w-[600px] md:h-[400px] flex items-center justify-center cursor-pointer"
      onClick={handleNext}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleNext();
        }
      }}
      aria-label="Siguiente imagen"
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card, idx) => {
          if (idx > 2) return null;

          return (
            <motion.div
              key={card.id}
              layout
              initial={{
                opacity: 0,
                y: 50,
                scale: 1,
              }}
              animate={{
                y: idx * -35,
                scale: 1 - idx * 0.1,
                zIndex: CARDS.length - idx,
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                y: -100,
                scale: 0.8,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
              className="absolute shadow-[0_15px_30px_rgba(0,0,0,0.1)] rounded-none overflow-hidden bg-white"
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'top center',
              }}
            >
              <div className="relative w-full h-full group">
                <Image
                  src={card.src}
                  alt={card.text}
                  fill
                  sizes="(max-width: 768px) 320px, 600px"
                  className="object-cover"
                  priority={idx === 0}
                />
                
                {idx > 0 && (
                  <div 
                    className="absolute inset-0 bg-white transition-opacity duration-500 ease-in-out"
                    style={{ opacity: 0.4 + idx * 0.2 }}
                  />
                )}

                {idx === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent flex items-end p-6 md:p-8"
                  >
                    <h3 className="text-white text-lg md:text-2xl font-serif drop-shadow-md">
                      {card.text}
                    </h3>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
