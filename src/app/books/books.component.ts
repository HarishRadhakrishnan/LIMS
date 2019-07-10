import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router'; 
import { BookService } from './book.service';
import { Book } from './book'
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books : Book[];
  constructor(
              private _bookService : BookService, 
              private authService: AuthService, 
              private router: Router,
              private zone: NgZone
            ) { }

  getBooks(){
    this.books = this._bookService.booksList;
    console.log(this.books);
  }
  selectedBook(bookId){
    console.log(bookId);
    this.zone.run(()=>{
      this.router.navigate(['books/'+ bookId]);
    })
  }
  ngOnInit() {
    this.getBooks();
  }

}
