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

// Remover elementos

const firstItem = document.querySelector("li")
firstItem.remove() // remueve el primer item

const list = document.querySelector("ul")
list.removeChild(list.firstElementChild) // Remueve el primero del contenedor, en este caso del <ul>

// Clonar elementos
const originalP = contentArea.querySelector("p")
const clonedP = originalP.cloneNode(true) // Lo clonamos

contentArea.append(clonedP)
clonedP.textContent = "Este es un nuevo texto." // Lo editamos

// Reemplazar elementos
const itemToReplace = listArea.children[2]
itemToReplace.replaceWith(clonedP) // Reemplazamos con el texto clonado
