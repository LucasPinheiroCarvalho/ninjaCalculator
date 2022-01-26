function component() {
  const element = document.createElement("h1");

  element.innerHTML = "teste";
  const a: string;

  return element;
}

document.body.appendChild(component());

// TODO => incluir JSX
