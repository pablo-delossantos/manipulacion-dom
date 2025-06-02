const form = document.getElementById("myForm")

form.addEventListener("submit", (event) => {
  // Lo primero que hacemos es prevenir el comportamiento del formulario
  event.preventDefault()
  const name = form.elements["name"].value
  console.log(name)

  const email = form.elements["email"].value
  console.log(email)
});