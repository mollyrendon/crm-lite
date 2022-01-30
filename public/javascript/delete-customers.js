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
