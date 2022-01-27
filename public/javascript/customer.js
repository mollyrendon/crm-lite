


async function createNewCustomer(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phoneNum').value.trim();
    const areYouAPayingCustomer = document.querySelector('#phoneNum').value.trim();
}

if (firstName && lastName && email && phone && areYouAPayingCustomer) {
    await fetch('/api/customer', {
        method: 'post',
        body: JSON.stringify({
            firstName,
            lastName,
            phone,
            areYouAPayingCustomer
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => { console.log(response) })
}