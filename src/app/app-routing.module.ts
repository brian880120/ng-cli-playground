import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'customers' },
    { path: 'customers', component: CustomerComponent },
    { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
