import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showHeader: boolean = true;
  showNav: boolean = true;
  title: string;

  constructor(private router: Router) {
    this.title = 'AroundTown';
  }

  ngOnInit() {
    // listenging to routing navigation event
    this.router.events.subscribe(event => this.modifyHeader(event));
   }

   modifyHeader(location) {
     if(location.url != "/events" && location.url != "/addevent") {
       this.showHeader = true;
       this.showNav = false;
     } else {
      this.showHeader = false; 
      this.showNav = true;
     }
   }

}

