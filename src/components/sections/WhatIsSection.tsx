import { whatIs } from "@/content/landing";
import Container from "@/components/ui/Container";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function WhatIsSection() {
  return (
    <section id="que-es" className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-surface text-gray text-xs font-semibold uppercase tracking-widest mb-6">
            {whatIs.badge}
          </span>

          {/* Headline */}
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-tight text-dark mb-6">
            <strong className="font-semibold">{whatIs.headline}</strong>
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-gray leading-relaxed mb-8">
            {whatIs.description}
          </p>

          {/* Highlights */}
          <ul className="flex flex-col gap-3 mb-8" aria-label="Caracteristicas principales">
            {whatIs.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  weight="duotone"
                  className="text-red shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base text-dark-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Differentiator callout */}
          <div className="flex gap-4 p-5 rounded-2xl bg-surface border-l-4 border-dark shadow-sm">
            <p className="text-sm sm:text-base text-dark-light leading-relaxed">
              {whatIs.differentiator}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
