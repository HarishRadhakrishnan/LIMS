import { Component,OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { BookService } from './books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
              private authService: AuthService, 
              private router: Router, 
              private zone: NgZone,
              private _bookService: BookService
            ){}

  myBooks(){
    this.zone.run(()=>{
      this.router.navigate(['mybooks']);
    })
  }

  myProfile(){
    this.zone.run(()=>{
      this.router.navigate(['myprofile']);
    })
  }

  logout(){
    this.authService.logout();
    this.authService.userInfo("");
    //window.location.reload();
    this.router.navigate(['login']);
  }
  home(){
    this.zone.run(()=>{
      this.router.navigate(['login']);
    })
  }
  getBooks(){
    this._bookService.getBooks().subscribe(
      books =>{
        this._bookService.booksList = books;
      },
      err=> console.log(err)
    );
  }

  ngOnInit(){
    this.getBooks();
  }
}
