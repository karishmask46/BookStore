
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {
  @Input() childmessage:any;

  page:number=1;
  Search='';
  id:any;
  totalLength:any;
  constructor(private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((res:any)=>{
      console.log(res)
      this.Search=res;
      // this.totalLength=res.result.length; 
    })
  }
  onclick(book:any){
    this.dataservice.SendBookDetails(book)
    this.router.navigateByUrl('/home/Openbook')
  }
  
} 
