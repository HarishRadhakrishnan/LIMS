import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class BookService {
  booksArray:any[]=[];
  public books:any = [];
  headers: Headers;
  options: RequestOptions;

  constructor(private http : HttpClient) { }
  getBooks() : Observable<any> {
    return this.http.get('../assets/books.json');
  }

  updateBooks(book){
   this.booksList.push(book);
  }
  /*CRUD using json-server 

  getBooks() : Observable<any> {
    return this.http.get('http://localhost:3000/books');
  }

  updateBooks(book): Observable<any>{
    console.log("Entered update book");
    let body = JSON.stringify(book);
    return this.http.post('http://localhost:3000/books',body)
    .map(this.extractData).catch(this.handleError);
  }
  private extractData(res: Response) {
    console.log("success");
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  */

  set booksList(books:any){
		this.books = books;
	};
	get booksList(){
		return this.books;
  };
  
  addBooks(book){
    this.booksArray.push(book);
  }

  sendBooks(){
    return this.booksArray;
  }

  deletebooks(bookId){
    this.booksArray = this.booksArray.filter((x=> x['id'] !== bookId));
    return this.booksArray;
  }

  deleteFromBookList(bookId){
    this.booksList = this.booksList.filter((x=> x['id'] !== bookId));
    return this.booksList;
  }
}
