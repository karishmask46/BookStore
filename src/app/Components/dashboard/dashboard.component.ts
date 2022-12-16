import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  booklist = []
  Search='';
  constructor(private getbookdata: BookserviceService) { }
  ngOnInit(): void {
    this.bookdate();
  }
  bookdate() {
    this.getbookdata.getbooks().subscribe((result: any) => {
      console.log(result);
      this.booklist = result.result;
      console.log(this.booklist);
    })
  }
  recivemessage(event: any) {
    this.bookdate();
  }
  lowtohigh() {
    this.booklist = this.booklist.sort((low: any, high: any) => low.discountPrice - high.discountPrice);
  }
  hightolow() {
    this.booklist = this.booklist.sort((low: any, high: any) => high.discountPrice - low.discountPrice);
  }
  newestarrivals() {
    this.booklist.reverse();
  }
  
}
