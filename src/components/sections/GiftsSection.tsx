import { gifts } from "@/content/landing";
import Container from "@/components/ui/Container";
import Image from "next/image";

const giftData = [
  {
    title: gifts.items[0].title,
    description: gifts.items[0].description,
    image: "/images/delantal-minichefs.png",
    reverse: false,
  },
  {
    title: gifts.items[1].title,
    description: gifts.items[1].description,
    image: "/images/recetario-impreso.png",
    reverse: true,
  },
  {
    title: gifts.items[2].title,
    description: gifts.items[2].description,
    image: "/images/diploma-mini-chef.png",
    reverse: false,
  },
];

export default function GiftsSection() {
  return (
    <section id="regalos" className="py-20 md:py-28 bg-[#FEF6EB]">
      <Container>
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-tight text-dark">
            <strong className="font-semibold">{gifts.headline}</strong>
          </h2>
        </div>

        {/* Zig-zag items */}
        <div className="flex flex-col gap-16 md:gap-24 max-w-4xl mx-auto">
          {giftData.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-56 h-72 md:w-64 md:h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray leading-relaxed max-w-sm mx-auto md:mx-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
