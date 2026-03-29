import ScrollReveal from "@/components/ScrollReveal";

export default function Identity() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="flex flex-col gap-10 md:flex-row-reverse md:items-center md:gap-16">
          {/* Text — RIGHT on desktop */}
          <div className="flex-1">
            <ScrollReveal>
              <h2 className="mb-6 text-h2 text-brand-primary md:text-[30px]">
                אתם יודעים מי מגיע. זה אני.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mb-6 text-[18px] leading-[1.85] text-text-primary">
                שמי ג׳ריקו אספינוזה. 25 שנה שאני מתקין פרקט ושטיחים במרכז הארץ
                — לבד, בלי פועלים שאני שולח במקומי.
              </p>
              <p className="mb-8 text-[18px] leading-[1.85] text-text-primary">
                כשאני לוקח עבודה, אני זה שמגיע. אני זה שעובד. ואני זה שנשאר עד
                שהכל יוצא כמו שצריך.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <ul className="space-y-3 text-body text-text-primary">
                <li className="border-s-[3px] border-accent ps-4 py-1">
                  עובד לבד — אין קבלני משנה
                </li>
                <li className="border-s-[3px] border-accent ps-4 py-1">
                  עומד בלוחות זמנים
                </li>
                <li className="border-s-[3px] border-accent ps-4 py-1">
                  בסיום בודקים הכל יחד
                </li>
                <li className="border-s-[3px] border-accent ps-4 py-1">
                  אומר מה צריך ומה לא — בלי לנפח עבודה
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Image — LEFT on desktop, TOP on mobile */}
          <div className="flex-1 order-first md:order-none">
            <ScrollReveal>
              <div className="relative h-[350px] md:h-[400px] overflow-hidden rounded-2xl bg-bg-secondary">
                <img
                  src="/jericho-portrait.jpg"
                  alt="ג׳ריקו אספינוזה — מתקין פרקט ושטיחים"
                  className="h-full w-full object-cover"
                />
                {/* Accent bar — asymmetric design moment */}
                <div className="absolute bottom-0 end-0 h-1.5 w-2/3 bg-accent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
