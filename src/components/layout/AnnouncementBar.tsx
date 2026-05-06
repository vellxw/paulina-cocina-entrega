import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-surface text-dark text-center py-2.5 text-xs sm:text-sm font-sans tracking-wide border-b border-border">
      <Link
        href="#inscripcion"
        className="hover:underline inline-flex items-center gap-2"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
        Vacantes limitadas — Reserva antes de que se agoten
      </Link>
    </div>
  );
}
