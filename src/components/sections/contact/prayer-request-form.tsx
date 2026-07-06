"use client";

import * as React from "react";
import { CheckCircle2Icon, HandHeartIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { church } from "@/data/church";
import { cn } from "@/lib/utils";

const prayerCategories = [
  { id: "salud", label: "Salud" },
  { id: "emocional", label: "Bienestar emocional" },
  { id: "familia", label: "Familia" },
  { id: "trabajo", label: "Trabajo o estudios" },
  { id: "otro", label: "Otro" },
] as const;

type PrayerCategory = (typeof prayerCategories)[number]["id"];

function PrayerRequestForm() {
  const [name, setName] = React.useState("");
  const [category, setCategory] = React.useState<PrayerCategory>("salud");
  const [message, setMessage] = React.useState("");
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [wantsContact, setWantsContact] = React.useState(true);
  const [phone, setPhone] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const categoryLabel =
    prayerCategories.find((item) => item.id === category)?.label ?? "Petición de oración";

  const whatsappMessage = [
    `Hola, me gustaría pedir oración a través de ${church.name}.`,
    isAnonymous ? "\nPetición anónima" : name.trim() ? `\nNombre: ${name.trim()}` : "",
    `\nMotivo: ${categoryLabel}`,
    message.trim() ? `\n\n${message.trim()}` : "\n\n[Describe tu petición de oración]",
    wantsContact && phone.trim() ? `\n\nTeléfono para acompañamiento: ${phone.trim()}` : "",
    wantsContact && !phone.trim() && !isAnonymous
      ? "\n\nMe gustaría que alguien del equipo se comunique conmigo."
      : "",
  ].join("");

  const whatsappUrl = `https://wa.me/${church.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] border border-emerald-500/25 bg-emerald-500/10 p-6 text-center md:p-8">
        <CheckCircle2Icon className="mx-auto size-10 text-emerald-400" aria-hidden />
        <p className="mt-4 font-montserrat text-lg font-bold text-white">
          Tu petición ha sido enviada
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          Nuestro equipo de oración estará intercediendo por ti. No estás solo; Dios te acompaña y
          nosotros caminamos contigo.
        </p>
        <Button
          type="button"
          variant="outline"
          size="default"
          className="mt-6 border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          onClick={() => {
            setSubmitted(false);
            setMessage("");
            setPhone("");
          }}
        >
          Enviar otra petición
        </Button>
      </div>
    );
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-white/15 bg-white/5 p-5 md:p-6">
      <div className="flex items-center gap-2">
        <HandHeartIcon className="size-4 text-primary" aria-hidden />
        <p className="font-montserrat text-sm font-bold text-white">Pedido de oración</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        Si atraviesas un problema de salud, una situación emocional difícil o simplemente necesitas
        que oremos por ti, escríbenos. Queremos acompañarte y recordarte que no estás en soledad.
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <p className="mb-2 text-xs font-semibold tracking-wide text-white/60 uppercase">
            ¿Por qué motivo necesitas oración?
          </p>
          <div className="flex flex-wrap gap-2">
            {prayerCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  category === item.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/20 bg-white/5 text-white/80 hover:border-primary/40 hover:text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(event) => setIsAnonymous(event.target.checked)}
            className="mt-0.5 size-4 rounded border-white/30 text-primary focus:ring-primary"
          />
          <span className="text-sm leading-relaxed text-white/80">
            Prefiero enviar mi petición de forma anónima
          </span>
        </label>

        {!isAnonymous ? (
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Tu nombre"
            aria-label="Tu nombre"
            className="border-white/20 bg-white/10 text-white placeholder:text-white/45"
          />
        ) : null}

        <Textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Cuéntanos cómo podemos orar por ti. No tienes que tener las palabras perfectas; Dios escucha tu corazón..."
          aria-label="Tu petición de oración"
          className="min-h-28 border-white/20 bg-white/10 text-white placeholder:text-white/45"
        />

        <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
          <input
            type="checkbox"
            checked={wantsContact}
            onChange={(event) => setWantsContact(event.target.checked)}
            className="mt-0.5 size-4 rounded border-white/30 text-primary focus:ring-primary"
          />
          <span className="text-sm leading-relaxed text-white/80">
            Me gustaría que alguien del equipo se comunique conmigo para acompañarme
          </span>
        </label>

        {wantsContact && !isAnonymous ? (
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Tu teléfono o WhatsApp (opcional)"
            aria-label="Teléfono para contacto"
            className="border-white/20 bg-white/10 text-white placeholder:text-white/45"
          />
        ) : null}

        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild variant="primary" size="default">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setSubmitted(true)}
            >
              Enviar petición de oración
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${church.phone.replace(/\s/g, "")}`}>
              <PhoneIcon className="size-4" aria-hidden />
              Llamar ahora
            </a>
          </Button>
        </div>

        <p className="text-[11px] leading-relaxed text-white/50">
          Tu mensaje será tratado con respeto y confidencialidad. Si estás en una emergencia, busca
          ayuda profesional o llama a los servicios de emergencia de tu localidad.
        </p>
      </div>
    </div>
  );
}

export { PrayerRequestForm };
