// console.log(document);
const bodyElement = document.body;

const div = document.createElement("div");

bodyElement.appendChild(div);

const heading = document.createElement("h1");

heading.textContent = "Hello World"

div.appendChild(heading);

// console.log(bodyElement);