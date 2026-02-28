export default {
  order: 2,
  id: "dry-principle",
  title: "DRY (Don't Repeat Yourself)",
  category: "Design Principles",
  sections: [
    {
      title: "Overview",
      body: "The DRY principle states that every piece of knowledge should have a single, unambiguous representation in a system. Repeated logic leads to bugs, maintenance overhead, and inconsistency."
    },
    {
      title: "Python Implementation Example",
      code: `# ❌ Bad (Violation of DRY)
def calculate_tax(price):
    return price * 0.18

def calculate_discounted_tax(price):
    return (price - 10) * 0.18

# ✅ Good (DRY Applied)
TAX_RATE = 0.18

def calculate_tax(price):
    return price * TAX_RATE

def calculate_discounted_tax(price):
    discounted_price = price - 10
    return calculate_tax(discounted_price)

print(calculate_discounted_tax(100))`,
      codeLang: "python",
    },
    {
      title: "When to Use",
      note: [
        "When business rules are reused in multiple places.",
        "When configuration values may change in future.",
        "Reduces duplication and improves maintainability."
      ],
    },
  ],
};