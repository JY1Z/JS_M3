const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");

listItem1.textContent = "First item";
listItem2.textContent = "Second item";
listItem3.textContent = "Third item";

listItem2.classList.add("my-item");

const targetElement = document.getElementById("target");

targetElement.appendChild(listItem1);
targetElement.appendChild(listItem2);
targetElement.appendChild(listItem3);
