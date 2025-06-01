// HTML strings
const contentArea = document.getElementById("contentArea")
contentArea.insertAdjacentHTML(
  "beforeEnd",
  "<p>Este es otro párrafo nuevo.</p>"
)
const listArea = document.getElementById("listArea")

listArea.innerHTML += "<li>Item 5</li>"
listArea.insertAdjacentHTML("beforeEnd", "<li>Item 6</li>") // Mejor performance

// Create Element
const newPElement = document.createElement("p")
newPElement.textContent = "Fui creado con CreateElement"

contentArea.append(newPElement) // Inyecta en el HTML
