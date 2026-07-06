import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        404
      </p>
      <h1 className="mt-4 font-montserrat text-4xl font-black tracking-tight text-text md:text-5xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        La página que buscas no existe o fue movida.
      </p>
      <Button asChild variant="primary" size="lg" className="mt-8">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
