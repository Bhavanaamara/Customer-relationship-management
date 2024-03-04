// Sample data (can be replaced with database interactions)
let customers = [];

// DOM elements
const customersList = document.getElementById('customersList');
const customerDetails = document.getElementById('customerDetails');
const addCustomerBtn = document.getElementById('addCustomerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
const customerForm = document.getElementById('customerForm');

// Display customers
function displayCustomers() {
    customersList.innerHTML = '';
    customers.forEach((customer, index) => {
        const customerItem = document.createElement('div');
        customerItem.classList.add('customer');
        customerItem.innerHTML = `<p>${customer.name}</p>`;
        customerItem.addEventListener('click', () => showCustomerDetails(index));
        customersList.appendChild(customerItem);
    });
}

// Show customer details
function showCustomerDetails(index) {
    const customer = customers[index];
    customerDetails.innerHTML = `<h2>${customer.name}</h2><p>Email: ${customer.email}</p>`;
    customerDetails.style.display = 'block';
}

// Add customer
function addCustomer(name, email) {
    customers.push({ name, email });
    displayCustomers();
    closeModal();
}

// Open modal
function openModal() {
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    customerForm.reset();
}

// Event listeners
addCustomerBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
customerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    addCustomer(name, email);
});
