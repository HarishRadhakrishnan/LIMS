import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { OrderByPipe } from './viewbooks/orderBy.pipe';

const addbookRoutes: Routes = [
  { path: 'addbooks', component: AddbooksComponent },
  { path: 'viewbooks', component: ViewbooksComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      addbookRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  declarations: [
    AddbooksComponent, 
    ViewbooksComponent,
    OrderByPipe
  ]
})
export class AdminModule { }
