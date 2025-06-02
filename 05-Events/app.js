const container = document.querySelector(".container")
const button = document.querySelector("button")

// Evento, código que se ejecuta
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "#3f51b5"
})

container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "#29d492"
})

// button.addEventListener("click", () => {
//   alert("Button clicked")
// })

const buttonClickCallback = () => {
  alert("Button clicked")
}

button.addEventListener("click", buttonClickCallback)

setTimeout(() => {
  button.removeEventListener("click", buttonClickCallback)
}, 2000)

// Los eventos son OBJETOS de JS