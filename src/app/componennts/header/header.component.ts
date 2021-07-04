import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }
  logedIn = true
  ngOnInit(): void {
    this.authenticationService.userSubject.subscribe(
      result => {
        console.log(result)
        if(result == null || Object.keys(result).length === 0){
          this.logedIn = false
        }else{
          this.logedIn = true
        }
        console.log(typeof({}))
      }
    )
  }

  logOut(){
    this.authenticationService.logout()
  }

}
