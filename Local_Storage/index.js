function handleFormSubmit(event) {
  event.preventDefault();

  const userName = event.target.username.value;
  const userEmail = event.target.email.value;
  const userPhone = event.target.phone.value;

  localStorage.setItem("Username", userName);
  localStorage.setItem("Email", userEmail);
  localStorage.setItem("Phone", userPhone);
}

module.exports = handleFormSubmit;
