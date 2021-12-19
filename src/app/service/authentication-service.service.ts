import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //use user service methods to find the user and pwhashes
  //need to figure out why usesrs arent saving, is it because event is not pushed

    // BASE_PATH: 'http://localhost:8080'
    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

    public username: String;
    public pwHash: String;
  
    constructor(private http: HttpClient) {
  
    }
  
    authenticationService(username: String, pwHash: String) {
      return this.http.get(`http://localhost:8080/api/login`,
        { headers: { authorization: this.createBasicAuthToken(username, pwHash) } }).pipe(map((res) => {
          this.username = username;
          this.pwHash= this.pwHash;
          this.registerSuccessfulLogin(username, pwHash);
        }));
    }
  
    createBasicAuthToken(username: String, pwHash: String) {
      return 'Basic ' + window.btoa(username + ":" + pwHash)
    }
  
    registerSuccessfulLogin(username, pwHash) {
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    }
  
    logout() {
      sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
      this.username = null;
      this.pwHash = null;
    }
  
    isUserLoggedIn() {
      let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      if (user === null) return false
      return true
    }
  
    getLoggedInUserName() {
      let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
      if (user === null) return ''
      return user
    }
}
