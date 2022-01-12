import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// is exporting the user class here the right thing?

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(
    private httpClient:HttpClient
  ) { }

     authenticate(username, password): Observable<object> {
     return this.httpClient.post("http://localhost:8080/authenticate", {'username': username,'pwhash': password })
   
   
   
    //  .success(function(response) {$scope.usersData = response.users;$scope.message = response.message;});


      // return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).pipe(
      //  map(
      //    userData => {

      //     sessionStorage.setItem('username',username);
      //     sessionStorage.setItem('token', tokenStr);
      //     return userData;
      //    }
      //  )
  
     // );
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

interface LoginResponse {
  success: String
  statusCode: number
}