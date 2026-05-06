"use client";

import { useState } from "react";
import { benefits } from "@/content/landing";
import Container from "@/components/ui/Container";

export default function BenefitsSection() {
  const [loadedCount, setLoadedCount] = useState(3);
  const allLoaded = loadedCount >= benefits.items.length;
  const progressPercent = (loadedCount / benefits.items.length) * 100;

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Header — split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-14 max-w-4xl mx-auto">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-tight text-dark">
            <strong className="font-semibold">{benefits.headline}</strong>
          </h2>
          <p className="text-base md:text-lg text-gray leading-relaxed self-center">
            {benefits.description}
          </p>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          aria-label="Beneficios de Mini Chefs"
        >
          {benefits.items.slice(0, loadedCount).map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-2"
            >
              <h3 className="text-sm font-bold text-dark leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mb-4">
          <div className="h-1 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full bg-dark rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-gray text-center mt-2">
            Estas viendo {loadedCount} de {benefits.items.length} resultados
          </p>
        </div>

        {/* Load more button */}
        {!allLoaded && (
          <div className="flex justify-center">
            <button
              onClick={() => setLoadedCount(benefits.items.length)}
              className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-red text-white font-semibold text-sm hover:bg-red-dark active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Cargar mas
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
