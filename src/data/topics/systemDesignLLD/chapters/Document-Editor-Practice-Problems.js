export default {
  order: 18,
  id: "document-editor-lld",
  title: "Document Editor - Low Level Design (LLD)",
  category: "LLD Examples",
  sections: [
    {
      title: "Overview",
      body: `This LLD demonstrates a Document Editor system built in Python, designed using a Bottom-Up approach. The design applies OOP principles and leverages abstractions for flexibility and maintainability.`,

      note: [
        "Document Elements: Basic units like Text, Image, Newline, and Tab.",
        "Document: Stores a collection of elements and provides rendering functionality.",
        "Persistence Storage: Abstracts saving to different mediums, e.g., file or database.",
        "Document Editor: Handles client interactions, allowing adding elements, rendering, and saving documents.",
      ],
    },
    {
      title: "UML Class Diagram",
      body: `The system can be represented with the following UML structure:

- DocumentElement (abstract)
  - Methods: render()
  - Subclasses: TextElement, ImageElement, NewLineElement, TabElement

- Document
  - Attributes: elements (list of DocumentElement)
  - Methods: add_element(), render()

- PersistenceStorage (abstract)
  - Methods: save(data)
  - Subclasses: FileStorage, DBStorage

- DocumentEditor
  - Attributes: doc_obj (Document), storage_obj (PersistenceStorage)
  - Methods: add_text(), add_image(), add_newline(), add_tab(), render_document(), save()

Relationships:
- Document contains multiple DocumentElements (composition)
- DocumentEditor uses Document and PersistenceStorage (aggregation)
- Subclasses implement abstract base classes (inheritance)`,
    },
    {
      title: "Python Implementation Example",
      code: `from abc import ABC, abstractmethod

# ---------- Document Elements ----------
class DocumentElement(ABC):
    @abstractmethod
    def render(self):
        pass

class TextElement(DocumentElement):
    def __init__(self, text):
        self.text = text
    def render(self):
        return self.text

class ImageElement(DocumentElement):
    def __init__(self, img):
        self.img = img
    def render(self):
        return f"<img src='{self.img}'></img>"

class NewLineElement(DocumentElement):
    def render(self):
        return "\\n"

class TabElement(DocumentElement):
    def render(self):
        return "\\t"


# ---------- Document ----------
class Document:
    def __init__(self):
        self.elements = []
    def add_element(self, element):
        self.elements.append(element)
    def render(self):
        return ''.join([el.render() for el in self.elements])


# ---------- Persistence Storage ----------
class PersistenceStorage(ABC):
    @abstractmethod
    def save(self, data):
        pass

class FileStorage(PersistenceStorage):
    def save(self, data):
        with open("output_doc.txt", "w") as f:
            f.write(data)
        print("Document saved to output_doc.txt")

class DBStorage(PersistenceStorage):
    def save(self, data):
        print("Document saved to database")


# ---------- Document Editor ----------
class DocumentEditor:
    def __init__(self, doc_obj, storage_obj):
        self.doc_obj = doc_obj
        self.storage_obj = storage_obj
    def add_text(self, text):
        self.doc_obj.add_element(TextElement(text))
    def add_image(self, img):
        self.doc_obj.add_element(ImageElement(img))
    def add_newline(self):
        self.doc_obj.add_element(NewLineElement())
    def add_tab(self):
        self.doc_obj.add_element(TabElement())
    def render_document(self):
        return self.doc_obj.render()
    def save(self):
        self.storage_obj.save(self.render_document())


# ---------- Client Usage ----------
document_obj = Document()
storage_obj = FileStorage()
editor = DocumentEditor(document_obj, storage_obj)

editor.add_text("Hello, welcome to LLD using Python")
editor.add_newline()
editor.add_image("py_img.jpg")
editor.add_newline()
editor.add_text("Excited to learn more about LLD principles and patterns.")
editor.add_tab()
editor.add_text("Let's Begin...")

print(editor.render_document())
editor.save()`,
      codeLang: "python",
    },
    {
      title: "When to Use / Interview Tips",
      note: [
        "Use abstraction (abstract classes) for elements and storage to adhere to OOP principles.",
        "Bottom-Up approach helps identify low-level components first, then assemble higher-level functionality.",
        "Trade-offs: In real systems, strict SOLID may require compromises; interviewers care that you justify design decisions.",
        "Principle of Least Knowledge: Classes like DocumentEditor can know multiple collaborators (Document, Storage) as long as access remains controlled.",
        "Good candidate insight: Emphasize composability, extensibility, and ability to swap storage without modifying editor logic.",
      ],
    },
  ],
};
