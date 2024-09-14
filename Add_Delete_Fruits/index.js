const form = document.querySelector("form");
const fruitToAddInput = document.getElementById("fruit-to-add");
const fruitsList = document.querySelector(".fruits");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fruitName = fruitToAddInput.value.trim();

  if (fruitName !== "") {
    const li = document.createElement("li");
    li.classList.add("fruit");
    li.textContent = fruitName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", handleDelete);

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    li.appendChild(deleteButton);
    li.appendChild(editButton);

    fruitsList.appendChild(li);
    fruitToAddInput.value = "";
  }
});

function handleDelete(e) {
  const li = e.target.parentElement;
  fruitsList.removeChild(li);
}

document.querySelectorAll(".fruit").forEach((fruitItem) => {
  if (!fruitItem.querySelector(".edit-btn")) {
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    fruitItem.appendChild(editButton);
  }

  const deleteButton = fruitItem.querySelector(".delete-btn");
  if (deleteButton) {
    deleteButton.addEventListener("click", handleDelete);
  }
});
