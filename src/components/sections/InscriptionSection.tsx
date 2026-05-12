"use client";

import { useState } from "react";
import { inscription } from "@/content/landing";
import Container from "@/components/ui/Container";
import { CheckCircle } from "@phosphor-icons/react";
import { RegisterButton } from "@/components/ui/RegisterButton";

const trustPoints = [
  "Cancelas hasta 7 dias antes con reembolso completo",
  "Tarjeta, transferencia o Mercado Pago",
  "Cupos limitados — garantia de experiencia personalizada",
];

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function InscriptionSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setSubmitted(true);
  }

  return (
    <section id="inscripcion" className="py-20 md:py-28 bg-[#FEF6EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center px-4 py-1.5 rounded-full bg-red text-white text-xs font-semibold uppercase tracking-widest">
              {inscription.badge}
            </span>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-semibold text-dark leading-tight">
              {inscription.headline}
            </h2>
            <p className="text-base md:text-lg text-gray leading-relaxed">
              {inscription.description}
            </p>

            {/* Trust points */}
            <ul className="flex flex-col gap-3 mt-2" aria-label="Garantias">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    weight="duotone"
                    className="text-dark shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-3xl border border-border shadow-lg p-7 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white border border-border flex items-center justify-center">
                  <CheckCircle size={36} weight="duotone" className="text-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark">
                  ¡Gracias, {name}!
                </h3>
                <p className="text-sm text-gray leading-relaxed max-w-[32ch]">
                  {name}, te contactamos en las próximas horas con toda la información sobre Mini Chefs.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-dark mb-6">
                  Completa tus datos
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="insc-name" className="text-sm font-medium text-dark">
                      Tu nombre
                    </label>
                    <input
                      id="insc-name"
                      type="text"
                      autoComplete="name"
                      placeholder={inscription.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full h-12 px-4 rounded-xl border border-border bg-white text-dark placeholder:text-gray-light text-sm focus:outline-none focus:ring-2 focus:ring-red/30 focus:border-red/40 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="insc-email" className="text-sm font-medium text-dark">
                      Tu email
                    </label>
                    <input
                      id="insc-email"
                      type="email"
                      autoComplete="email"
                      placeholder={inscription.emailPlaceholder}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(false);
                      }}
                      required
                      aria-invalid={emailError}
                      aria-describedby={emailError ? "insc-email-error" : undefined}
                      className={`w-full h-12 px-4 rounded-xl border bg-white text-dark placeholder:text-gray-light text-sm focus:outline-none focus:ring-2 transition-all ${
                        emailError
                          ? "border-red focus:ring-red/30 focus:border-red"
                          : "border-border focus:ring-red/30 focus:border-red/40"
                      }`}
                    />
                    {emailError && (
                      <p id="insc-email-error" className="text-sm text-red">
                        {inscription.emailError}
                      </p>
                    )}
                  </div>

                  <RegisterButton type="submit" className="w-full mt-2">
                    {inscription.cta}
                  </RegisterButton>
                </form>

                <p className="text-xs text-gray-light text-center mt-5 leading-relaxed">
                  {inscription.disclaimer}
                </p>
              </>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
