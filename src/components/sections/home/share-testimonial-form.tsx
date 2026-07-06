"use client";

import * as React from "react";
import { MessageSquareHeartIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { church } from "@/data/church";

function ShareTestimonialForm() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const whatsappMessage = [
    `Hola, me gustaría compartir mi testimonio sobre ${church.name}:`,
    name.trim() ? `\nNombre: ${name.trim()}` : "",
    message.trim() ? `\n\n${message.trim()}` : "\n\n[Escribe aquí tu experiencia]",
  ].join("");

  const whatsappUrl = `https://wa.me/${church.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="rounded-[var(--radius-card)] border border-white/15 bg-white/5 p-5 md:p-6">
      <div className="flex items-center gap-2">
        <MessageSquareHeartIcon className="size-4 text-primary" aria-hidden />
        <p className="font-montserrat text-sm font-bold text-white">Comparte tu experiencia</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        ¿Dios ha hecho algo especial en tu vida aquí? Cuéntanos. Tu testimonio puede animar a
        alguien más.
      </p>

      <div className="mt-4 space-y-3">
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Tu nombre"
          aria-label="Tu nombre"
          className="border-white/20 bg-white/10 text-white placeholder:text-white/45"
        />
        <Textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Escribe tu testimonio o comentario sobre la iglesia..."
          aria-label="Tu testimonio o comentario"
          className="min-h-24 border-white/20 bg-white/10 text-white placeholder:text-white/45"
        />
        <div className="flex flex-wrap gap-2 pt-1">
          <Button asChild variant="primary" size="default">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Enviar testimonio
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="default"
            className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href={church.googleReviews.url} target="_blank" rel="noopener noreferrer">
              <StarIcon className="size-4 fill-secondary text-secondary" aria-hidden />
              Opinar en Google
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export { ShareTestimonialForm };
