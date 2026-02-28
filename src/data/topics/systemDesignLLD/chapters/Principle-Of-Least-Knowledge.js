export default {
  order: 5,
  id: "principle-of-least-knowledge",
  title: "Principle of Least Knowledge (Law of Demeter)",
  category: "Design Principles",
  sections: [
    {
      title: "Overview",
      body: "A module should only communicate with its immediate collaborators and not navigate deeply through object structures. This reduces tight coupling and improves maintainability."
    },
    {
      title: "Python Implementation Example",
      code: `# ❌ Violates Law of Demeter
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self):
        self.engine = Engine()

class Driver:
    def __init__(self):
        self.car = Car()

    def drive(self):
        self.car.engine.start()  # Deep access

# ✅ Better Design
class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        self.engine.start()

class Driver:
    def __init__(self):
        self.car = Car()

    def drive(self):
        self.car.start()

driver = Driver()
driver.drive()`,
      codeLang: "python",
    },
    {
      title: "When to Use",
      note: [
        "Large object graphs.",
        "Microservice boundaries.",
        "Reducing cascading changes during refactoring."
      ],
    },
  ],
};