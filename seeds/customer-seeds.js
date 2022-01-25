const sequelize = require('../config/connection');
const Customer = require('../models/customer');

const customerData = [
    {
        first_name: 'Tim',
        last_name: 'Heidecker',
        email: 'theidecker@aol.com',
        phone_number: '777-555-8888',
        is_customer: true
    },
    {
        first_name: 'Josh',
        last_name: 'Groban',
        email: 'jgroban@yahoo.com',
        phone_number: '777-555-1238',
        is_customer: true
    },
    {
        first_name: 'Amy',
        last_name: 'Smith',
        email: 'asmith@aol.com',
        phone_number: '777-555-7895',
        is_customer: false
    },
    {
        first_name: 'Grant',
        last_name: 'Gust',
        email: 'ggust@yahoo.com',
        phone_number: '777-555-4562',
        is_customer: false
    },
    {
        first_name: 'Timmy',
        last_name: 'Turner',
        email: 'tturner@yahoo.com',
        phone_number: '777-555-7412',
        is_customer: true
    },
    {
        first_name: 'Veronica',
        last_name: 'Mars',
        email: 'vmars@yahoo.com',
        phone_number: '777-555-4552',
        is_customer: false
    },
    {
        first_name: 'Kandy',
        last_name: 'Muse',
        email: 'kmuse@aol.com',
        phone_number: '',
        is_customer: false
    },
    {
        first_name: 'Bing',
        last_name: 'Crosby',
        email: '',
        phone_number: '777-555-8888',
        is_customer: false
    },
    {
        first_name: 'Ryan',
        last_name: 'Reynolds',
        email: '',
        phone_number: '',
        is_customer: false
    },
    {
        first_name: 'Keanu',
        last_name: 'Reeves',
        email: 'kreeves@yahoo.com',
        phone_number: '777-555-8231',
        is_customer: true
    },
    {
        first_name: 'Ru',
        last_name: 'Paul',
        email: 'rupaul@aol.com',
        phone_number: '',
        is_customer: false
    },
    {
        first_name: 'Trixie',
        last_name: 'Mattel',
        email: 'tmattel@yahoo.com',
        phone_number: '',
        is_customer: false
    },
    {
        first_name: 'Richard',
        last_name: 'Monroe',
        email: 'romonroe@yahoo.com',
        phone_number: '777-555-9438',
        is_customer: true
    },
    {
        first_name: 'Nancy',
        last_name: 'Wheeler',
        email: 'nwheeler@aol.com',
        phone_number: '',
        is_customer: false
    },
];
const customers = () => Customer.bulkCreate(customerData);

module.exports = customers;