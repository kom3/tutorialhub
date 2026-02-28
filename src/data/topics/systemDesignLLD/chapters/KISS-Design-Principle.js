export default {
  order: 3,
  id: "kiss-principle",
  title: "KISS (Keep It Simple, Stupid)",
  category: "Design Principles",
  sections: [
    {
      title: "Overview",
      body: "KISS emphasizes simplicity. Systems work best when they are kept simple rather than made complicated. Avoid unnecessary abstractions or over-engineering."
    },
    {
      title: "Python Implementation Example",
      code: `# ❌ Overengineered
class MathOperations:
    def add(self, a, b):
        return sum([a, b])

# ✅ Simple
def add(a, b):
    return a + b

print(add(2, 3))`,
      codeLang: "python",
    },
    {
      title: "When to Use",
      note: [
        "During early development stages.",
        "When solving straightforward problems.",
        "Avoiding premature optimization.",
        "Helps during system design interviews."
      ],
    },
  ],
};