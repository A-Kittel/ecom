import {Component, OnInit} from '@angular/core';
import {OrdersService} from './orders.service';
import {Observable} from 'rxjs';
import {IOrder} from '../shared/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.loadAllOrdersDetails();
  }

  loadAllOrdersDetails() {
    this.ordersService.getOrders().subscribe((orders: IOrder[]) => {
      this.orders = orders;
    }, error => {
      console.log(error);
    });
  }
}
