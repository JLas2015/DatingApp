import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.less']
})
export class MemberListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private alertyfy: AlertifyService) { }

  ngOnInit() {
    this.loadUsers();
  }

  //#region Functions
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      console.log(users);
      this.users = users;
    }, error => {
      this.alertyfy.error(error);
    });
  }
  //#endregion
}
