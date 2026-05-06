import { digitalProducts } from "@/content/landing";
import Container from "@/components/ui/Container";
import { ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";

export default function DigitalProductsSection() {
  return (
    <section id="productos" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl">
          <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-surface text-gray text-xs font-semibold uppercase tracking-widest border border-border">
            {digitalProducts.badge}
          </span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold text-dark leading-tight">
            {digitalProducts.headline}
          </h2>
          <p className="text-base md:text-lg text-gray leading-relaxed">
            {digitalProducts.description}
          </p>
        </div>

        {/* Products grid */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          aria-label="Productos digitales"
        >
          {digitalProducts.items.map((item, i) => {
            const isFeatured = i === 0;
            return (
              <li
                key={item.title}
                className={`relative flex flex-col gap-5 p-6 md:p-7 rounded-2xl border transition-shadow duration-300 hover:shadow-lg ${
                  isFeatured
                    ? "bg-dark border-dark"
                    : "bg-surface border-border"
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-dark text-xs font-bold shadow-sm">
                    <Tag size={12} weight="duotone" aria-hidden="true" />
                    {digitalProducts.featuredLabel}
                  </span>
                )}

                {/* Type chip */}
                <span
                  className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-semibold ${
                    isFeatured ? "bg-white/10 text-white/70" : "bg-white border border-border text-dark-light"
                  }`}
                >
                  {item.type}
                </span>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className={`text-base font-bold leading-snug ${isFeatured ? "text-white" : "text-dark"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isFeatured ? "text-white/60" : "text-gray"}`}>
                    {item.description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex flex-col gap-0.5">
                  {item.originalPrice && item.discount && (
                    <div className="flex items-center gap-2">
                      <span className={`text-xs line-through ${isFeatured ? "text-white/40" : "text-gray-light"}`}>
                        {item.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-red bg-red/10 px-2 py-0.5 rounded-full">
                        -{item.discount}
                      </span>
                    </div>
                  )}
                  <span className={`text-xl font-bold ${isFeatured ? "text-white" : "text-dark"}`}>
                    {item.price}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full h-11 rounded-full font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                    isFeatured
                      ? "bg-white text-dark hover:bg-surface"
                      : "bg-dark text-white hover:bg-dark-light"
                  }`}
                >
                  {digitalProducts.ctaLabel}
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
