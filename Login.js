let username = document.getElementById('username');
let useremail = document.getElementById('email');
let userpassword = document.getElementById('password');
let login = document.getElementById('Login');
let errorname = document.getElementById('errorname');
let errormail = document.getElementById('errormail');
let errorpass = document.getElementById('errorpassword');
let form = document.getElementById('form');

login.addEventListener('click', (e) => {
  e.preventDefault();

  let uname = username.value.trim();
  let umail = useremail.value.trim();
  let upassword = userpassword.value.trim();
  let valid = true;

  errorname.textContent = "";
  errormail.textContent = "";
  errorpass.textContent = "";

  if (uname === "") {
    errorname.textContent = "Enter a valid name";
    if (valid) username.focus();
    valid = false;
  }

  if (umail === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(umail)) {
    errormail.textContent = "Enter the correct email";
    if (valid) useremail.focus();
    valid = false;
  }

  if (upassword === "" || upassword.length < 6) {
    errorpass.textContent = "Enter a valid password";
    if (valid) userpassword.focus();
    valid = false;
  }

  if (!valid) return;

  if (uname === "admin" && umail === "admin@gmail.com" && upassword === "az@12@") {
    localStorage.setItem("loggedIn", "true");
    setTimeout(() => {
      window.location.href = "Country.html";
    }, 100);
  } else {
    alert("Invalid credentials!");
  }

  form.reset();
});
