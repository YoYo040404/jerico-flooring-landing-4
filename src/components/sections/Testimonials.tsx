import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    text: "לא האמנתי כמה זה שינה את כל הבית. פתאום הכול נראה מסודר וחדש.",
    name: "לקוח/ה", // TODO: שם פרטי + עיר
  },
  {
    text: "היית ישר, הסברת מה צריך ומה לא צריך, ובסוף יצא אפילו יותר טוב ממה שחשבנו.",
    name: "לקוח/ה", // TODO: שם פרטי + עיר
  },
  {
    text: "מה שאהבתי זה שלא מרחת אותנו. באת, עשית עבודה נקייה, ובסוף בדקנו הכול יחד.",
    name: "לקוח/ה", // TODO: שם פרטי + עיר
  },
];

export default function Testimonials() {
  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <ScrollReveal>
          <h2 className="mb-10 text-h2 text-brand-primary md:mb-14 md:text-[30px]">
            מה אמרו אחרי שסיימנו
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i + 1} className="flex-1">
              <div className="rounded-xl border-t-[3px] border-accent bg-white p-7 transition-shadow duration-300 hover:shadow-md md:p-9">
                <div
                  className="mb-4 text-[40px] leading-none text-accent"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p className="mb-6 text-[17px] leading-relaxed text-text-primary">
                  {t.text}
                </p>
                <div className="h-px w-12 bg-accent/30" />
                <p className="mt-4 text-sm font-medium text-text-secondary">
                  — {t.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
