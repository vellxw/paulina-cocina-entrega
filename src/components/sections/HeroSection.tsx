import Image from "next/image";
import { hero } from "@/content/landing";
import { RegisterButton } from "@/components/ui/RegisterButton";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative text-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 pt-10 pb-10 md:pt-14 md:pb-14">
        {/* Announcement */}
        <div className="text-dark text-center py-2.5 text-xs sm:text-sm font-sans tracking-wide mb-4">
          <span className="hover:underline inline-flex items-center gap-2 cursor-pointer">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
            Vacantes limitadas — Reserva antes de que se agoten
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-10">
          <Image
            src="/images/logo-paulina-minichefs.png"
            alt="Paulina Cocina - Mini Chefs"
            width={400}
            height={200}
            className="h-28 md:h-36 lg:h-40 w-auto object-contain"
            priority
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 mb-10">
          {/* Headline */}
          <h1 className="font-serif text-[clamp(40px,6.5vw,78px)] font-semibold leading-[0.95] mb-6 text-dark">
            {hero.headline}
          </h1>
          <p className="text-[clamp(16px,2vw,20px)] text-gray leading-relaxed max-w-xl mx-auto">
            {hero.subheadline}
          </p>
        </div>

        {/* Event Details Row */}
        <div className="flex items-center justify-center gap-8 md:gap-14 mb-10 px-4 flex-wrap">
          <div className="flex flex-col gap-1 text-center min-w-[80px]">
            <span className="text-[10px] font-medium text-gray-muted uppercase tracking-[0.15em]">Fecha</span>
            <span className="text-sm font-semibold text-dark">{hero.eventDetails.date}</span>
          </div>
          <div className="w-px h-8 bg-border-dark hidden sm:block" />
          <div className="flex flex-col gap-1 text-center min-w-[120px]">
            <span className="text-[10px] font-medium text-gray-muted uppercase tracking-[0.15em]">Lugar</span>
            <span className="text-sm font-semibold text-dark">{hero.eventDetails.location}</span>
          </div>
          <div className="w-px h-8 bg-border-dark hidden sm:block" />
          <div className="flex flex-col gap-1 text-center min-w-[80px]">
            <span className="text-[10px] font-medium text-gray-muted uppercase tracking-[0.15em]">Edades</span>
            <span className="text-sm font-semibold text-dark">{hero.eventDetails.ages}</span>
          </div>
          <div className="w-px h-8 bg-border-dark hidden md:block" />
          <div className="hidden md:flex flex-col gap-1 text-center min-w-[80px]">
            <span className="text-[10px] font-medium text-gray-muted uppercase tracking-[0.15em]">Duracion</span>
            <span className="text-sm font-semibold text-dark">{hero.eventDetails.duration}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-4 px-4">
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-dark text-dark font-semibold text-sm hover:bg-surface active:scale-[0.98] transition-all duration-200"
          >
            {hero.secondaryCta.label}
          </a>
          <RegisterButton href={hero.cta.href}>
            {hero.cta.label}
          </RegisterButton>
        </div>
      </div>
    </section>
  );
}
