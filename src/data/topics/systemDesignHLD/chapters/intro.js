export default {
  order: 1,
  id: "hld-introduction",
  title: "Introduction to High-Level Design (HLD)",
  category: "High-Level Design",
  sections: [
    {
      title: "Overview",
      body: `High-Level Design (HLD) is the process of designing the architecture of a system at a macro level. It focuses on defining the system's components, modules, services, and their interactions without delving into implementation details. HLD helps developers and architects plan for scalability, reliability, maintainability, and performance before moving to Low-Level Design (LLD). 

Core Concepts:\n\n
- Components & Modules: Breaking the system into logical units with clear responsibilities.\n
- Interfaces & Contracts: Defining how modules communicate with each other.\n
- Scalability & Reliability: Planning for horizontal/vertical scaling and fault tolerance.\n
- Trade-offs & Constraints: Considering cost, latency, consistency, and throughput.`,
    },
    {
      title: "Python Example: Simple Service Architecture",
      code: `# Example: High-Level Service design in Python (simplified)

# Database Abstraction
class DBClient:
    def save(self, data):
        print("Saving data to DB")
    def get(self, id):
        print(f"Fetching data for id {id}")
        return {"id": id, "name": "Sample"}

# Service Layer
class UserService:
    def __init__(self, db_client):
        self.db = db_client

    def create_user(self, user_data):
        self.db.save(user_data)

    def get_user(self, user_id):
        return self.db.get(user_id)

# Client Usage
db_client = DBClient()
user_service = UserService(db_client)

user_service.create_user({"id": 1, "name": "Alice"})
print(user_service.get_user(1))`,
      codeLang: "python",
    },
    {
      title: "When to Use & Benefits",
      body: `When to Use:\n
- Designing new systems from scratch to plan architecture before coding.\n
- Evaluating trade-offs between monolithic and microservice architectures.\n
- Explaining system design in interviews or technical discussions.\n

Benefits:\n
- Provides a clear blueprint of the system for developers and stakeholders.\n
- Helps anticipate scalability, reliability, and maintainability challenges.\n
- Serves as a foundation for Low-Level Design (LLD) and coding implementation.`,
      note: [
        "Tip for interviews: Draw component diagrams to explain service interactions, database choices, caching, and communication patterns.",
        "Focus on modularity, separation of concerns, and clear interfaces between components.",
      ],
    },
  ],
};
