import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  "התקנת פרקט — למינציה, SPC, עץ",
  "פרקט פישבון ותלת-שכבתי",
  "שטיחים מקיר לקיר — הדבקה ומתיחה",
  "תיקוני פרקט ושטיחים",
  "התקנת דקים וחידושם",
];

export default function Services() {
  return (
    <section className="bg-bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <ScrollReveal>
          <h2 className="mb-8 text-h2 text-brand-primary md:mb-12 md:text-[30px]">
            מה בדיוק אפשר לבקש ממני
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <ul className="mb-10 space-y-4">
            {services.map((service, i) => (
              <li
                key={i}
                className="flex items-start gap-4 text-body text-text-primary"
              >
                <span className="mt-[11px] block h-[7px] w-[7px] shrink-0 rounded-full bg-accent" />
                {service}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="mb-5 text-body text-text-secondary">
            לא בטוחים מה מתאים לכם? שלחו תמונה — אני אגיד מה נכון לעשות.
          </p>
          <WhatsAppButton
            text="שאלו את ג׳ריקו"
            supportLine="לא בטוחים מה צריך? שלחו תמונה."
            message="היי ג׳ריקו, ראיתי את הדף. מחפשים לעשות פרקט, שולחים תמונה."
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
