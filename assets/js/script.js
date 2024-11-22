"use strict";
const form = document.getElementById('formTest');
let customerData = [];
function getData(event) {
    event.preventDefault();
    let newCustomer = new Customer();
    newCustomer.companyName = document.getElementById('companyName').value;
    newCustomer.nip = document.getElementById('nip').value;
    newCustomer.city = document.getElementById('city').value;
    newCustomer.street = document.getElementById('street').value;
    newCustomer.houseNumber = document.getElementById('houseNumber').value;
    newCustomer.flatNumber = document.getElementById('flatNumber').value;
    newCustomer.areaCode = document.getElementById('areaCode').value;
    newCustomer.floatingTextarea = document.getElementById('floatingTextarea').value;
    console.log(newCustomer);
    customerData.push(newCustomer);
}
;
function fillData(customer) {
    document.getElementById('companyName').value = "Test";
    document.getElementById('nip').value = "Test";
    document.getElementById('city').value = "Test";
    document.getElementById('street').value = "Test";
    document.getElementById('houseNumber').value = "Test";
    document.getElementById('flatNumber').value = "Test";
    document.getElementById('areaCode').value = "Test";
    document.getElementById('floatingTextarea').value = "Test";
    document.getElementById('formSelect').value = "1";
    document.getElementById('flexCheckDefault').checked = true;
}
;
function showForm() {
    document.getElementById('client-list').style.display = 'none';
    document.getElementById('form-content').style.display = 'block';
    console.log("test");
}
;
function showClients() {
    document.getElementById('client-list').style.display = 'block';
    document.getElementById('form-content').style.display = 'none';
}
;
function sendData(event) {
    event.preventDefault();
    let ul = document.getElementById('client-list-ul');
    document.getElementById('client-list').style.display = 'block';
    document.getElementById('form-content').style.display = 'none';
    customerData.forEach((customer) => {
        ul.innerHTML += `<li class="list-group-item">${customer.getCustomerData()}</li>`;
    });
}
