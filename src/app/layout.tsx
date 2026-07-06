import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/navigation";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { fontVariables } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/metadata";
import { Providers } from "@/providers";

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#F5EFE6",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={fontVariables} suppressHydrationWarning>
      <body className="font-inter min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <Header />
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
