
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "task1.css"; // Path to your CSS file
document.head.appendChild(link);

var bgDiv = document.createElement("div");
bgDiv.classList.add("bg");

var heading1 = document.createElement("h1");
heading1.classList.add("heading");
heading1.textContent = "Todolist";

var paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.textContent = "Each day I will accomplish one thing on my todo list.";

var heading2 = document.createElement("h1");
heading2.classList.add("heading2");
heading2.textContent = "Read a Book";

var paragraph2 = document.createElement("p");
paragraph2.classList.add("paragraph2");
paragraph2.textContent = "I don't think that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist...";

var btnBox = document.createElement("div");
btnBox.classList.add("btnbox");

var button = document.createElement("button");
button.classList.add("btn");
button.textContent = "Start";

var underlinePart = document.createElement("p");
underlinePart.classList.add("underlinepart");
underlinePart.innerHTML = "<u>Don't skip introduction</u>";

document.body.appendChild(bgDiv);
bgDiv.appendChild(heading1);
bgDiv.appendChild(paragraph);
bgDiv.appendChild(heading2);
bgDiv.appendChild(paragraph2);
btnBox.appendChild(button);
bgDiv.appendChild(btnBox);
bgDiv.appendChild(underlinePart);
