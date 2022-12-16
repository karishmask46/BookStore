import { Component, Input, OnInit } from '@angular/core';
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
  toBookDetails(id: any) {
    this.id = id;
    this.router.navigate(['/home/openbook'], { state: { value: id } })
  }
  onclick(book:any){
    this.dataservice.SendBookDetails(book)
    this.router.navigateByUrl('/home/Openbook')
  }

} 
