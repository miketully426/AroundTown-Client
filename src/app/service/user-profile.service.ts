import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private userprofileURL: string;

  constructor(private http: HttpClient) {
      this.userprofileURL = 'http://localhost:8080/api/userprofile';
   }

   public findAll(): Observable<User[]> {
      return this.http.get<User[]>(this.userprofileURL);
   }

   public save(user: User) {
     return this.http.post<User>(this.userprofileURL, user);
   }

   public findUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.userprofileURL}/${id}`);
  }

  public deleteUser(id: number) {
    return this.http.delete<User>(`${this.userprofileURL}/delete/${id}`);
  }

}