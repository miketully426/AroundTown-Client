import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username = '';
  pwhash = '';
  
  


  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    }

  checkLogin() {
   
    this.loginservice.authenticate(this.username, this.pwhash).subscribe((result)=> {
          sessionStorage.setItem("username", this.username);
          this.router.navigate(['events'])
        }, 
        error => {
          console.log("Authentication Error")
      })
  }
}