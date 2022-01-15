import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// is exporting the user class here the right thing?

// export class User{
//   constructor(
//     public status:string,
//      ) {}
  
// }

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { }

     authenticate(username, password) {
      return this.httpClient.post("http://localhost:8080/api/authenticate", {'username': username,'pwhash': password });
     }
     
    
    isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

    logOut() {
    sessionStorage.removeItem('username')
  }
}

// interface LoginResponse {
//   success: String
//   statusCode: number
// }
