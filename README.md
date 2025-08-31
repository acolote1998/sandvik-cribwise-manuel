# Sandvik Machining Solutions - Angular Demo Project

This is a **personal side project** I created to practice frontend development with Angular and have some fun exploring a new framework. I built it to learn Angular and prepare for an upcoming interview at Sandvik. The project includes a replica of Sandvik's landing page and a simplified version of the **CRIBWISE** tool management interface. Since the real CRIBWISE system is not publicly accessible, I guided my work by screenshots and documentation to recreate a plausible interface.

## Features

- **Sandvik Landing Page:** An Angular-based landing page similar to Sandvik's main site.
  (https://www.home.sandvik/en/)
- **CRIBWISE Landing Page:** An Angular-based landing page similar to CRIBWISE's main site. (https://cribwise.com/)
- **CRIBWISE Interface (Prototype):** A demo version of the CRIBWISE administration portal, built from available screenshots and information.
- **Reusable Components:** UI elements are broken into reusable Angular components (e.g., navigation bar, product cards).
- **Responsive Design:** While optimized for desktop, the mobile layout is represented by a placeholder to indicate future adaptation.
- **Mock Data:** Simulated in-memory data is used to demonstrate dynamic content rendering.
- **Cross-Browser Compatibility:** Tested on modern browsers like Chrome, Firefox, and Edge.
- **Angular Best Practices:** Organized with Angular CLI structure, using TypeScript and component communication.

## Tech Stack

- **Angular** (framework for building the app)
- **TypeScript** (programming language for components)
- **HTML5 & CSS3/SCSS + Tailwind** (markup and styling)
- **Angular CLI** (development tooling and local server)
- **MatSnackBar**: for notifications
- **Ag-Charts**: for data visualization and graphs
- **GitHub Pages** (used for deploying the demo and making it publicly accessible)
- **Node.js & npm** (runtime and package management)

## What I Learned and My Approach

This was my first hands-on Angular project, so I focused on understanding core concepts. I started by replicating Sandvik's landing page to practice using components, modules, and the CLI tooling. I gradually added more features, breaking the UI into smaller components and learning how to pass data between them. I did the same with CRIBWISE's landing page. Then, building the CRIBWISE app prototype was challenging and fun: I interpreted designs and mimicked data flow without a real backend by using mock data.

Throughout the project, I aimed for clean, maintainable code and a logical file structure. I also paid attention to styling details to ensure a good user experience. Overall, this project helped me get comfortable with Angular and TypeScript and prepared me for real-world frontend challenges like those at Sandvik.

## Running the Project Locally

To run this project on your machine, follow these steps:

1. **Clone the repository:** `git clone https://github.com/acolote1998/sandvik-CRIBWISE-manuel/`
2. **Install dependencies:** Navigate into the project folder and run `npm install`.
3. **Start the development server:** Run `ng serve` (or `npm start`) and open `http://localhost:4200` in your browser.
4. **Explore the app:** You should see the Sandvik landing page and be able to navigate to the CRIBWISE landing page. Once there, please click "SEE DEMO" for the CRIBWISE demo app.

## Notes

- This project is **not affiliated with Sandvik**. It was created solely for learning and demonstration.
- The CRIBWISE interface here is a **mock-up** based on publicly available information and screenshots, not an official product.
- The goal of this project was learning and interview preparation, so some features (like real API integration or user authentication) are not implemented.
