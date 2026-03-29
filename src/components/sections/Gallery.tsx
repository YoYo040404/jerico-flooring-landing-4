"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";

// TODO: Add actual gallery images to /public/gallery/
const galleryImages = [
  { src: "/gallery/01.jpg", alt: "עבודת פרקט — סלון" },
  { src: "/gallery/02.jpg", alt: "עבודת פרקט — חדר שינה" },
  { src: "/gallery/03.jpg", alt: "התקנת שטיח — משרד" },
  { src: "/gallery/04.jpg", alt: "פרקט פישבון — מטבח" },
  { src: "/gallery/05.jpg", alt: "חידוש דק — מרפסת" },
  { src: "/gallery/06.jpg", alt: "פרקט למינציה — דירה" },
  { src: "/gallery/07.jpg", alt: "פרקט — חלל מגורים" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <ScrollReveal>
          <h2 className="mb-3 text-h2 text-brand-primary md:text-[30px]">
            עבודות שעשיתי
          </h2>
          <p className="mb-10 text-body text-text-secondary md:mb-14">
            כל תמונה היא בית אמיתי. כל עבודה — אני עשיתי אותה.
          </p>
        </ScrollReveal>

        <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {galleryImages.map((img, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <button
                onClick={() => setLightbox(img.src)}
                className="group relative block w-full overflow-hidden rounded-xl bg-brand-primary/5 transition-transform duration-300 hover:scale-[1.02]"
                style={{ aspectRatio: "4/3" }}
                aria-label={`הגדל תמונה: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <WhatsAppButton
            text="שלחו תמונה לג׳ריקו"
            supportLine="שולחים תמונה, מקבלים הערכה — בלי להתחייב."
            message="היי ג׳ריקו, ראיתי את העבודות. אפשר לדעת כמה זה עולה אצלנו?"
          />
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 start-6 text-3xl text-white/80 transition-colors hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="סגור תמונה"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="תמונה מוגדלת"
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
