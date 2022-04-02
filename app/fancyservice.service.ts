import { Injectable } from '@angular/core';
import {Items} from './items'
@Injectable({
  providedIn: 'root'
})
export class fancyserviceService {

  constructor() { }

  orderedItem: Items[] = []
  getOrders():Items[]{
    return this.orderedItem
  }
}