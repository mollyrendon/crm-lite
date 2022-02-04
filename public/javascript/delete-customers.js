/*Delete Customer:
The code is used to delete a customer from the database. The first line of code retrieves all the buttons with an id attribute that matches "delete-button". The second line of code logs the list of buttons.
The third line of code listens for clicks on any button in the list and then executes a function which will reload the page once it has completed its task.
*/

console.log("loaded");

var deletebtns = document.querySelectorAll(".delete-button");
console.log(deletebtns);

deletebtns.forEach((btn) => {
  var id = btn.getAttribute("data-id");
  console.log(id);

  btn.addEventListener("click", async () => {
    await fetch(`/api/customers/${id}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      window.location.reload();
    });
  });
});
