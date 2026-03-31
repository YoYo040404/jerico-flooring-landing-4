## 1. Visual + Interaction Strategy Snapshot
- First impression goal: תוך 3–5 שניות המבקר צריך להבין שלושה דברים: זה איש מקצוע אמיתי, הוא עושה בעצמו את העבודה, והדרך הכי קלה להתקדם היא לשלוח וואטסאפ עם תמונות.
- Interaction philosophy: אינטראקציה רק כשיש לה תפקיד ברור — לחשוף מידע בהדרגה, להבליט CTA, לחזק אמון, ולהפוך את העמוד לקריא יותר. לא אנימציה לשם ״מודרניות״.
- Motion rules (what to use / avoid): להשתמש ב-reveal עדין, micro-feedback בלחצנים, sticky CTA חכם, תנועת רקע כמעט לא מורגשת, ופרוגרס עדין בגלריה. להימנע מפרלקסה כבדה, קרוסלות אוטומטיות, מספרי קופצים, blur-heavy overlays, ואנימציות שמזיזות בלוקים גדולים בזמן קריאה.

## 2. Page Layout + Interaction Plan

### Hero
- Visual goal: לבסס אמון מיידי ולחבר בין הפנים של ג׳ריקו, סוג העבודה, וה-CTA הראשי.
- Layout: מסך ראשון בגובה 88–100svh. שכבת תמונה/וידאו-סטיל של עבודה אמיתית או דיוקן עבודה בצד אחד, בלוק טקסט כהה-בהיר בצד השני, ומתחתיו CTA ראשי + trust chips. במובייל: לוגו קטן למעלה, headline, support line, trust chips, CTA, ורק אחר כך התמונה.
- Interaction layer: כניסה מדורגת קצרה מאוד לכותרת/שורת משנה/CTA. trust chips נכנסים יחד עם הכותרת, לא בעיכובים ארוכים. CTA מקבל tap compression עדין והצללה חזקה יותר ב-hover רק בדסקטופ.
- Image behavior: אם משתמשים בתמונה אחת — zoom איטי מאוד של 2–3% בלבד או drift אנכי עדין. אם משתמשים בשתי תמונות — crossfade ידני על scroll ראשון בלבד, לא אוטומטי מתמשך.
- Mobile behavior: headline קצר מאוד, CTA מעל קפל ראשון, trust chips בשורה נשברת ל-2 שורות. אין hero עמוס ויזואלית ואין טקסט על גבי אזור עמוס בפרטים.
- CTA logic: CTA ראשי אחד ברור. microcopy מתחתיו: מה לשלוח בוואטסאפ ומה קורה מיד אחר כך.

### Identity
- Visual goal: להחליף תחושת ״אתר קבלן כללי״ בתחושת בעל מקצוע אישי, מדויק וזמין.
- Layout: בלוק דו-עמודי בדסקטופ — דיוקן/תמונת עבודה מצד אחד וטקסט מצד שני. במובייל: תמונה, כותרת, 2 פסקאות קצרות, ואז 3–4 proof rows עם אייקון מינימלי או קו הדגשה.
- Interaction layer: reveal לקונטיינר כולו ואז stagger קצר לרשימת ההוכחות. בלי אנימציית count-up ובלי card flips.
- Image behavior: תמונת דיוקן אמתית עם crop נקי. hover קל של image scale רק בדסקטופ.
- Mobile behavior: לרווח פחות בין פסקאות, להפוך את רשימת ההוכחות ל-cards דקים ברוחב מלא.
- CTA logic: אין כפתור מלא כאן. אפשר טקסט-CTA קטן בלבד: ״רוצים לבדוק אם זה מתאים? שלחו תמונה״.

### Testimonials
- Visual goal: להמיר את הסקשן מאזור עדויות לא אמינות לאזור proof-driven trust.
- Layout: במקום 3 testimonial cards מזויפים, לבנות 3 trust cards: ״מי מגיע", ״איך מתחילים", ״איך מסיימים״. אם יש בהמשך המלצות אמתיות — להוסיף רק אחת או שתיים עם שם פרטי + עיר.
- Interaction layer: stagger עדין לכל card. hover רק עם shadow/translateY של 2–4px.
- Image behavior: לא חובה תמונה כאן. אם מוסיפים — רק אייקון קווי קטן או detail crop של חומר/גמר.
- Mobile behavior: stack מלא, עם רווחים קטנים וקריאות גבוהה.
- CTA logic: CTA משני קצר אחרי הכרטיסיות אם הסקשן יוצא ארוך מדי.

