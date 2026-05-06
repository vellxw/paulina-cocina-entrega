import { midPageCta } from "@/content/landing";
import { RegisterButton } from "@/components/ui/RegisterButton";

export default function MidPageCta() {
  return (
    <section className="py-12 md:py-16 bg-[#FEEDDA]">
      <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copy */}
          <div className="flex flex-col gap-2">
            <h2 className="font-serif text-[clamp(24px,3.5vw,40px)] font-semibold text-dark leading-tight">
              {midPageCta.headline}
            </h2>
            <p className="text-sm sm:text-base text-gray leading-relaxed">
              {midPageCta.description}
            </p>
          </div>

          {/* CTA */}
          <RegisterButton href="#inscripcion" className="shrink-0">
            {midPageCta.cta}
          </RegisterButton>
        </div>
      </div>
    </section>
  );
}
