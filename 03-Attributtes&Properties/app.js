// Agrega una clase
const menu = document.querySelector("menu")

const button = document.querySelector("button")

button.addEventListener("click", () => {
  menu.classList.toggle("invisible")
})