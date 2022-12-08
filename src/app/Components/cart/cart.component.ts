import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private user:UserService,private book:BookserviceService) { }
 cartbook:any=[]
  ngOnInit(): void {
    this.getcartitems(); 
  }
  getcartitems(){
    this.user.cartitemQuantity().subscribe((result:any)=>{
       this.cartbook=result.result;
       console.log(this.cartbook);
    })
  }
}
