import { Component } from '@angular/core';
import { Supplier } from '../../models/supplier';
import {CommonModule} from '@angular/common'
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  customer: Customer = new Customer();

  saveData(){
    console.log(this.customer)
  }
}