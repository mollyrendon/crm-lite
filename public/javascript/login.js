/*Login Form Function:
This is an async function that will be called when the user clicks on the login button.  The code first prevents the default behavior of the even by calling event.preventDefault() and then it gets the email and password 
from the input field and checks if they are valid.  If so, it sends a POST request to /api/users/login with JSON data containing both an email and password. 
If there are no errors then the document's location is replaced with "/dashboard/"
*/

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

/*Sign Up Form Function:
This is an async function that is called when the user clicks on the signup button.   The code checks if there are any values in the username, email, and password fields of the signup form. If so, it sends a request to 
/api/users with those values as parameters.  If there are no errors then the document's location is replaced with "/dashboard/"
*/
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
