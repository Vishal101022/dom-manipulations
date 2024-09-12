// Write your code below:
const list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
  list[i].style.fontStyle = "italic";
}

list[list.length - 1].style.color = "blue";
