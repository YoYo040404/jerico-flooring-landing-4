"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "אפשר לקבל הערכת מחיר לפי תמונה?",
    a: "כן. שלחו תמונה בוואטסאפ ואני אומר לכם הערכה ראשונית — בלי ביקור ובלי התחייבות.",
  },
  {
    q: "כמה זמן לוקחת ההתקנה?",
    a: "תלוי בגודל. דירה ממוצעת — יום עד יומיים. אני אגיד לכם מראש כמה זמן צפוי.",
  },
  {
    q: "צריך לפנות את כל הרהיטים?",
    a: "לא תמיד. אני עובד מסביב לרהיטים כשאפשר. אגיד לכם מראש מה צריך להזיז.",
  },
  {
    q: "כמה אבק ובלגן זה עושה?",
    a: "פחות ממה שחושבים. אני עובד בסדר ומנקה בסיום. הבית לא הופך לאתר בנייה.",
  },
  {
    q: "מה אם יש בעיה אחרי שסיימתם?",
    a: "מטפל בזה. לא נעלם אחרי שגומר.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-16">
        <ScrollReveal>
          <h2 className="mb-10 text-h2 text-brand-primary md:mb-14 md:text-[30px]">
            שאלות שחוזרות לפני שמזמינים
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={Math.min(i + 1, 4)}>
                <div className="rounded-xl bg-bg-primary shadow-sm transition-shadow duration-200 hover:shadow-md">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start"
                    aria-expanded={isOpen}
                  >
                    <span className="text-body font-medium text-brand-primary">
                      {faq.q}
                    </span>
                    {/* Icon on LEFT side (action side in RTL) */}
                    <span
                      className="shrink-0 text-xl text-accent transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="px-6 pb-5 text-body text-text-primary">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
