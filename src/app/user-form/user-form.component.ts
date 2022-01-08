import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { isNull } from 'util';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  emailAvailable: boolean = true;
  usernameAvailable: boolean = true;  

  constructor(private route: ActivatedRoute, 
    private router: Router, private userService: UserService,) {
    this.user = new User();
   }

   goHome() {
    this.router.navigate(['']);
  }

   onSubmit(password: String, confirmPassword: String) {
      if(password === confirmPassword) {
        this.userService.save(this.user).subscribe((result) => this.goHome());
      }
   }

  confirmEmail(email: String) {
      if(email != '') {
        this.userService.sendEmail(email).subscribe(result => this.emailAvailable = result);
      }
  }


  confirmUsername(username: String) {
    if(username != '') {
      this.userService.sendUsername(username).subscribe(result => this.usernameAvailable = result);
    }
  }
   
  ngOnInit() {
    
  }

}
