import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-services/user.service';
import { User } from '../models/user-models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    UserService
  ]
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit() {
    this.userService.getList().subscribe(users => {
      this.users = users;
    });
  }

}
