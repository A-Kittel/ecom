import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../shared/models/products";
import {ShopService} from "../shop.service";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "xng-breadcrumb";
import {BasketService} from "../../basket/basket.service";

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  product: IProduct;
  quantity = 1;

  constructor(private shopService: ShopService,
              private activateRoute: ActivatedRoute,
              private bcService: BreadcrumbService,
              private basketService: BasketService
  ) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();

  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }

  }

  loadProduct() {
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe(product => {
          this.product = product;
          this.bcService.set('@productDetails', product.name);
        }, error => {
          console.log(error);
        }
      );
  }
}
