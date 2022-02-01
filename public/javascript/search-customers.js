//Search Customer Code for future use

// const userCardTemplate = document.querySelector("[data-user-template]");
// const userCardContainer = document.querySelector("[data-user-cards-container]");
// const searchInput = document.querySelector("[data-search]");

// let users = [];

// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   users.forEach((user) => {
//     const isVisible =
//       user.first_name.toLowerCase().includes(value) ||
//       user.last_name.toLowerCase().includes(value);
//     user.email.toLowerCase().includes(value);
//     user.element.classList.toggle("hide", !isVisible);
//   });
// });

// fetch("/api/customer")
//   .then((res) => res.json())
//   .then((data) => {
//     users = data.map((user) => {
//       const card = userCardTemplate.content.cloneNode(true).children[0];
//       console.log(card);
//       const header = card.querySelector("[data-header]");
//       const body = card.querySelector("[data-body]");
//       header.textContent = user.first_name;
//       header.textContent = user.last_name;
//       body.textContent = user.email;
//       userCardContainer.append(card);
//       return {
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email,
//         element: card,
//       };
//     });
//   });
