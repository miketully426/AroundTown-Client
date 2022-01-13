import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  image1= "assets/images/AT-slideshow-party.jpg";
  image2= "assets/images/AT-slideshow-people.jpg";
  image3 = "assets/images/AT-slideshow-arcade.jpg";

  images = [this.image1, this.image2, this.image3];
  
  constructor() { }

  ngOnInit() {
  }

}
