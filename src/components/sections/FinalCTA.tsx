import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-20 md:py-28">
      {/* Logo watermark */}
      <img
        src="/logo.png"
        alt=""
        className="pointer-events-none absolute inset-0 m-auto w-64 select-none opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:px-16">
        <ScrollReveal>
          <h2 className="mb-4 text-[30px] font-semibold text-text-on-dark md:text-[36px]">
            רוצים לדעת כמה זה עולה?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="mb-10 text-body text-text-on-dark/80">
            שלחו תמונה בוואטסאפ. אני עונה ישירות — בלי מוקד, בלי המתנה.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="flex flex-col items-center">
            <WhatsAppButton
              text="קבלו הערכה בוואטסאפ"
              supportLine="ג׳ריקו יגיד לכם ישר מה צריך ומה לא."
              message="שלום ג׳ריקו, מעוניינים לשמוע כמה זה עולה. מה שולחים לך?"
              variant="dark"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <p className="mt-12 text-sm text-text-on-dark/50">
            ג׳ריקו אספינוזה — התקנת פרקט ושטיחים | 25 שנה במרכז הארץ
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
