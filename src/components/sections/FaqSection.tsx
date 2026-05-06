"use client";

import { useState } from "react";
import { faq } from "@/content/landing";
import Container from "@/components/ui/Container";
import { Plus, Minus } from "@phosphor-icons/react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FEF6EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">

          {/* Left — sticky header */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-red text-white text-xs font-semibold uppercase tracking-widest">
              Preguntas frecuentes
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold text-dark leading-tight">
              Todo lo que necesitas saber
            </h2>
            <p className="text-base text-gray leading-relaxed">
              Si tu pregunta no esta aqui, escribinos por WhatsApp y te respondemos en minutos.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-border bg-white rounded-3xl border border-border p-2 md:p-4">
            {faq.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question} className="px-4">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    id={`faq-btn-${i}`}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-sm sm:text-base font-semibold text-dark group-hover:text-red transition-colors duration-200 leading-snug pr-2">
                      {item.question}
                    </span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center transition-all duration-200 group-hover:border-red/30 group-hover:bg-red/5"
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus size={14} className="text-red" />
                      ) : (
                        <Plus size={14} className="text-dark-light" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      className="pb-5"
                    >
                      <p className="text-sm sm:text-base text-gray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
