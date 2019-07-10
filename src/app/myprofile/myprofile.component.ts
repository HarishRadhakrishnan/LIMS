import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public isLoggedIn: boolean;
  public user_name: string;
  public user_email: string;
  public isAdmin: string;

  constructor(private authService: AuthService) {}

  adminFun(){
    this.authService.afAuth.authState.subscribe(
      (authState) => {
        if(authState == null){
          this.isLoggedIn = false;
          this.user_name = '';
          this.user_email = '';
          //this.router.navigate(['login']);
        }
        else{
          this.isLoggedIn = true;
          this.user_name = authState.displayName;
          this.user_email = authState.email;
         // this.router.navigate(['books']);
        }
      })
      if(this.authService.getUserInfo()){
        this.isAdmin = this.authService.getUserInfo();
      }
  }
  ngOnInit() {
    this.adminFun();
  }

}
