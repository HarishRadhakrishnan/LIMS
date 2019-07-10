import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router'; 
import { BookService } from '../../books/book.service';
import { Book } from '../../books/book'
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit { 
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
  deleteBookAdmin(bookId){
    console.log(bookId)
    this.books = this._bookService.deleteFromBookList(bookId)
    console.log("Updated books",this.books);
  }

  ngOnInit() {
    this.getBooks();
  }

}
