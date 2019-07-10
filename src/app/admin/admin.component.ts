import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }
  addBooks(){
    this.zone.run(()=>{
      this.router.navigate(['addbooks']);
    })
  }
  viewBooks(){
    this.zone.run(()=>{
      this.router.navigate(['viewbooks']);
    })
  }
  ngOnInit() {
  }

}
