import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  image1= "assets/images/AT-slideshow-party.jpg";
  image2 = "assets/images/AT-slideshow-gate.jpg";
  image3 = "assets/images/AT-slideshow-bye.jpg";
  

  images = [this.image1, this.image2, this.image3];
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 6000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  } 

  ngOnInit() {
  }

}
