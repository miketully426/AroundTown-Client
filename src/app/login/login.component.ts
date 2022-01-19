import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  pwhash = '';
  user: User;
  isLoggedInFail = false;
  msg:string;
  

  constructor(private router: Router,
    private loginservice: AuthenticationService) {
      this.user = new User();
     }

  ngOnInit() {
    }
    loginFailSuccess(results: any) {
      console.log(results)
      if(results.status === "success") {
        sessionStorage.setItem("username", this.username);
        this.router.navigate([`userprofile/${this.user.username}`]);
      } else {
        console.log("failure")
      }
    }

    checkLogin() {
      this.loginservice.authenticate(this.user).subscribe((result)=> {
            this.loginFailSuccess(result);
            // this.isLoggedInFail = false;
          },
          error => {
            this.msg='Invalid Username or Password entered!';
             return this.msg;
            console.log("Authentication Error");
        })
    }
}