import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'javainuse'
  pwhash = ''
  invalidLogin = false
  // pwhash: any;

  //I'm not sure if this is the right thing to do here

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.pwhash)
    ) {
      this.router.navigate(['events'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

}
