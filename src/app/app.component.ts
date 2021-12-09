import {Component, OnInit} from '@angular/core';
import {User} from './model/user.model';
import {UserService} from './service/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AroundTown';
  users: User[];

  constructor(private router: Router, private userService: UserService) {
  }

  getUser() {
    this.userService.getUser().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    this.router.navigate(['add-user'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  ngOnInit(): void {
    this.router.events.subscribe(value => {
      this.getUser();
    });
  }
}