import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {
  @Input() childmessage:any;
  constructor(private bookservice:BookserviceService,private user:UserService) { }

  ngOnInit(): void {
  }
  onclick(book:any){
    this.bookservice.SendBookDetails(book)
  }

} 
