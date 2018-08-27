import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Params} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {User} from '../user';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = <User> JSON.parse(localStorage.getItem('currentUser'));
    const userId = parseInt(route.params['id'], 10);
    if (user && (user.id === userId || user.admin)) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
      return false;
    }
  }
}
