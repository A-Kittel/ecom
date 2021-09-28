import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {IOrder} from '../../shared/models/order';
import {ActivatedRoute} from '@angular/router';
import {BreadcrumbService} from 'xng-breadcrumb';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder;

  constructor(private ordersService: OrdersService,
              private activateRoute: ActivatedRoute,
              private bcService: BreadcrumbService
  ) {
  }

  ngOnInit(): void {
    this.loadOrderDetails();
  }

  loadOrderDetails() {
    this.ordersService.getOrder(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe((order: IOrder) => {
        this.order = order;
        this.bcService.set('@orderDetails', 'Order# ' + order.id + ' - ' + order.status);
      }, error => {
        console.log(error);
      });
  }

}
