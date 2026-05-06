import { activities } from "@/content/landing";
import Container from "@/components/ui/Container";
import {
  ChefHat,
  BookOpen,
  Cookie,
  Star,
  Gift,
  Users,
} from "@phosphor-icons/react/dist/ssr";

const iconMap = {
  "chef-hat": ChefHat,
  "book-open": BookOpen,
  cookie: Cookie,
  star: Star,
  gift: Gift,
  users: Users,
} as const;

const iconBgColors = [
  "bg-[#fce4ec]",
  "bg-[#e3f2fd]",
  "bg-[#fff9c4]",
  "bg-[#fce4ec]",
  "bg-[#e3f2fd]",
  "bg-[#fff9c4]",
] as const;

const iconColors = [
  "text-[#c2185b]",
  "text-[#1565c0]",
  "text-[#f57f17]",
  "text-[#c2185b]",
  "text-[#1565c0]",
  "text-[#f57f17]",
] as const;

export default function ActivitiesSection() {
  return (
    <section id="actividades" className="py-20 md:py-28 bg-[#FEF6EB]">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] leading-tight text-dark">
            <strong className="font-semibold">Actividades</strong> del evento
          </h2>
        </div>

        {/* Grid */}
        <ul
          className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10"
          aria-label="Actividades del evento"
        >
          {activities.map((activity, i) => {
            const Icon = iconMap[activity.icon];
            return (
              <li
                key={activity.title}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${iconBgColors[i]}`}>
                  <Icon size={24} weight="duotone" className={iconColors[i]} aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-dark leading-snug">{activity.title}</h3>
                  <p className="text-xs sm:text-sm text-gray leading-relaxed max-w-[32ch]">{activity.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