### Services
- Visual goal: לעזור למבקר לזהות מיד אם ג׳ריקו רלוונטי לסוג העבודה שלו.
- Layout: במקום רשימה פשוטה, לבנות service blocks עם כותרת קצרה, שורת הסבר אחת, וסמן ויזואלי עקבי. 2 עמודות בדסקטופ, עמודה אחת במובייל.
- Interaction layer: card hover/tap feedback עדין. אפשר reveal stagger לפי שורות.
- Image behavior: בלי תמונות חובה בכל שירות. אם מוסיפים, אז thumbnail מונוכרומטי או detail shot קטן בלבד.
- Mobile behavior: cards בגובה אוטומטי, padding נדיב, כותרת השירות גדולה יותר מהטקסט המשני.
- CTA logic: מתחת לרשימת השירותים CTA משני: ״לא בטוחים איך קוראים לזה? שלחו תמונה״.

### Gallery
- Visual goal: להוכיח רמה דרך תוצאה ויזואלית ולא דרך סופרלטיבים.
- Layout: גלריית masonry/rows מאוזנת בדסקטופ, grid פשוט של 2 טורים במובייל. אם יש מספיק חומרים אמיתיים — להכניס 1–2 before/after pairs בראש הסקשן ורק אחר כך gallery grid.
- Interaction layer: hover zoom קל לתמונות, lightbox מהיר, swipe/next במובייל בתוך lightbox. אין autoplay. אם יש before/after — slider ידני בלבד, עם drag/tap ברור.
- Image behavior: להשתמש ב-detail shots, full-room shots, וחיבורי קצה/פינות. התמונות הראשונות צריכות להיות הכי משכנעות, לא בהכרח הכי יפות אמנותית.
- Mobile behavior: lightbox full-screen עם close גדול. thumbnails גדולים מספיק ללחיצה.
- CTA logic: CTA אחרי 4–6 תמונות ראשונות, לא רק בסוף כל הגלריה.

### Process
- Visual goal: להפוך את התהליך לפשוט, קצר ולא מאיים.
- Layout: timeline קצר של 3 שלבים עם מספרים, כותרת קצרה ומשפט אחד לכל שלב. בדסקטופ אפשר לחבר עם line progress דקה. במובייל stack מלא.
- Interaction layer: reveal step-by-step. line progress יכולה להתמלא קלות כשהסקשן נכנס ל-view, אבל לא להיות scroll-linked רציף.
- Image behavior: לא חובה. אם מוסיפים — רק mini visual ליד שלב 1 (צילום וואטסאפ) או שלב 3 (בדיקה בסיום).
- Mobile behavior: כרטיסיות מופרדות היטב, בלי חיצים קטנים שקשה להבין.
- CTA logic: CTA מייד אחרי שלב 3, כי שם החרדה הכי נמוכה.

### FAQ
- Visual goal: לסגור התנגדויות בלי להעמיס טקסט.
- Layout: אקורדיון אחד-פתוח-בכל-זמן. בראש הסקשן 4–5 שאלות עיקריות בלבד. אם יש עוד — להעביר לאזור משני.
- Interaction layer: פתיחה/סגירה חלקה, סיבוב אייקון עדין, highlight קל לשאלה פתוחה.
- Image behavior: אין צורך בתמונות.
- Mobile behavior: touch targets גדולים, padding נדיב, תשובות קצרות עם שורות לא ארוכות.
- CTA logic: אחרי 2–3 שאלות — inline text CTA קטן. בסוף הסקשן כפתור מלא.

### FinalCTA
- Visual goal: סגירה נקייה ופשוטה, בלי לחזור על כל העמוד.
- Layout: בלוק כהה, כותרת אחת, שורת הבהרה, 3 mini bullets של ״מה לשלוח״, ואז CTA. אפשר להוסיף mini reassurance row מתחת לכפתור.
- Interaction layer: כניסה אחת שקטה לכל הבלוק. CTA עם אותה התנהגות כמו בהירו כדי לשמור עקביות.
- Image behavior: watermark חלש בלבד או בלי תמונה בכלל אם זה פוגע בקריאות.
- Mobile behavior: טקסט קצר מאוד, bullets קצרים מאוד, CTA full-width.
- CTA logic: זה המקום ל-"שלחו 3 תמונות + מ״ר + עיר" באופן הכי ברור בעמוד.

