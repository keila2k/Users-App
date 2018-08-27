import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Habit} from '../habit';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {AdministratorService} from '../services/administrator.service';
import {User} from '../user';
import {SidenavService} from '../services/sidenav.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-habits',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})
export class HabitsComponent implements OnInit {
  newHabitForm: FormGroup;
  habits: Habit[];
  currUser: User;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
              public userService: UserService,
              public ngxSmartModalService: NgxSmartModalService,
              public sidenavService: SidenavService,
              public administratorService: AdministratorService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sidenavService.show();
    this.getCurrUser();
    this.newHabitForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  deleteHabit(habit: Habit) {
     this.userService.deleteUserHabit(this.currUser, habit.title).subscribe(newHabits => {
       this.habits = newHabits;
       this.currUser.habits = newHabits;
     });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.newHabitForm.controls;
  }

  newHabitSubmit() {
    this.submitted = true;
    if (this.newHabitForm.invalid) {
      return;
    }
    this.loading = true;
    const newHabit: Habit = {
      title: this.f.title.value,
      description: this.f.description.value
    };
    this.newHabitForm.reset();
    this.habits.push(newHabit);
    this.userService.addUserHabit(this.currUser, newHabit).subscribe();

  }

  private getCurrUser() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const userId = params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.currUser = user;
        this.habits = this.currUser.habits;
        this.userService.currUser.admin ? this.administratorService.show() : this.administratorService.hide();
      });
    });
  }
}

