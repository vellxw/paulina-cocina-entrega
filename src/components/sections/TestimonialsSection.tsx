"use client";

import { useState } from "react";
import { testimonials } from "@/content/landing";
import Container from "@/components/ui/Container";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

function StarIcon() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path
        d="M8.04261 0.158712C8.11135 -0.052904 8.41072 -0.052904 8.47948 0.158712L10.2722 5.67616C10.3029 5.7708 10.3911 5.83488 10.4906 5.83488H16.292C16.5145 5.83488 16.607 6.1196 16.427 6.25038L11.7336 9.66035C11.6531 9.71885 11.6194 9.82254 11.6502 9.91716L13.4429 15.4346C13.5116 15.6462 13.2694 15.8222 13.0894 15.6914L8.39604 12.2814C8.31554 12.223 8.20654 12.223 8.12605 12.2814L3.43266 15.6914C3.25266 15.8222 3.01046 15.6462 3.07922 15.4346L4.87192 9.91716C4.90268 9.82254 4.869 9.71885 4.78848 9.66035L0.0951206 6.25038C-0.0848888 6.1196 0.00762499 5.83488 0.230128 5.83488H6.03145C6.13095 5.83488 6.21915 5.7708 6.24989 5.67616L8.04261 0.158712Z"
        fill="#1a1a1a"
      />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface text-gray text-xs font-semibold uppercase tracking-widest mb-4 border border-border">
            {testimonials.badge}
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-tight text-dark">
            <strong className="font-semibold">{testimonials.headline}</strong>
          </h2>
        </div>

        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.items.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 flex justify-center px-4">
                <div className="w-full flex flex-col md:flex-row gap-8 items-center bg-surface rounded-3xl p-8 md:p-12">
                  <div className="w-full md:w-1/2 text-left">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <StarIcon key={j} />
                      ))}
                    </div>
                    <blockquote className="text-lg leading-relaxed mb-4 font-serif italic text-dark">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="font-semibold text-sm text-dark">{t.author}</p>
                    <p className="text-xs text-gray">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="disabled:opacity-30 transition-opacity text-dark w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={20} />
            </button>
            <button
              onClick={() => setCurrent(Math.min(testimonials.items.length - 1, current + 1))}
              disabled={current === testimonials.items.length - 1}
              className="disabled:opacity-30 transition-opacity text-dark w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-surface"
              aria-label="Next testimonial"
            >
              <CaretRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
