/* 
https://www.youtube.com/watch?v=qQy5K-pE8Fo&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=12&ab_channel=codebubb 
*/

/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

let user = document.getElementById("username");
let userLabel = "<label for='username' name='username'>Username</label><br>";
user.insertAdjacentHTML("beforebegin", userLabel);

let Password = document.getElementById("Password");
let PasswordLabel =
  "<label for='Password' name='Password'>Password</label><br>";
Password.insertAdjacentHTML("beforebegin", PasswordLabel);

let ConfirmPassword = document.getElementById("ConfirmPassword");
let ConfirmPasswordLabel =
  "<label for='ConfirmPassword' name='ConfirmPassword'>ConfirmPassword</label><br>";
ConfirmPassword.insertAdjacentHTML("beforebegin", ConfirmPasswordLabel);

let submit = document.getElementById("submit");
let submitSpace = "<br>";
submit.insertAdjacentHTML("beforebegin", submitSpace);

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

function submitForm() {
  let user = document.getElementById("username").value;
  let Password = document.getElementById("Password").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;

  let removing = document.getElementById("usernameremove");
  let Passwordremove = document.getElementById("Passwordremove");
  let ConfirmPasswordremove = document.getElementById("ConfirmPasswordremove");

  if (removing !== null) {
    removing.remove();
  }
  if (Passwordremove !== null) {
    Passwordremove.remove();
  }
  if (ConfirmPasswordremove !== null) {
    ConfirmPasswordremove.remove();
  }

  if (user == "") {
    let userTag = document.getElementById("username");
    let userLabel =
      " <label for='username' name='username' id='usernameremove'>Please type something for 'username'!</label>";
    userTag.insertAdjacentHTML("afterend", userLabel);
  }
  if (Password == "") {
    let PasswordTag = document.getElementById("Password");
    let PasswordLabel =
      " <label for='username' name='username' id='Passwordremove'>Please type something for 'Password'!</label>";
    PasswordTag.insertAdjacentHTML("afterend", PasswordLabel);
  }
  if (ConfirmPassword == "") {
    let ConfirmPasswordTag = document.getElementById("ConfirmPassword");
    let ConfirmPasswordLabel =
      " <label for='username' name='username' id='ConfirmPasswordremove'>Please type something for 'ConfirmPassword'!</label>";
    ConfirmPasswordTag.insertAdjacentHTML("afterend", ConfirmPasswordLabel);
  }
}

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

function match() {
  let password = document.getElementById("Password").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;

  if (password != ConfirmPassword) {
    window.alert("Your passwords don't match! Please type again!");
    document.getElementById("Password").value = "";
    document.getElementById("ConfirmPassword").value = "";
  }
}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

let inputs = document.querySelectorAll(".inputs");
for (item of inputs) {
  item.addEventListener("input", checkResult);
}
function checkResult() {
  let user = document.getElementById("username").value;
  let Password = document.getElementById("Password").value;
  let ConfirmPassword = document.getElementById("ConfirmPassword").value;
  let button = document.getElementById("submit");
  if (user == "" || Password == "" || ConfirmPassword == "") {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
}
window.onload = checkResult;



/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
