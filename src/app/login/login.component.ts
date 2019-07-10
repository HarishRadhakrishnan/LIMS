import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'; 
import { NgZone } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Library';
  email: string;
  password: string;
  user:string;

  constructor(private authService: AuthService, 
              private router: Router,
              private zone: NgZone
            ){}

  adminLogin(){
    let loginStatus:any =  this.authService.loginWithCredentials(this.email,this.password);
    if(loginStatus){
      this.authService.userInfo(this.password);
      this.zone.run(()=>{
  			this.router.navigate(['admin']);
  		})
    }
  }

  login(){
    this.authService.loginWithGoogle().then((result) =>{
      this.zone.run(()=>{
  			this.router.navigate(['books']);
  		})
    });
  }

}