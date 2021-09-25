import {NgModule} from '@angular/core';
import {OrdersModule} from './orders.module';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders.component';

const routes: Routes = [
  {path: '', component: OrdersComponent},
  /*{path: ':id', component: ProductsDetailsComponent, data: {breadcrumb: {alias: 'productDetails'}}},*/
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
