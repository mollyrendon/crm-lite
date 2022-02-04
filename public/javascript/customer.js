/*Create New Customer Function*/

async function createNewCustomer(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone_number = document.querySelector("#phone_number").value.trim();
  const areYouAPayingCustomer = document.querySelector(
    'input[name="type"]:checked'
  ).value;
  const is_customer = areYouAPayingCustomer === "customer";

  if (first_name && last_name) {
    await fetch("/api/customers", {
      method: "post",
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        phone_number,
        is_customer,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log(response);
      document.querySelector("#first_name").value = "";
      document.querySelector("#last_name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#phone_number").value = "";
    });
  }
}

document
  .querySelector(".new-customer-form")
  .addEventListener("submit", createNewCustomer);
