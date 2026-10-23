# NovaPOS — Next.js EPOS Website

## Chalane ka tareeqa
```bash
npm install
npm run dev
```
Phir browser mein http://localhost:3000 kholein.

## Apna brand lagana
Sirf `lib/site.ts` edit karein — naam, phone, email, price, features, footer links sab wahan hain.
Colors `tailwind.config.ts` mein (`brand` aur `accent`).

## Structure
- `components/Header.tsx` — top bar, navbar, dropdowns, mobile menu
- `components/Hero.tsx` — hero section
- `components/Features.tsx`, `AllInOne.tsx`, `Benefits.tsx` (tabs), `Partners.tsx`, `Analytics.tsx`
- `components/DemoSection.tsx` — Book a Demo form
- `components/ModalProvider.tsx` — Demo / Callback popups
- `components/OfferPopup.tsx` — 5 second baad aane wala bundle offer popup
- `components/Footer.tsx`

Forms abhi sirf "Thank you" dikhate hain; data email/database par bhejne ke liye `onSubmit` mein apni API call laga dein.
