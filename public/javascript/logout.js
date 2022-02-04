/*Logout Function:
This is an async function that logs out the user by using a post request to /api/users/logout.  The response will be checked for success or failure and then replaced with the location of the homepage.    
*/

async function logout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
