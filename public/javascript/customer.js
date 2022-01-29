async function createNewCustomer(event) {
  event.preventDefault();

  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone_number = document.querySelector("#phone_number").value.trim();
  const areYouAPayingCustomer = document
    .querySelector("")
    .value.trim();
}

if (firstName && lastName && email && phone && areYouAPayingCustomer) {
  await fetch("/api/customer", {
    method: "post",
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      areYouAPayingCustomer,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response);
  });
}
