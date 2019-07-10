import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
@Injectable()
export class AuthService {
  loggedInUser: string;
  constructor(public afAuth: AngularFireAuth) { }

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
  loginWithCredentials(email,password){
    if(email == 'admin@gmail.com' && password == 'admin'){
      return true;
    }
    else{
      return false;
    }
  }
  userInfo(user){
    this.loggedInUser = user;
  }
  getUserInfo(){
    return this.loggedInUser;
  }
}
