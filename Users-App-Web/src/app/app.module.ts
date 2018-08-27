import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UserService} from './services/user.service';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {NgxSmartModalModule, NgxSmartModalService} from 'ngx-smart-modal';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HabitsComponent } from './habits/habits.component';
import {AdministratorService} from './services/administrator.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AlertService} from './services/alert.service';
import {AuthService} from './services/auth.service';
import {RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {AuthGuard} from './guard/auth.guard';
import {SidenavService} from './services/sidenav.service';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HabitsComponent,
    SidenavComponent,
    LoginComponent,
    UserDetailsComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forChild(),
    RouterModule.forRoot(
      [
        { path: '', component: LoginComponent}
      ]
    ),
    routing
  ],
  providers: [UserService, NgxSmartModalService, AdministratorService, AlertService, AuthService, AuthGuard, SidenavService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
