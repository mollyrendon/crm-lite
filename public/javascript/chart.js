// const Chart = require('chart.js');
// const res = require('express/lib/response');

const canvasElement = document.getElementById("customer-additions");
let config = {
    type: "bar",
    data: {
        labels: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"],
        datasets: [{
            label: "Number of Customers Added", data: [5, 4, 4, 1, 0, 3, 1,], backgroundColor: [
                'rgba(255, 159, 64, .2)',
                'rgba(255, 99, 132, .2)',
                'rgba(54, 162, 235, .2)',
                'rgba(75, 192, 192, .2)',
                'rgba(153, 102, 255, .2)',
                'rgba(255, 255, 0, .2)',
                'rgba(160,82,45, .2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgb(255,  255, 0, 1)',
                'rgba(160,82,45, 1)'
            ],
            borderWidth: 1
        }],



    }
};
var customerChart = new Chart(canvasElement, config);

