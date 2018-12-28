import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Pagination, PaginatedResult } from '../_models/pagination';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.less']
})
export class ListsComponent implements OnInit {

  users: User[];
  paginationList: Pagination;
  likesParam: string;

  constructor(private authService: AuthService, private userService:  UserService,
              private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      console.log(data);
      this.paginationList = data['users'].pagination;
      console.log(this.paginationList);
    });

    this.likesParam = 'Likers';
  }

  loadUsers() {
    this.userService.getUsers(this.paginationList.currentPage, this.paginationList.itemsPerPage, null, this.likesParam)
                    .subscribe((res: PaginatedResult<User[]>) => {
                            this.users = res.result;
                            this.paginationList = res.pagination;
                          }, error => {
                            this.alertify.error(error);
                          });
  }

  pageChanged(event: any): void {
    this.paginationList.currentPage = event.page;
    this.loadUsers();
  }
}
