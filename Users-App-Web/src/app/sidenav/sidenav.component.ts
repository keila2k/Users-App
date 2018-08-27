import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {SidenavService} from '../services/sidenav.service';
import {AdministratorService} from '../services/administrator.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private userSerivce: UserService,
              private router: Router,
              private authService: AuthService,
              public sidenavService: SidenavService,
              public administratorService: AdministratorService) {
  }

  ngOnInit() {
  }

  changeRoute(url: string) {
    if (url === '/users') {
      this.router.navigate([url]);
    } else {
      this.router.navigate([url + this.userSerivce.currUser.id]);
    }
  }

  logout() {
    this.authService.logout();
    location.reload();

  }
}
