import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { response } from 'express';
import { catchError, map, Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:5000/auth';

  login(body: User): Observable<boolean> {
  return this.http.post<{ token: string }>(`${this.url}/login`, body, { observe: 'response' }).pipe(
    map(response => {
      if (response.status === 201 && response.body?.token) {
        const token = response.body.token;
        console.log(token);
        localStorage.setItem('token', token);
        return true;
      }
      return false;
    }),
    catchError(error => {
      console.error('Login error:', error);
      return of(false);
    })
  );
}

    logOut() : Observable<boolean>{
      this.http.post(`${this.url}/logout`,localStorage.getItem('token'),{ observe : 'response'}).subscribe({
        next: (response) => {
          if(response.status === 200){
            console.log("User logged out successfully");
            return of(true);
          }
          else{
            console.log("User already logged out");
            return of(false);
          }
        },

        error: (error) => {
          console.log("error");
        }
      })
      return of(false);
    }
}
