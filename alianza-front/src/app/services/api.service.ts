import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users!: User[];

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8006/api/user', user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8006/api/user');
  }

}
