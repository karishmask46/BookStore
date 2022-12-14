import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { UserService } from 'src/app/Services/user.service';

interface list {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  booklist=[]
  constructor(private getbookdata: BookserviceService) { }
  ngOnInit(): void {
    this.bookdate();
  }
  sortrelevance: list[] = [
    { value: '0', viewValue: 'Price : Low to High' },
    { value: '1', viewValue: 'Price : High to Low' },
    { value: '1', viewValue: 'Newest Arrivals' }]
  bookdate() {
    this.getbookdata.getbooks().subscribe((result: any) => {
      console.log(result);
      this.booklist = result.result;
      console.log(this.booklist);
    })
  }
recivemessage(event:any){
this.bookdate();
}
}