## 3. Modern Interaction System
- Scroll animations: reveal up קצר של 16–24px, stagger של 60–100ms בין פריטים, once=true לכל אזור תוכן. scroll-linked effects רק בהירו ובפרוגרסים דקים מאוד.
- Micro-interactions: hover/tap ללחצני וואטסאפ, hover עדין לתמונות ול-cards, highlight לשאלה פתוחה ב-FAQ, state change קטן אחרי click ל-CTA כמו "פותח וואטסאפ..." ל-600–900ms.
- Sticky elements: sticky top progress bar דקה מאוד או sticky CTA bar במובייל אחרי שה-Hero נעלם. לא גם וגם באופן אגרסיבי.
- Image effects: zoom קל, lightbox מהיר, before/after slider ידני, no autoplay. אם מוסיפים parallax — רק לשכבת תמונה אחת בהירו ובטווח תנועה קטן מאוד.
- Performance rules: אנימציות מבוססות opacity/transform בלבד, בלי layout thrashing, בלי scroll listeners כבדים, בלי ספריית animation גדולה אם אפשר להסתפק במה שכבר קיים.

## 4. WhatsApp Conversion System
- Sticky CTA behavior: במובייל, אחרי שה-Hero יוצא מהפריים, להציג bottom sticky bar בגובה נמוך עם טקסט אחד ברור וכפתור אחד. להסתיר כשמגיעים ל-Final CTA כדי לא ליצור כפילות. בדסקטופ מספיק floating button + inline CTAs.
- Floating button behavior: לשמור את הכפתור הקיים אבל להפסיק pulse אינסופי. להחליף ל-intro pulse חד-פעמי ואז מצב סטטי. כשהמשתמש לוחץ — micro-state קצר של "פותח וואטסאפ".
- Click feedback: scale down קטן ב-tap, ripple/shine עדין לא נדרש. עדיף shadow shift + label swap קצר.
- Prefill UX: כל CTA צריך לשלוח template שונה לפי context: Hero = בירור ראשוני, Gallery = מבקש הערכת מחיר, FAQ/Final = יודע מה לשלוח. בתוך ה-CTA עצמו להבהיר: "שלחו 3 תמונות + מ״ר + עיר".
- CTA repetition logic: Hero, אחרי Services, בתוך Gallery/אחריה, אחרי Process, וב-Final CTA. לא לשים כפתור מלא בכל סקשן.

## 5. Image & Media Strategy
- Image types required:
  - תמונת Hero אמתית של עבודה/סצנה איכותית
  - דיוקן אמיתי של ג׳ריקו
  - 6–10 תמונות עבודה אמתיות
  - 2–3 detail shots של גימור/פינות/חיבורים
  - אם אפשר: 1–2 before/after sets
- Placement rules:
  - Hero: תמונה אחת חזקה בלבד
  - Identity: דיוקן אחד
  - Gallery: התמונות העיקריות
  - Services/FAQ: ללא עומס תמונות מיותר
- Interaction patterns:
  - gallery lightbox
  - optional before/after slider רק כשיש זוגות אמיתיים טובים
  - subtle hover zoom בדסקטופ בלבד
- Performance considerations:
  - לעבור ל-`next/image` עבור תמונות מרכזיות כדי לצמצם layout shift ולהרוויח אופטימיזציית תמונות מובנית
  - lazy-load לגלריה ול-lightbox
  - dynamic import ל-lightbox/slider אם מוסיפים אותם
  - להימנע מווידאו unless יש חומר מצוין ומשקל מבוקר

## 6. Component-Level Implementation Plan

### Hero.tsx
- Change: לפרק את ה-Hero ל-2 אזורים: copy stack + media stack. להוסיף trust chips מעל/מתחת ל-CTA. לשנות overlay כך שיש קריאות טובה גם במובייל.
- Add (interaction + animation): reveal קצר לכותרת/שורת משנה/CTA; drift עדין לתמונה; CTA tap feedback; mini row של proof chips; optional top progress line.
- Remove: full-screen תלות מוחלטת בתמונת רקע יחידה, והיררכיה שבה הכל יושב רק למטה על overlay כהה.

### Identity.tsx
- Change: להפוך את רשימת היתרונות ל-proof rows/cards עם hierarchy ברור יותר. לקצר רוחב שורות טקסט.
- Add (interaction + animation): stagger ל-proof rows; hover עדין לתמונת הדיוקן בדסקטופ.
- Remove: blocks ארוכים מדי ברוחב מלא.

