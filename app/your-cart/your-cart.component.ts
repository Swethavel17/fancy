import { Component, OnInit } from '@angular/core';
import {fancyserviceService} from '../fancyservice.service'
import { Items } from '../items';
@Component({
  selector: 'app-orders',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent implements OnInit {

  cartItems: Items[] = []
  constructor(private fs:fancyserviceService) { }

  ngOnInit(): void {
    this.cartItems = this.fs.getOrders()
     console.log(this.cartItems)
    
  }
  delete(id:number){
    this.cartItems = this.cartItems.filter((v, j) => j !== id);
  }
}