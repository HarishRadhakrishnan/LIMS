import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ActivatedRoute }     from '@angular/router'
import { BookService } from '../books/book.service';
import { Book } from '../books/book';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit{
  bookId:string;
  book: any;
  modalRef: BsModalRef;

  constructor(
              private route:ActivatedRoute,
              private _bookService : BookService,
              private modalService: BsModalService
            ) { }
  
  requestBook(template: TemplateRef<any>,book){
    console.log(book);
    this.modalRef = this.modalService.show(template);
    this._bookService.addBooks(book);
  }

  getParamValues() {
    this.route.params.subscribe( params => {
      this.bookId = params['id'];
      this.book = this._bookService.booksList.find(x=> x['id'] === this.bookId);
     });
  }

  ngOnInit(){
    this.getParamValues();
  }
}
