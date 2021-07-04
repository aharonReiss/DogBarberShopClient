import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor (private authenticationService: AuthenticationService) {}
  token:any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.authenticationService.userSubject.subscribe(
        result => {
            this.token = result.token
        }
    ) 
    
    const customReq = request.clone({
        setHeaders: {
            'Authorization' : `Bearer ${this.token}`
          }
    });
    return next.handle(customReq);
  }
}