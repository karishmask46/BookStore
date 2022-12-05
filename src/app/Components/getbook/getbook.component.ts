import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getbook',
  templateUrl: './getbook.component.html',
  styleUrls: ['./getbook.component.scss']
})
export class GetbookComponent implements OnInit {
 
  @Input() chilsmessage:any;
  constructor() { }
 

  ngOnInit(): void {
    
  }
   
} 
