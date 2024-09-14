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
  let unorderList = document.querySelector("#unList");
  list.textContent = `${userName} - ${userEmail} - ${userPhone}`;
  unorderList.append(list);
}

module.exports = handleFormSubmit;
