import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  facilities = [
    {
      url: "https://thumbs.dreamstime.com/z/smiling-young-delivery-man-medical-mask-holding-carrying-cardbox-smiling-young-delivery-man-medical-mask-holding-176956522.jpg",
      facName: " "
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
