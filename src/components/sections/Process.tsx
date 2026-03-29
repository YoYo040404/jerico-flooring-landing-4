import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "1",
    title: "שולחים תמונה בוואטסאפ",
    body: "אני רואה את המצב, שואל מה שצריך, ואומר לכם ישר מה מתאים ובכמה — בלי להגיע ובלי לחייב.",
  },
  {
    number: "2",
    title: "קובעים מועד",
    body: "אני מגיע בזמן שסוכם. לא שולח אף אחד אחר.",
  },
  {
    number: "3",
    title: "עובדים, בודקים, גומרים",
    body: "בסיום אנחנו עוברים על הכל יחד. לא עוזב עד שהכל כמו שצריך.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <ScrollReveal>
          <h2 className="mb-10 text-h2 text-text-on-dark md:mb-16 md:text-[30px]">
            איך זה עובד — מהרגע שכותבים עד שגומרים
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-8 md:flex-row-reverse md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i + 1} className="flex-1">
              <div className="relative">
                {/* Large decorative number */}
                <span className="absolute -top-4 end-0 text-[64px] font-bold leading-none text-text-on-dark/10 select-none pointer-events-none">
                  {step.number}
                </span>

                {/* Step number + title */}
                <div className="relative mb-4 flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-text-on-dark/15 text-lg font-bold text-text-on-dark">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-text-on-dark">
                    {step.title}
                  </h3>
                </div>

                <p className="text-body text-text-on-dark/80 ps-[60px]">
                  {step.body}
                </p>

                {/* Arrow between steps — desktop only, points LEFT for RTL */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 -start-6 scale-x-[-1]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-text-on-dark/30"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
