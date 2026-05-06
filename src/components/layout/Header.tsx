"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { nav } from "@/content/landing";
import Container from "@/components/ui/Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-solo-minichefs-texto.png"
              alt="Mini Chefs"
              width={116}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegacion principal">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray hover:text-dark transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href={nav.cta.href}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-bold text-sm bg-red text-white hover:bg-red-dark active:scale-[0.98] transition-all duration-300"
            >
              {nav.cta.label}
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 cursor-pointer text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu drawer */}
      <nav
        className={`md:hidden border-t border-border bg-white overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="Navegacion movil"
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray py-3 min-h-[44px] flex items-center border-b border-border last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="mt-3 w-full inline-flex items-center justify-center py-3.5 rounded-full bg-red text-white font-bold text-base active:scale-[0.98] transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
