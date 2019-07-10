import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';

@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {
  mybooks: any;
  constructor(private _bookService: BookService) {}

  displayMyBooks(){
    this.mybooks = this._bookService.sendBooks();
    console.log(this.mybooks);
  }

  returnBook(bookId){
    console.log(bookId);
    this.mybooks = this._bookService.deletebooks(bookId);
  }

  ngOnInit() {
    this.displayMyBooks();
  }

}
