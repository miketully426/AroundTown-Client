import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { UserProfileService } from '../service/user-profile.service';

import { faHandPeace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUser: User;
  faHandPeace = faHandPeace;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private userProfileService: UserProfileService) { 

    }

  ngOnInit():void {
    this.currentUser = new User;
    this.getUser(this.route.snapshot.params.username);
  }

  public getUser(username: String): void {
    this.userService.findUserByUsername(username)
    .subscribe(data => this.currentUser = data);
  }

}
