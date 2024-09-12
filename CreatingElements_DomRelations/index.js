let h3 = document.createElement("h3");
h3.innerHTML = "Buy high quality organic fruits online";
h3.style.fontStyle = "italic";
const head = document.getElementById("header");
head.append(h3);

let list = document.createElement("p");
list.innerHTML = "Total fruits: 4";
const divs = document.getElementsByTagName("div");
const fruit = document.querySelector(".fruits");
divs[1].insertBefore(list, fruit);

list.setAttribute("id", "fruits-total");
