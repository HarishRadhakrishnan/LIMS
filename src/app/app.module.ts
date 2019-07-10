import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './books/book.service';
import { environment } from '../environments/environment';
import { GroupByPipe } from './books/groupBy.pipe';
import { FilterPipe } from './books/filter.pipe';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth/auth.service';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { ModalModule } from 'ngx-bootstrap';
import { MybooksComponent } from './mybooks/mybooks.component';
import { AdminComponent } from './admin/admin.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdminModule } from './admin/admin.module';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: BookdetailsComponent },
  { path: 'mybooks', component: MybooksComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'admin', component: AdminComponent },
  { path : '**', redirectTo: 'login', pathMatch : 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    GroupByPipe,
    FilterPipe,
    BookdetailsComponent,
    MybooksComponent,
    AdminComponent,
    MyprofileComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [BookService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
