import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import {PopularItems} from '../popular-categories-items'
import { fancyserviceService } from '../fancyservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  populItems = PopularItems
  filteredItems: Items[] = []
  popItems = [
    {
      imgUrl:"",
      names: "Jewellery sets"
    },
    {
      imgUrl:"",
      names: "Earrings"
    },
    {
      imgUrl:"",
      names: "Bangles"
    },
    {
      imgUrl:"",
      names: "Rings"
    },
    {
      imgUrl:"",
      names:"Nosepins"
    },
    {
      imgUrl:"",
      names:"Kamarbandh"
    },
    {
      imgUrl:"",
      names:"Oxidised"
    },
  ]

  stars=[
    {
      starImg:""
    }
  ]
  constructor(private fs : fancyserviceService) { }

  ngOnInit(): void {
  }

  onSelect(item: any):void{
    this.filteredItems = this.populItems.filter(i => i.type == item.names)
  }

  add(item:any){
    this.fs.orderedItem.push(item)
  }
}
