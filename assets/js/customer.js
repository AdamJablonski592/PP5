"use strict";
class Customer {
    constructor() {
        this.companyName = "";
        this.nip = "";
        this.city = "";
        this.street = "";
        this.houseNumber = "";
        this.flatNumber = "";
        this.areaCode = "";
        this.floatingTextarea = "";
        this.getAddress = function () {
            return `${city.value}, ${street.value}, ${houseNumber.value} / ${flatNumber.value}, ${areaCode.value}`;
        };
        this.getCustomerData = function () {
            return `${companyName.value}, ${nip.value}, ${city.value}, ${street.value}, ${houseNumber.value}, ${flatNumber.value}, ${areaCode.value}, ${floatingTextarea.value}`;
        };
    }
}
