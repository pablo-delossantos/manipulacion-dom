// Id parent
const parent = document.getElementById("parent")
console.log(parent)

// Nodos hijos
const children = parent.children
console.log(children)

// Primer hijo
const firstChild = parent.firstElementChild
console.log(firstChild)

const lastChild = parent.lastElementChild
console.log(lastChild)

const previousSibling = parent.previousElementSibling
console.log(previousSibling)

const nextSibling = parent.nextElementSibling
console.log(nextSibling)

// Seleccionar de padres a hijos

const children2 = document.querySelector("li")
console.log(children2)

const parent2 = children2.parentNode
console.log(parent2)