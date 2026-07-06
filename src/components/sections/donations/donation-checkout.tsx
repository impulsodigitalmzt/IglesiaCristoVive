"use client";

import * as React from "react";
import {
  Building2Icon,
  CheckCircle2Icon,
  CreditCardIcon,
  Loader2Icon,
  LockIcon,
  ShieldCheckIcon,
  StoreIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { church } from "@/data/church";
import {
  donationCategories,
  donationTiers,
} from "@/data/donations";
import { fireDonationConfetti } from "@/lib/confetti";
import { cn } from "@/lib/utils";

type PaymentMethod = "card" | "spei" | "oxxo";
type DonationCategoryId = (typeof donationCategories)[number]["id"];

const DEMO_CLABE = "012180001234567890";
const DEMO_OXXO_REF = "9847 2156 3092";

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(amount);
}

function DonationCheckout() {
  const [step, setStep] = React.useState<"checkout" | "processing" | "success">("checkout");
  const [amount, setAmount] = React.useState(500);
  const [customAmount, setCustomAmount] = React.useState("");
  const [category, setCategory] = React.useState<DonationCategoryId>(donationCategories[0].id);
  const [method, setMethod] = React.useState<PaymentMethod>("card");
  const [isMonthly, setIsMonthly] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiry, setExpiry] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [donorName, setDonorName] = React.useState("");
  const [donorEmail, setDonorEmail] = React.useState("");
  const [reference, setReference] = React.useState("");

  const selectedAmount = customAmount
    ? Number.parseInt(customAmount.replace(/\D/g, ""), 10) || 0
    : amount;

  React.useEffect(() => {
    if (step !== "success") return;
    fireDonationConfetti();
  }, [step]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (selectedAmount < 50) return;

    setStep("processing");
    const generatedRef = `CV-${Date.now().toString().slice(-8)}`;
    setReference(generatedRef);

    window.setTimeout(() => {
      setStep("success");
    }, 2200);
  };

  if (step === "processing") {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[var(--radius-card-lg)] border border-border/60 bg-background px-8 py-16 text-center shadow-lg">
        <Loader2Icon className="size-12 animate-spin text-primary" aria-hidden />
        <p className="mt-6 font-montserrat text-xl font-bold text-text">
          Procesando tu ofrenda...
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Conectando de forma segura con la pasarela de pagos
        </p>
        <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <LockIcon className="size-3.5" aria-hidden />
          Transacción cifrada SSL 256-bit
        </div>
      </div>
    );
  }

  if (step === "success") {
    const categoryLabel =
      donationCategories.find((item) => item.id === category)?.label ?? "Ofrenda";

    return (
      <div className="rounded-[var(--radius-card-lg)] border border-border/60 bg-background px-6 py-10 shadow-lg md:px-10 md:py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
            <CheckCircle2Icon className="size-9" aria-hidden />
          </div>
          <h3 className="mt-5 font-montserrat text-2xl font-black text-text">
            ¡Gracias por tu generosidad!
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Tu {categoryLabel.toLowerCase()} de{" "}
            <strong className="text-text">{formatCurrency(selectedAmount)}</strong>
            {isMonthly ? " mensual" : ""} ha sido registrada correctamente.
          </p>
          <div className="mt-6 rounded-xl border border-border/60 bg-background-alt px-4 py-3 text-left text-sm">
            <p className="text-muted-foreground">Referencia</p>
            <p className="mt-1 font-mono font-semibold text-text">{reference}</p>
            <p className="mt-3 text-muted-foreground">Iglesia</p>
            <p className="mt-1 font-medium text-text">{church.legalName}</p>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Recibirás un comprobante en {donorEmail || "tu correo"} en los próximos minutos.
          </p>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="mt-8"
            onClick={() => {
              setStep("checkout");
              setCustomAmount("");
              setCardNumber("");
              setExpiry("");
              setCvv("");
            }}
          >
            Realizar otra ofrenda
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-[var(--radius-card-lg)] border border-border/60 bg-background shadow-lg"
    >
      <div className="border-b border-border/60 bg-[var(--color-surface-dark)] px-5 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase">
              Pasarela segura
            </p>
            <p className="mt-1 font-montserrat text-lg font-bold text-white">
              Ofrenda en línea · Cristo Vive
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
            <ShieldCheckIcon className="size-3.5 text-emerald-400" aria-hidden />
            Pago protegido
          </div>
        </div>
      </div>

      <div className="space-y-6 p-5 md:p-6">
        <div>
          <label className="text-sm font-semibold text-text">Tipo de ofrenda</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {donationCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
                  category === item.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 bg-background-alt text-text hover:border-primary/30",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-text">Monto en MXN</label>
          <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {donationTiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => {
                  setAmount(tier.amount);
                  setCustomAmount("");
                }}
                className={cn(
                  "rounded-xl border py-2.5 text-sm font-bold transition-all",
                  !customAmount && amount === tier.amount
                    ? "border-primary bg-primary/10 text-primary shadow-sm"
                    : "border-border/60 bg-background-alt text-text hover:border-primary/30",
                )}
              >
                {tier.label}
              </button>
            ))}
          </div>
          <div className="relative mt-3">
            <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
              $
            </span>
            <Input
              inputMode="numeric"
              placeholder="Otro monto"
              value={customAmount}
              onChange={(event) => setCustomAmount(event.target.value.replace(/\D/g, ""))}
              className="pl-8"
            />
          </div>
          <label className="mt-3 flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={isMonthly}
              onChange={(event) => setIsMonthly(event.target.checked)}
              className="size-4 rounded border-border text-primary focus:ring-primary"
            />
            <span className="text-sm text-muted-foreground">
              Convertir en ofrenda mensual recurrente
            </span>
          </label>
        </div>

        <div>
          <label className="text-sm font-semibold text-text">Método de pago</label>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {[
              { id: "card" as const, label: "Tarjeta", icon: CreditCardIcon },
              { id: "spei" as const, label: "SPEI", icon: Building2Icon },
              { id: "oxxo" as const, label: "OXXO Pay", icon: StoreIcon },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMethod(item.id)}
                  className={cn(
                    "flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-semibold transition-all",
                    method === item.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border/60 bg-background-alt text-text hover:border-primary/30",
                  )}
                >
                  <Icon className="size-4" aria-hidden />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {method === "card" ? (
          <div className="space-y-3 rounded-xl border border-border/60 bg-background-alt/50 p-4">
            <Input
              placeholder="Nombre en la tarjeta"
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
              autoComplete="cc-name"
            />
            <Input
              placeholder="Número de tarjeta"
              inputMode="numeric"
              value={cardNumber}
              onChange={(event) => setCardNumber(formatCardNumber(event.target.value))}
              autoComplete="cc-number"
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="MM/AA"
                inputMode="numeric"
                value={expiry}
                onChange={(event) => setExpiry(formatExpiry(event.target.value))}
                autoComplete="cc-exp"
              />
              <Input
                placeholder="CVV"
                inputMode="numeric"
                value={cvv}
                onChange={(event) => setCvv(event.target.value.replace(/\D/g, "").slice(0, 4))}
                autoComplete="cc-csc"
              />
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="rounded bg-[#1a1f71] px-2 py-1 text-[10px] font-bold text-white">
                VISA
              </div>
              <div className="rounded bg-[#eb001b] px-2 py-1 text-[10px] font-bold text-white">
                MC
              </div>
              <div className="rounded bg-[#006fcf] px-2 py-1 text-[10px] font-bold text-white">
                AMEX
              </div>
            </div>
          </div>
        ) : null}

        {method === "spei" ? (
          <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-text">Transferencia SPEI</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Al confirmar, generaremos una referencia única. También puedes usar esta CLABE
              interbancaria:
            </p>
            <p className="mt-3 font-mono text-sm font-bold tracking-wide text-primary">
              {DEMO_CLABE}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Beneficiario: {church.legalName}</p>
          </div>
        ) : null}

        {method === "oxxo" ? (
          <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4">
            <p className="text-sm font-semibold text-text">Pago en tienda OXXO</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Recibirás una referencia para pagar en cualquier OXXO. Válida por 72 horas.
            </p>
            <div className="mt-4 flex h-14 items-end justify-center gap-0.5 rounded-lg bg-white px-4">
              {Array.from({ length: 32 }).map((_, index) => (
                <div
                  key={index}
                  className="w-1 bg-text"
                  style={{ height: `${20 + ((index * 7) % 24)}px` }}
                  aria-hidden
                />
              ))}
            </div>
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              Ref. ejemplo: {DEMO_OXXO_REF}
            </p>
          </div>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            placeholder="Tu nombre"
            value={donorName}
            onChange={(event) => setDonorName(event.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Correo para comprobante"
            value={donorEmail}
            onChange={(event) => setDonorEmail(event.target.value)}
            required
          />
        </div>

        <div className="rounded-xl border border-border/60 bg-background-alt/60 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">Total a donar</span>
            <span className="font-montserrat text-2xl font-black text-primary">
              {formatCurrency(selectedAmount)}
              {isMonthly ? <span className="text-sm font-semibold text-muted-foreground"> /mes</span> : null}
            </span>
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={selectedAmount < 50}
        >
          <LockIcon className="size-4" aria-hidden />
          {method === "card"
            ? `Donar ${formatCurrency(selectedAmount)} de forma segura`
            : method === "spei"
              ? "Generar referencia SPEI"
              : "Generar referencia OXXO"}
        </Button>

        <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
          Al continuar, aceptas que tu ofrenda será destinada a los ministerios de{" "}
          {church.name}. Tus datos están protegidos con cifrado de extremo a extremo.
        </p>
      </div>
    </form>
  );
}

export { DonationCheckout };
