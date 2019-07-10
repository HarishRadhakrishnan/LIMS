import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../../books/book.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  isbnValue: number;
  bookDetails:any={
    id:'',
    title : '',
    author:'',
    description:'',
    publishedOn:'',
    publisher:'',
    image:'',
    category:''
  };
  booksData:any;
  errorMessage: string;
  constructor(private http: HttpClient,
              private _bookService:BookService,
              private router: Router, 
              private zone: NgZone
            ) { }

  isbnFun(){
    let data:any= this.http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:'+this.isbnValue);
    console.log(data);
    data.subscribe(data=>{
      //console.log(data);
      this.bookDetails.Author = "";
      this.bookDetails.Category = "";
      if(data.items){
        this.booksData = data.items[0];
        this.bookDetails.title = this.booksData.volumeInfo.title;
        if(this.bookDetails.authors){
          if(this.bookDetails.authors.length > 0 ){
            for(var i=0;i<this.bookDetails.authors.length;i++){
              this.bookDetails.author += this.bookDetails.authors[i];
            }
          }
         }
        this.bookDetails.description = this.booksData.volumeInfo.description;
        this.bookDetails.publishedOn = this.booksData.volumeInfo.publishedDate;
        this.bookDetails.publisher= this.booksData.volumeInfo.publisher;
        this.bookDetails.image=this.booksData.volumeInfo.imageLinks.thumbnail;
        this.bookDetails.id  = this.booksData.id;
        this.bookDetails.stockStatus = 'Available';
        if(this.bookDetails.categories){
          if(this.bookDetails.categories.length > 0 ){
            for(var i=0;i<this.bookDetails.categories.length;i++){
              this.bookDetails.category += this.bookDetails.categories[i];
            }
          }
        } 
        else{
          this.bookDetails.category = this.booksData.volumeInfo.title;
        }
      }
    })
  }

  addBook(){
    console.log(this.bookDetails);
    this._bookService.updateBooks(this.bookDetails);
    this.zone.run(()=>{
      this.router.navigate(['viewbooks']);
    })
  }

  ngOnInit() {
  }

}
