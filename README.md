# Skin Microbiome Explorer

A technical challenge for HelloBiome. This is a front-end application built to explore and analyze skin microbiome data (bacteria and fungi).

🌍 **Live Demo:** https://hellobiome-challenge.vercel.app/

## Tech Stack

- **Framework:** Next.js (App Router) + React
- **Language:** TypeScript (Strictly typed interfaces and union types)
- **Styling:** Tailwind CSS for a clean, responsive, and modern UI
- **State Management:** React `useState` and `useMemo` for optimized rendering

---

## 1. How to run the project locally

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone [https://github.com/shramkovadym/hellobiome-challenge.git](https://github.com/shramkovadym/hellobiome-challenge.git)

   ```

2. Navigate into the project directory:

cd hellobiome-challenge

3. Install the dependencies:

npm install

4. Start the development server:

npm run dev

5. Open your browser and visit http://localhost:3000.

## 2. How much time I spent

I spent approximately 1 hour 30 minutes on this challenge.

~15 mins: Planning the architecture, setting up the Next.js App Router, and strictly typing the mock data (Interfaces, Union Types).

~50 mins: Building the UI components (MicrobeCard, controls) using Tailwind CSS and ensuring the layout is fully responsive.

~25 mins: Implementing the state logic, optimizing the filtering and sorting algorithms with useMemo, and deploying to Vercel.

## 3. What I would improve with more time

If I had more time to expand this application, I would focus on the following improvements:

Unit and Component Testing: Implement tests using Jest and React Testing Library to ensure the sorting and filtering logic works flawlessly under edge cases.

Advanced Filtering & Search: Add a search bar to find specific microorganisms by name, and allow filtering by the role (beneficial, pathogenic, neutral) using multiple checkboxes.

API Integration: Move the hardcoded mock data to a real backend. I would utilize Next.js Route Handlers (API routes) to fetch data asynchronously.

UI Animations: Integrate a library like Framer Motion or Auto-Animate to provide smooth transitions when the list of microbes is reordered or filtered.

Accessibility (a11y): Further improve accessibility by ensuring perfect contrast ratios, adding ARIA labels to the filter buttons, and ensuring complete keyboard navigability.
