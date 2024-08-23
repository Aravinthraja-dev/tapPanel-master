import { Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { VendorComponent } from './components/vendor/vendor.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent },
    { path: 'vendor', component: VendorComponent }
];
