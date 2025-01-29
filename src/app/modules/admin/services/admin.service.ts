import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASE_URL = ''; // Use proxied base URL


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(BASE_URL + "api/admin/users", { headers: this.createAuthorizationHeader() });
  }

  postTask(taskDTO: any): Observable<any> {
    return this.http.post(BASE_URL + "api/admin/task", taskDTO, { headers: this.createAuthorizationHeader() });
  }

  updateTask(id: number, taskDTO: any): Observable<any> {
    return this.http.put(BASE_URL + `api/admin/task/${id}`, taskDTO, { headers: this.createAuthorizationHeader() });
  }

  searchTask(title: string): Observable<any> {
    return this.http.get(BASE_URL + `api/admin/tasks/search/${title}`, { headers: this.createAuthorizationHeader() });
  }

  getAllTasks(): Observable<any> {
    return this.http.get(BASE_URL + "api/admin/tasks", { headers: this.createAuthorizationHeader() });
  }
  
  deleteTask(id: number): Observable<any> {
    return this.http.delete(BASE_URL + "api/admin/task/" + id, { headers: this.createAuthorizationHeader() });
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get(BASE_URL + "api/admin/task/" + id, { headers: this.createAuthorizationHeader() });
  }

  // New method for fetching paginated tasks
  getPaginatedTasks(page: number, size: number): Observable<any> {
    return this.http.get(
      `${BASE_URL}api/admin/tasks?page=${page}&size=${size}`,
      { headers: this.createAuthorizationHeader() }
    );
  }

  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', 'Bearer ' + StorageService.getToken());
  }
}




// Original code without pagination

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { StorageService } from '../../../auth/services/storage/storage.service';
// // import { environment } from '../../../../environments/environment';

// const BASE_URL = ''; // Use proxied base URL
// // const BASE_URL = environment.apiUrl; // Use environment apiUrl
// // const BASE_URL = 'http://localhost:8080/';  // Added trailing slash to the BASE_URL

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {

//   constructor(private http: HttpClient) { }

//   getUsers(): Observable<any> {
//     return this.http.get(BASE_URL + "api/admin/users", { headers: this.createAuthorizationHeader() });
//   }

//   postTask(taskDTO: any): Observable<any> {
//     return this.http.post(BASE_URL + "api/admin/task", taskDTO, { headers: this.createAuthorizationHeader() });
//   }

//   getAllTasks(): Observable<any> {
//     return this.http.get(BASE_URL + "api/admin/tasks", { headers: this.createAuthorizationHeader() });
//   }


//   private createAuthorizationHeader(): HttpHeaders {
//     return new HttpHeaders().set('Authorization', 'Bearer ' + StorageService.getToken());

//   }


// }
