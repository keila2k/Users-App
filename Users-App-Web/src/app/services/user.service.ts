import { Injectable } from '@angular/core';
import {User} from '../user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Habit} from '../habit';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currUser: User;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }
  deleteUser(user: User) {
    return this.http.delete(`http://localhost:3000/api/users/${user.id}`);
  }

  addUser(user: User) {
    return this.http.post<Habit[]>(`http://localhost:3000/api/users/${user.id}`, user);
  }

  deleteUserHabit(user: User, title: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/users/${user.id}/habits/${title}`);
  }

  addUserHabit(user: User, newHabit: Habit): Observable<any> {
    return this.http.post(`http://localhost:3000/api/users/${user.id}/habits/${newHabit.title}`, newHabit);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/users/${userId}`);

  }
}

