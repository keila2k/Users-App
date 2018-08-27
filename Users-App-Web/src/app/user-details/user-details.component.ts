import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../user';
import {SidenavService} from '../services/sidenav.service';
import {AdministratorService} from '../services/administrator.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currUser: User;

  constructor(public userService: UserService,
              public sidenavService: SidenavService,
              public administratorService: AdministratorService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sidenavService.show();
    this.getCurrUser();
  }

  private getCurrUser() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.currUser = user;
        this.userService.currUser.admin ? this.administratorService.show() : this.administratorService.hide();
      });
    });
  }
}
