const form = document.querySelector("form");
const descriptionInput = document.createElement("input");
descriptionInput.setAttribute("type", "text");
descriptionInput.setAttribute("name", "description");
descriptionInput.setAttribute("id", "description");
descriptionInput.setAttribute("placeholder", "Enter fruit description");

form.insertBefore(descriptionInput, form.querySelector("button"));

// Adding event listener to the form for adding fruit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fruitName = document.getElementById("fruit-to-add").value.trim();
  const fruitDescription = document.getElementById("description").value.trim();

  const fruitList = document.querySelector(".fruits");
  const fruitItem = document.createElement("li");
  fruitItem.className = "fruit";

  const fruitText = document.createTextNode(fruitName);
  const descriptionText = document.createElement("p");
  descriptionText.textContent = fruitDescription;
  descriptionText.style.fontStyle = "italic";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "x";

  fruitItem.appendChild(fruitText);
  fruitItem.appendChild(descriptionText);
  fruitItem.appendChild(deleteButton);

  fruitList.appendChild(fruitItem);

  // Clear inputs
  document.getElementById("fruit-to-add").value = "";
  document.getElementById("description").value = "";
});

// Adding event listener to filter input
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.querySelectorAll(".fruit");

  fruitItems.forEach((fruit) => {
    const fruitName = fruit.childNodes[0].textContent.toLowerCase();
    const fruitDescription = fruit.childNodes[1].textContent.toLowerCase();

    if (
      fruitName.includes(textEntered) ||
      fruitDescription.includes(textEntered)
    ) {
      fruit.style.display = "flex";
    } else {
      fruit.style.display = "none";
    }
  });
});

// Adding event listener to delete buttons
document.querySelector(".fruits").addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    const fruitItem = event.target.parentElement;
    fruitItem.remove();
  }
});
