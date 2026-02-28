export default {
  order: 4,
  id: "yagni-principle",
  title: "YAGNI (You Aren't Gonna Need It)",
  category: "Design Principles",
  sections: [
    {
      title: "Overview",
      body: "YAGNI states that you should not implement functionality until it is actually needed. Adding speculative features increases complexity and maintenance cost."
    },
    {
      title: "Python Implementation Example",
      code: `# ❌ Adding unnecessary feature
class ReportGenerator:
    def generate_pdf(self):
        print("Generating PDF")

    def generate_excel(self):  # Not needed yet
        print("Generating Excel")

# ✅ Implement only required feature
class ReportGenerator:
    def generate_pdf(self):
        print("Generating PDF")

report = ReportGenerator()
report.generate_pdf()`,
      codeLang: "python",
    },
    {
      title: "When to Use",
      note: [
        "Agile development environments.",
        "Startups or rapidly evolving products.",
        "Avoiding overengineering during interviews."
      ],
    },
  ],
};