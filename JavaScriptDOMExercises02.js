
/* 
https://www.youtube.com/watch?v=qQy5K-pE8Fo&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB&index=12&ab_channel=codebubb 
*/



/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

let user = document.getElementById("username")
let userLabel = "<label for='username' name='username'>Username</label><br>"
user.insertAdjacentHTML("beforebegin", userLabel)

let Password = document.getElementById("Password")
let PasswordLabel = "<label for='Password' name='Password'>Password</label><br>"
Password.insertAdjacentHTML("beforebegin", PasswordLabel)

let ConfirmPassword = document.getElementById("ConfirmPassword")
let ConfirmPasswordLabel = "<label for='ConfirmPassword' name='ConfirmPassword'>ConfirmPassword</label><br>"
ConfirmPassword.insertAdjacentHTML("beforebegin", ConfirmPasswordLabel)

let submit = document.getElementById("submit")
let submitSpace = "<br>"
submit.insertAdjacentHTML("beforebegin", submitSpace)



/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/



