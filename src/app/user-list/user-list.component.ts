import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import User from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private userS: UserService) { }

  ngOnInit() {
    this.userS
      .getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
    });
  }

  deleteUser(id:number, i){
    this.users[i]=null;
    this.userS.deleteUser(id);
  }




}
