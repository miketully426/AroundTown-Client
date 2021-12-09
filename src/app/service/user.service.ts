import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';

const baseUrl = 'http://localhost:8080/api/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post(`${baseUrl}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {responseType: 'text'});
  }
}