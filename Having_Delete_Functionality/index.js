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
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";
  deleteButton.classList.add("delete-btn");
  list.appendChild(deleteButton);
  deleteButton.addEventListener("click", handleDelete);

  const unorderList = document.querySelector("ul");
  unorderList.appendChild(list);

  function handleDelete(e) {
    const li = e.target.parentElement;
    unorderList.removeChild(li);
    localStorage.removeItem(userEmail);
  }
}

module.exports = handleFormSubmit;
