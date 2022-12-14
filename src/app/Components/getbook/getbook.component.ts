import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {
  @Input() childmessage:any;
  constructor(private dataservice:DataService,private user:UserService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.childmessage); 
  }
  onclick(book:any){
    this.dataservice.SendBookDetails(book)
    this.router.navigateByUrl('/home/Openbook')
  }

} 
