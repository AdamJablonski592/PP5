export class Customer {
    companyName: string = "";
    nip: string = "";
    city: string = "";
    street: string = "";
    houseNumber: string = "";
    flatNumber: string = "";
    areaCode: string = "";
    floatingTextarea: string = "";

    constructor() {}

    getAddress(): string {
        return `${this.city}, ${this.street}, ${this.houseNumber} / ${this.flatNumber}, ${this.areaCode}`;
    }

    getCustomerData(): string {
        return `${this.companyName}, ${this.nip}, ${this.city}, ${this.street}, ${this.houseNumber}, ${this.flatNumber}, ${this.areaCode}, ${this.floatingTextarea}`;
    }
}

