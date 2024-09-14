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

  localStorage.setItem("User Details", JSON.stringify(user));
}
module.exports = handleFormSubmit;
