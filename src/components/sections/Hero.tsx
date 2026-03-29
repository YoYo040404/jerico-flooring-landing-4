import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section
      className="relative flex h-[100svh] items-end"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo — top right */}
      <img
        src="/logo.png"
        alt=""
        width={100}
        height={100}
        className="absolute top-6 end-6 z-20 drop-shadow-lg"
      />

      {/* Dark overlay — bottom 40% only for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(26,16,8,0.85) 0%, rgba(26,16,8,0.55) 35%, transparent 40%)",
        }}
      />

      <div className="hero-stagger relative z-10 w-full px-6 pb-12 md:px-16 md:pb-20">
        <h1 className="mb-4 text-[40px] font-[800] tracking-[-0.02em] text-white md:text-[52px] md:leading-[1.2]">
          הרצפה שלכם יכולה להיראות ככה
        </h1>

        <p className="mb-8 text-lg text-white/85">
          ג׳ריקו מגיע לבד, עובד בדיוק, ולא עוזב עד שהכל מושלם.
        </p>

        <div id="hero-cta">
          <WhatsAppButton
            text="שלחו תמונה לג׳ריקו"
            supportLine="עונה ישירות — לא מוקד, לא המתנה."
            message="היי ג׳ריקו, ראיתי את הדף. מחפשים לעשות פרקט, שולחים תמונה."
          />
        </div>

      </div>
    </section>
  );
}
