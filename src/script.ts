const form = document.getElementById('formTest')

let customerData : Customer[]= []

function getData(event: Event): void{
    event.preventDefault();
    let newCustomer = new Customer();
    newCustomer.companyName = (document.getElementById('companyName') as HTMLInputElement).value
    newCustomer.nip = (document.getElementById('nip') as HTMLInputElement).value
    newCustomer.city = (document.getElementById('city') as HTMLInputElement).value
    newCustomer.street = (document.getElementById('street') as HTMLInputElement).value
    newCustomer.houseNumber = (document.getElementById('houseNumber') as HTMLInputElement).value
    newCustomer.flatNumber = (document.getElementById('flatNumber') as HTMLInputElement).value
    newCustomer.areaCode = (document.getElementById('areaCode') as HTMLInputElement).value
    newCustomer.floatingTextarea = (document.getElementById('floatingTextarea') as HTMLTextAreaElement).value
    console.log(newCustomer)
    customerData.push(newCustomer)
  };

function fillData(): void{
    (document.getElementById('companyName') as HTMLInputElement).value = "Test";
    (document.getElementById('nip') as HTMLInputElement).value = "Test";
    (document.getElementById('city') as HTMLInputElement).value = "Test";
    (document.getElementById('street') as HTMLInputElement).value = "Test";
    (document.getElementById('houseNumber') as HTMLInputElement).value = "Test";
    (document.getElementById('flatNumber') as HTMLInputElement).value = "Test";
    (document.getElementById('areaCode') as HTMLInputElement).value = "Test";
    (document.getElementById('floatingTextarea') as HTMLTextAreaElement).value = "Test";
    (document.getElementById('formSelect') as HTMLSelectElement).value = "1";
    (document.getElementById('flexCheckDefault') as HTMLInputElement).checked = true;
};

function sendData(event: Event): void {
  event.preventDefault();

  const ul = document.getElementById('client-list-ul') as HTMLUListElement;

  (document.getElementById('client-list') as HTMLElement).style.display = 'block';
  (document.getElementById('form-content') as HTMLElement).style.display = 'none';

  ul.innerHTML = '';
  customerData.forEach((customer) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = customer.getCustomerData();
      ul.appendChild(li);
  });
}
