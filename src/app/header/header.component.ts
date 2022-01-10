import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrolled = 0;
 
  constructor() { 
    this.scrolled = this.scrolled;
  }

  ngOnInit() {
  }

  @HostListener('window: scroll', ['$event'])
  onScroll($event: Event): void {
    let num = window.scrollY;
    if(num >= 10) {
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }

}
