import { Routes, RouterModule } from '@angular/router';
import {  AuthGuard } from './guard/auth.guard';
import {UsersComponent} from './users/users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {HabitsComponent} from './habits/habits.component';

export const appRoutes: Routes = [
  { path: '', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'details/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'habits/:id', component: HabitsComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},



  // otherwise redirect to home
      { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
