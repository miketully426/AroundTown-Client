import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";
//import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})

export class NewUserFormComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    username: '',
    password: ''

  };

  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {
  }
  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      name: this.user.name,
      email: this.user.email,
      username: this.user.username,
      password: this.user.password
      
    };

    this.userService.addUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
   
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      name: '',
      email: '',
      username: '',
      password: '',
    };
  }
  // addForm: FormGroup;

  // ngOnInit() {
  //   this.addForm = this.formBuilder.group({
  //     id: [],
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     username: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });

  // }

  // onSubmit() {
  //   this.userService.addUser(this.addForm.value)
  //     .subscribe(data => {
  //       this.router.navigate(['list-user']);
  //     });
  // }

}
