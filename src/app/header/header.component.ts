import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: String;
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor(private loginService:AuthenticationService) { }

  ngOnInit() {
  }

}