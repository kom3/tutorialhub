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
      title: "Python Implementation Example",
      code: `# S - Single Responsibility Principle
class Invoice:
    def __init__(self, amount):
        self.amount = amount

class InvoicePrinter:
    def print(self, invoice: Invoice):
        print(f"Invoice Amount: {invoice.amount}")

# O - Open/Closed Principle
class PaymentProcessor:
    def pay(self, amount):
        raise NotImplementedError

class CreditCardPayment(PaymentProcessor):
    def pay(self, amount):
        print("Processing credit card payment")

class PayPalPayment(PaymentProcessor):
    def pay(self, amount):
        print("Processing PayPal payment")

# L - Liskov Substitution Principle
def process_payment(processor: PaymentProcessor):
    processor.pay(100)

# I - Interface Segregation Principle
class Workable:
    def work(self):
        pass

class Eatable:
    def eat(self):
        pass

class Human(Workable, Eatable):
    def work(self):
        print("Human working")

    def eat(self):
        print("Human eating")

# D - Dependency Inversion Principle
class OrderService:
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
        "Common interview discussion topic for OOP design."
      ],
    },
  ],
};