import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ג׳ריקו אספינוזה | התקנת פרקט ושטיחים במרכז הארץ",
  description:
    "ג׳ריקו אספינוזה — 25 שנה של התקנת פרקט ושטיחים במרכז הארץ. מגיע לבד, עובד בדיוק, עומד בזמנים. שלחו תמונה בוואטסאפ וקבלו הערכת מחיר.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="he" className={rubik.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ג׳ריקו אספינוזה — התקנת פרקט ושטיחים",
              description:
                "התקנת פרקט ושטיחים במרכז הארץ — 25 שנה של ניסיון. עובד לבד, עומד בזמנים, בודק הכל בסיום.",
              telephone: "+972-54-396-2871",
              address: {
                "@type": "PostalAddress",
                addressLocality: "גוש דן",
                addressCountry: "IL",
              },
              areaServed: [
                { "@type": "City", name: "תל אביב" },
                { "@type": "City", name: "רמת גן" },
                { "@type": "City", name: "גבעתיים" },
                { "@type": "City", name: "הרצליה" },
                { "@type": "City", name: "רעננה" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
              priceRange: "₪₪",
            }),
          }}
        />
      </head>
      <body className="font-rubik antialiased">{children}</body>
    </html>
  );
}
