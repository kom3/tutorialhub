// DSA topic - chapters are dynamically imported from the chapters/ folder
// No need to manually add each chapter file; Vite's import.meta.glob discovers them

// Dynamically import all chapter files from the chapters/ folder
const chapterModules = import.meta.glob("./chapters/*.js", { eager: true });

// Extract default exports and sort by order or filename
const chapters = Object.values(chapterModules)
  .map((m) => m.default)
  .filter(Boolean)
  .sort((a, b) => (a.order || 0) - (b.order || 0));

export default {
  id: "HLD",
  title: "High-Level Design (HLD)",
  published: true, // set to false to hide from landing page
  subtitle:
    "System design principles and patterns for building scalable and maintainable applications",
  // chapters will be added later
  chapters,
  footer: "Good luck designing scalable systems!",
};
