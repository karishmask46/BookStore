import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token:any;
content:any;
@Input() cartitemslist:any;
  constructor(private router:Router,private cart:CartService) {
     this.content=localStorage.getItem('cartitems')
   }

  ngOnInit(): void {
  this.cart.cartitemQuantity();
  localStorage.getItem('cartitems')
  }
  tocart(){
  this.router.navigateByUrl('/home/cart')
  }
}
