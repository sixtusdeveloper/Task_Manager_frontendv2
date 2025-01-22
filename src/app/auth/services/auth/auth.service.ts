import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/';  // Added trailing slash to the BASE_URL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "api/auth/signup", signupRequest);  // Correct URL
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "api/auth/login", loginRequest);  // Correct URL
  }
}




// Previous code
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// const BASE_URL = 'http://localhost:8080';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private http: HttpClient) { }

//   signup(signupRequest: any):Observable<any> {
//     return this.http.post(BASE_URL + "api/auth/signup", signupRequest);
//   }
//   login(loginRequest: any):Observable<any> {
//     return this.http.post(BASE_URL + "api/auth/login", loginRequest);
//   }
// }
