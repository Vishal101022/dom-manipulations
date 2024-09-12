const heading = document.querySelector("#main-heading");
heading.style.textAlign = "right";

const subHeading = document.querySelector("#basket-heading");
subHeading.style.color = "brown";

const fruitList = document.querySelector(".fruits");
fruitList.style.backgroundColor = "grey";
fruitList.style.padding = "30px";
fruitList.style.margin = "30px";
fruitList.style.width = "50%";
fruitList.style.borderRadius = "5px";
fruitList.style.listStyleType = "none";

const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "white";
  fruitItems[i].style.padding = "20px";
  fruitItems[i].style.margin = "5px";
  fruitItems[i].style.borderRadius = "5px";
}

// Select even fruit items and change their background color to brown and text color to white
const evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}
