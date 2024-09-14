const form = document.querySelector("form");
function handleFormSubmit(event) {
  event.preventDefault();

  const userName = event.target.username.value;
  const userEmail = event.target.email.value;
  const userPhone = event.target.phone.value;

  const user = {
    username: userName,
    email: userEmail,
    phone: userPhone,
  };

  localStorage.setItem(userEmail, JSON.stringify(user));

  let list = document.createElement("li");
  list.textContent = `${userName} - ${userEmail} - ${userPhone}`;
  // create delete btn
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete-btn");
  list.appendChild(deleteButton);
  deleteButton.addEventListener("click", handleDelete);
  // create edit btn
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  editButton.classList.add("edit-btn");
  list.appendChild(editButton);
  editButton.addEventListener("click", handleEdit);

  const unorderList = document.querySelector("ul");
  unorderList.appendChild(list);

  function handleDelete(e) {
    const li = e.target.parentElement;
    unorderList.removeChild(li);
    localStorage.removeItem(userEmail);
  }

  function handleEdit(e) {
    const li = e.target.parentElement;
    const user = JSON.parse(localStorage.getItem(userEmail));
    document.querySelector("#username").value = user.username;
    document.querySelector("#email").value = user.email;
    document.querySelector("#phone").value = user.phone;
    unorderList.removeChild(li);
    localStorage.removeItem(userEmail);
  }
}

module.exports = handleFormSubmit;
