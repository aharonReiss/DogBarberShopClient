import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, retry} from 'rxjs/operators';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userSubject: BehaviorSubject<any>
  public user?: Observable<any>

  private handleErro(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('client side error',errorResponse.error.message)
    } else {
      console.error('server side error',errorResponse)
    }
    return Observable.throw(errorResponse.status);    
  }

  constructor(private http : HttpClient,private router:Router) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}'));
  }
 
  logIn(loginForm:any): Observable<Response> {
     return this.http.post<any>("https://localhost:44352/api/Authentication",{
      "UserName" : loginForm.username,
      "Password": loginForm.password
     }).pipe(
       map(user => {
        localStorage.setItem('user', JSON.stringify(user.result));
        this.userSubject.next(user.result);
        return user
       }),
       catchError(this.handleErro))
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['']);
    window.location.reload()
  }

  signUp(loginForm:any): Observable<Response> {
    console.log(loginForm)
    return this.http.put<any>("https://localhost:44352/api/Authentication",{
      "Name":loginForm.name,
      "UserName": loginForm.email,
      "Password": loginForm.password
    }).pipe(
      map(user => {
       return user
      }),
      catchError(this.handleErro))
 }


}


