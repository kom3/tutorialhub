export default {
  order: 1,
  id: "solid-principles",
  title: "SOLID Principles",
  category: "Design Principles",
  sections: [
    {
      title: "Overview",
      body: "SOLID is a set of five object-oriented design principles that improve maintainability, scalability, and testability of software systems. They help reduce tight coupling and increase cohesion, making systems easier to extend without breaking existing functionality."
    },
    {
      title: "S - Single Responsibility Principle (SRP)",
      body: "A class should have only one reason to change. Each class should have a single responsibility or functionality. This reduces complexity, makes code easier to maintain, and improves testability.",
      code: `class Invoice:
    def __init__(self, amount):
        self.amount = amount

class InvoicePrinter:
    def print(self, invoice: Invoice):
        print(f"Invoice Amount: {invoice.amount}")`,
      codeLang: "python",
    },
    {
      title: "O - Open/Closed Principle (OCP)",
      body: "Software entities (classes, modules, functions) should be open for extension but closed for modification. You should be able to add new functionality without changing existing code, preventing bugs and regressions.",
      code: `class PaymentProcessor:
    def pay(self, amount):
        raise NotImplementedError

class CreditCardPayment(PaymentProcessor):
    def pay(self, amount):
        print("Processing credit card payment")

class PayPalPayment(PaymentProcessor):
    def pay(self, amount):
        print("Processing PayPal payment")`,
      codeLang: "python",
    },
    {
      title: "L - Liskov Substitution Principle (LSP)",
      body: "Subtypes must be substitutable for their base types. Functions using a base class should be able to use derived classes without knowing the difference, ensuring correctness when extending classes.",
      code: `def process_payment(processor: PaymentProcessor):
    processor.pay(100)

# Both CreditCardPayment and PayPalPayment can be passed to process_payment
process_payment(CreditCardPayment())
process_payment(PayPalPayment())`,
      codeLang: "python",
    },
    {
      title: "I - Interface Segregation Principle (ISP)",
      body: "Clients should not be forced to depend on interfaces they do not use. Create smaller, focused interfaces instead of large, general-purpose ones to avoid unnecessary dependencies.",
      code: `class Workable:
    def work(self):
        pass

class Eatable:
    def eat(self):
        pass

class Human(Workable, Eatable):
    def work(self):
        print("Human working")
    def eat(self):
        print("Human eating")`,
      codeLang: "python",
    },
    {
      title: "D - Dependency Inversion Principle (DIP)",
      body: "High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This allows flexible swapping of components.",
      code: `class OrderService:
    def __init__(self, payment_processor: PaymentProcessor):
        self.payment_processor = payment_processor

    def checkout(self, amount):
        self.payment_processor.pay(amount)

order = OrderService(CreditCardPayment())
order.checkout(200)`,
      codeLang: "python",
    },
    {
      title: "When to Use",
      note: [
        "Building scalable backend systems.",
        "Designing extensible frameworks.",
        "Reducing tight coupling in large codebases.",
        "Common interview discussion topic for OOP design.",
        "Helps to write code that is maintainable, testable, and easier to extend."
      ],
    },
  ],
};