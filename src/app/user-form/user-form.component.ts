import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { User } from '../model/user';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, 
    private router: Router, private userService: UserService,) {
    this.user = new User();
   }

   goHome() {
    this.router.navigate(['']);
  }
   onSubmit(password: String, confirmPassword: String) {
     //add password confirmation validation here in an if statement
    if(password === confirmPassword) {
      
      this.userService.save(this.user).subscribe((result) => this.goHome());
      
    }
  
   }

   
  ngOnInit() {
    
  }

}
