import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  pwhash = '';
  // statusObject:{status : string}

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    //  console.log(this.username);
    //  console.log(this.pwhash);
    //  this.loginservice.authenticate(this.username, this.pwhash).subscribe({
    //    next: c => 

       this.loginservice.authenticate(this.username, this.pwhash).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/hello-world']);
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });      
    }
  }
  

    //   if (this.loginservice.authenticate(this.username, this.pwhash)) {
    //   this.router.navigate(['events'])
    //   this.invalidLogin = false
    // } else
    //   this.invalidLogin = true

     // next: c => {
      //   this.router.navigate(['events'])
      //   this.i= false
      // },
      // error: error => {
      //   this.invalidLogin = true
      // }
  }

}
