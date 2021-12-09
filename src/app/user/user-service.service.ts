import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/user/';

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addUser(user: Object): Observable<Object> {
    return this.http.post(`${this.url}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}