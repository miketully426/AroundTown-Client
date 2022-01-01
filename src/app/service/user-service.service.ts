import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURL: string;


  constructor(private http: HttpClient) {
      this.userURL = 'http://localhost:8080/api/users';
   }

   public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.userURL);
   }

   public save(user: User) {
     return this.http.post<User>(this.userURL, user);
   }

   public sendEmail(email: String) {
     return this.http.get<boolean>(`${this.userURL}/confirm/email/${email}`);
   }

   public sendUsername(username: String) {
     return this.http.get<boolean>(`${this.userURL}/confirm/username/${username}`);
   }

}
