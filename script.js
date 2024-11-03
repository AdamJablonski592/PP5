const form = document.getElementById('formTest')

let customerData = []

function getData(event){
    event.preventDefault();
    let companyName = document.getElementById('companyName').value
    let nip = document.getElementById('nip').value
    let city = document.getElementById('city').value
    let street = document.getElementById('street').value
    let houseNumber = document.getElementById('houseNumber').value
    let flatNumber = document.getElementById('flatNumber').value
    let areaCode = document.getElementById('areaCode').value
    let floatingTextarea = document.getElementById('floatingTextarea').value
    const customer = {companyName, nip, city, street, houseNumber, flatNumber, areaCode, floatingTextarea}
    console.log(customer)
    customerData.push(customer)
    console.log(customerData)
  };

function fillData(customer){
    document.getElementById('companyName').value = "Test"
    document.getElementById('nip').value = "Test"
    document.getElementById('city').value = "Test"
    document.getElementById('street').value = "Test"
    document.getElementById('houseNumber').value = "Test"
    document.getElementById('flatNumber').value = "Test"
    document.getElementById('areaCode').value = "Test"
    document.getElementById('floatingTextarea').value = "Test"
    document.getElementById('formSelect').value = "1"
    document.getElementById('flexCheckDefault').checked = true
};

function showForm(){
  document.getElementById('client-list').style.display = 'none'
  document.getElementById('form-content').style.display = 'block'
  console.log("test")
};

function showClients(){
  document.getElementById('client-list').style.display = 'block'
  document.getElementById('form-content').style.display = 'none'
};

function sendData(event){
  event.preventDefault()
  let ul = document.getElementById('client-list-ul')

  customerData.forEach((customer) =>{
    ul.innerHTML += `<li class="list-group-item">${customer.companyName}</li>`
  })
  document.getElementById('client-list').style.display = 'block'
  document.getElementById('form-content').style.display = 'none'
}
