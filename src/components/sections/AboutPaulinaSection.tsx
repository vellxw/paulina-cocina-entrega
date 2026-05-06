import { aboutPaulina } from "@/content/landing";
import Container from "@/components/ui/Container";
import { Quotes } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function AboutPaulinaSection() {
  return (
    <section id="paulina" className="py-20 md:py-28 bg-[#FEF6EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — copy */}
          <div className="flex flex-col gap-7 order-1">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-red text-white text-xs font-semibold uppercase tracking-widest">
                {aboutPaulina.headline}
              </span>
              <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold text-dark leading-tight">
                Sociologa, cocinera, y la voz que cambio como Argentina cocina
              </h2>
              <p className="text-base md:text-lg text-gray leading-relaxed">
                {aboutPaulina.description}
              </p>
            </div>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-dark py-3 bg-white/60 rounded-r-xl">
              <Quotes
                size={18}
                weight="duotone"
                className="text-dark absolute -top-1 left-6 opacity-30"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-base text-dark leading-relaxed italic pt-4">
                {aboutPaulina.quote}
              </p>
            </blockquote>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {aboutPaulina.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-dark leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative flex items-center justify-center order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px]">
              <div className="w-full h-full rounded-full border border-border shadow-xl overflow-hidden flex items-center justify-center bg-white">
                <Image
                  src="/images/foto-paulina.png"
                  alt="Paulina Cocina"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
