import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {SidenavService} from '../services/sidenav.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private alertService: AlertService,
              private router: Router,
              public sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.hide();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    this.authService.logout();

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f.email.value, this.f.password.value).pipe(first())
      .subscribe(
        user => {
          this.userService.currUser = user;
          this.router.navigate(['/details/' + user.id]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
