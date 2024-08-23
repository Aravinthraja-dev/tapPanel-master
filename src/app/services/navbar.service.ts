import { Injectable } from '@angular/core';


class Details {
  id!: string;
  text!: string;
  path!: string;
}

export class Country extends Details {
  expanded?: boolean;
  selected?: boolean;
  itemID!: number;
}

export class Continent {
  id!: string;
  text!: string;
  expanded?: boolean;
  selected?: boolean;
  items!: Country[];
}

const continents: Continent[] = [{
  id: '1',
  text: 'Master',
  expanded: true,
  items: [{
    id: '1_1',
    text: 'Customer',
    selected: true,
    itemID: 1,
    path: '/customer'

  },
  {
    id: '1_2',
    text: 'Vendor',
    itemID: 2,
    path: '/vendor'
  },
  ],
}, {
  id: '2',
  text: 'Sale',
  items: [{
    id: '2_1',
    text: 'Sale Invoice',
    itemID: 3,
    path: '/saleInvoice'

  }, {
    id: '2_2',
    text: 'Sale Order',
    itemID: 4,
    path: '/saleOrder'
  }],
}, {
  id: '3',
  text: 'Purchase',
  items: [{
    id: '3_1',
    text: 'Purchase Invoice',
    itemID: 5,
     path: '/purchaseInvoice'
  }, {
    id: '3_2',
    text: 'Purchase Order',
    itemID: 6,
    path: '/purchaseOrder'
  }, {
    id: '3_3',
    text: 'Purchase Chellam',
    itemID: 7,
    path: '/purchaseChellan'
  }],
}, {
  id: '4',
  text: 'Account',
  items: [{
    id: '4_1',
    text: 'Recepit',
    itemID: 8,
    path: '/recipt'
  }, {
    id: '4_2',
    text: 'Payment',
    itemID: 9,
    path: '/payment'
  }],
}, {
  id: '5',
  text: 'Miscellaneous',
  items: [{
    id: '5_1',
    text: 'User Reports',
    itemID: 10,
    path: '/userreport'
  }, {
    id: '5_2',
    text: 'WhatsApp',
    itemID: 11,
    path: '/whatsApp'
  }],
}];

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getContinents(): Continent[] {
    return continents;
  }
}
