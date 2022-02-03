// const Chart = require('chart.js');
// const res = require('express/lib/response');

// const { response } = require("express");

// const customers = require("../../seeds/customer-seeds");
let trues = []
let falses = []
const chartValues = [trues.length, falses.length]
let config = {}
let customerChart;
const canvasElement = document.getElementById("customer-additions");

const countCustomers = async () => {
    await fetch("/api/customers")
        .then(response => response.json())
        // .then(data => (console.log(data)));
        .then(res => {
            res.forEach(customer => {
                if (customer.is_customer) {
                    trues.push(customer)
                }
                else {
                    falses.push(customer)
                }
            }
            )
            console.log(trues.length, falses.length)
            config = {
                type: "bar",
                data: {
                    labels: ["Customer", "Prospect"],
                    datasets: [{
                        label: "Customers vs Prospects", data: [trues.length, falses.length],
                        backgroundColor: [
                            'rgba(255, 159, 64, .2)',
                            'rgba(255, 99, 132, .2)'
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1
                    }],
                }
            };
            customerChart = new Chart(canvasElement, config);
        })


}

countCustomers();


// const canvasElement = document.getElementById("customer-additions");
// let config = {
//     type: "bar",
//     data: {
//         labels: ["Customer", "Prospect"],
//         datasets: [{
//             label: "Customers vs Prospects", data: chartValues && chartValues,
//             backgroundColor: [
//                 'rgba(255, 159, 64, .2)',
//                 'rgba(255, 99, 132, .2)'
//             ],
//             borderColor: [
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255, 99, 132, 1)'
//             ],
//             borderWidth: 1
//         }],
//     }
// };
// var customerChart = new Chart(canvasElement, config);


// for (let i = 0; i < response.length; i++) {
//     if (response.is_customer === true) {
//         console.log(response);
//     }
//     else {
//         console.log(response);
//     }
// }



//     .then((data) => {
//                 const customerTrue = data.filter(is_customer => is_customer === true)
//                 console.log(customerTrue)
//             })
//     }
//     const { is_customer } = customers
//     let trues = 0;
//     let falses = 0;
//     for (let i = 0; i < customers.length; i++) {
//         if (data.is_customer === true) {
//             trues++;
//         }
//         if (data.is_customer === false) {
//             falses++;
//         }
//     }
//     console.log(trues, falses)
// }

