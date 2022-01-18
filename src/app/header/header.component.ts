import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  image1 = "assets/images/AT-slideshow-gate.jpg";
  image2= "assets/images/AT-slideshow-party.jpg";
  image3 = "assets/images/AT-slideshow-bye.jpg";


  constructor(private loginService:AuthenticationService) { }
  images = [this.image1, this.image2, this.image3];
  
  constructor(config: NgbCarouselConfig) {  
    config.interval = 6000;
    }

  ngOnInit() {
  }

}