### Testimonials.tsx
- Change: להחליף placeholder testimonials ב-trust cards או proof system אמיתי.
- Add (interaction + animation): reveal cards עם hover shadow קל.
- Remove: כל ציטוט שאינו מאומת.

### Services.tsx
- Change: להפוך מרשימת bullets ל-service cards עם כותרת קצרה + line explanation.
- Add (interaction + animation): hover/tap states לכרטיסים; reveal stagger לפי שורות.
- Remove: רשימה טקסטואלית ארוכה מדי ללא היררכיה.

### Gallery.tsx
- Change: לבנות סדר עדיפות לגלריה: before/after ראשונים אם קיימים, אחר כך grid. להחליף grid אחיד במבנה יותר מודרני אך נשלט.
- Add (interaction + animation): lightbox lazy-loaded; hover zoom; swipe במובייל; optional comparison slider.
- Remove: gallery random ללא סדר איכותי, ותמונות placeholder.

### Process.tsx
- Change: לשפר את ה-timeline כך שיהיה קריא יותר במובייל ופחות דקורטיבי.
- Add (interaction + animation): reveal לכל שלב, line fill עדין, CTA קצר לאחר השלבים.
- Remove: חיצים דקורטיביים אם הם לא ברורים מספיק ב-RTL/mobile.

### FAQ.tsx
- Change: להגביל ל-open one at a time ולחדד טיפוגרפיה בין שאלה לתשובה.
- Add (interaction + animation): rotation עדין לאייקון, background emphasis קל לשאלה פתוחה.
- Remove: יותר מדי שאלות פתוחות או תשובות ארוכות מדי.

### FinalCTA.tsx
- Change: להוסיף mini bullets של מה לשלוח ולחזק את ה-reassurance ליד ה-CTA.
- Add (interaction + animation): כניסה שקטה אחת, feedback אחיד לכפתור.
- Remove: טקסט כללי מדי שלא מוסיף מידע חדש.

### FloatingWhatsApp.tsx
- Change: להוסיף logic של hide/show מול sticky mobile CTA, כדי שלא יהיו שני CTA צפים יחד.
- Add (interaction + animation): intro pulse חד-פעמי, label swap קצר לאחר click.
- Remove: pulse אינסופי קבוע.

### WhatsAppButton.tsx
- Change: לתמוך ב-variant נוסף ל-sticky bar ול-state זמני אחרי click.
- Add (interaction + animation): tap scale, optional icon shift קטן, support line קומפקטית יותר במובייל.
- Remove: אחידות מוחלטת בין כל CTA בלי הקשר ספציפי.

### ScrollReveal.tsx
- Change: להוסיף תמיכה ב-`once`, `distance`, `duration`, ו-`delayMs` במקום מחלקות delay קשיחות בלבד.
- Add (interaction + animation): אפשרות direction קלה (up/right/left) לשימוש מדוד בלבד.
- Remove: reliance על 4 delay classes קבועות לכל האתר.

## 7. How to See Changes Live

1. Install dependencies  
   `npm install`

2. Run dev server  
   `npm run dev`

3. Open browser  
   `http://localhost:3000`

4. Scroll test (animations + transitions)  
   לבדוק שה-reveal-ים קצרים, שאין קפיצות layout, וששום אנימציה לא מאטה את הגלילה.

5. Test WhatsApp flow  
   ללחוץ על כל CTA, לוודא שה-prefill מתאים להקשר, שה-floating button וה-sticky CTA לא מתנגשים, ושאין כפילות אגרסיבית.

6. Test mobile responsiveness  
   ב-DevTools לבדוק לפחות: 390px, 430px, 768px, 1280px. לבדוק במיוחד Hero, sticky CTA, גלריה, FAQ ו-Final CTA.

## 8. UX & Interaction Warnings
- What NOT to overuse:
  - pulse אינסופי
  - parallax מורגש
  - reveal איטי מדי
  - אפקטים שונים בכל סקשן
  - badges/guarantees שלא מגובים במציאות
- What breaks conversion:
  - יותר מדי תנועה בזמן קריאה
  - CTA צפים שמתחרים אחד בשני
  - גלריה איטית או כבדה
  - Hero עם מעט מדי מידע מעל הקפל
  - טקסטים שנשברים גרוע במובייל
- What must stay fast and simple:
  - פתיחת וואטסאפ
  - קריאות headline + CTA בהירו
  - FAQ
  - gallery lightbox
  - כל אנימציה צריכה להיעצר או להצטמצם תחת prefers-reduced-motion
