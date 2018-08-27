import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SidenavService} from '../services/sidenav.service';
import {AdministratorService} from '../services/administrator.service';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  newUserForm: FormGroup;
  users: User[];
  currUser: User;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              public ngxSmartModalService: NgxSmartModalService,
              public sidenavService: SidenavService,
              public administratorService: AdministratorService,
              private authService: AuthService,) { }

  ngOnInit() {
    this.sidenavService.show();
    this.currUser = this.userService.currUser;
    this.currUser.admin ? this.administratorService.show() : this.administratorService.hide();
    this.getUsers();
    this.newUserForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      birthDate: ['', Validators.required],
      admin: ['', Validators.required]
    });
  }

  private getUsers() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      } );
  }

  private deleteUser(user: User): void {
    this.userService.deleteUser(user).subscribe();
    if (user.id === this.currUser.id) {
      this.authService.logout();
      location.reload();
      return;
    }
    const newUsers = this.users.filter(h => h !== user);
    this.users = newUsers;
  }

  // convenience getter for easy access to form fields
  get f() { return this.newUserForm.controls; }


  newUserSubmit() {
    const newUser: User = {
      id: this.f.id.value,
      name: this.f.name.value,
      username: this.f.username.value,
      password: this.f.password.value,
      gender: this.f.gender.value,
      email: this.f.email.value,
      phone: this.f.phone.value,
      address: this.f.address.value,
      birthDate: this.f.birthDate.value,
      admin: this.f.admin.value === 'true',
      habits: []
    };
    this.users.push(newUser);
    this.userService.addUser(newUser).subscribe();
    this.newUserForm.reset();
  }
}

