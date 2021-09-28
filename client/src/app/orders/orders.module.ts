import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrdersComponent} from './orders.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrderDetailsComponent} from './order-details/order-details.component';


@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule {
}
