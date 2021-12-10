function component() {
  const element = document.createElement("h1");

  element.innerHTML = "teste";

  return element;
}

document.body.appendChild(component());
