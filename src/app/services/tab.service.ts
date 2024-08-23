import { Injectable } from '@angular/core';

export class Employee {
  ID!: number;
  FirstName!: string;
  vocherID!: number;
}

const employees: Employee[] = [{
  ID: 1,
  FirstName: 'Customer',
  vocherID: 1,
}, {
  ID: 2,
  FirstName: 'Vendor',
  vocherID: 2,
  

}, {
  ID: 3,
  FirstName: 'Sale Invoice',
  vocherID: 3,

}, {
  ID: 4,
  FirstName: 'Sale Order',
  vocherID: 4,

}, {
  ID: 5,
  FirstName: 'Purchase Invoice',
  vocherID: 5,
}, {
  ID: 6,
  FirstName: 'Purchase Order',
  vocherID: 6,

}, {
  ID: 7,
  FirstName: 'Purchase Chellan',
  vocherID: 7,
}, {
  ID: 8,
  FirstName: 'Recipt',
  vocherID: 8,
}, {
  ID: 9,
  FirstName: 'Payment',
  vocherID: 9,
},{
  ID: 10,
  FirstName: 'User Report',
  vocherID: 10,
}, {
  ID: 11,
  FirstName: 'WhatsApp',
  vocherID: 11,
}];



@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor() { }

  getEmployees() {
    return employees;
  }
}
