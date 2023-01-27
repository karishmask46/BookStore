
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.scss']
})
export class OpenBookComponent implements OnInit {
  show=false;
  @Input() cartitem:any
  
  constructor(private dataservice:DataService,private cartservice:CartService, private wish:WishlistService,private router:Router,private snackbar: MatSnackBar ) { 
    this.hideMatBadge = true;
    this.badgeCounter = 1;
  }
  Book: any
  length:any;
  cart:any;
  count=1;
  item_qty:any;
  hideMatBadge : boolean=true;
  badgeCounter: number=1;
  
  ngOnInit(): void {
    this.dataservice.getbookdetails.subscribe((result: any) => {
      this.Book = result;
      console.log(this.Book);  
    })

  }
  dasboard(){
    this.router.navigateByUrl('/home/dashboard')
  }
  isShow(){
    this.show=true;
  }
  cartadd() {
    let data = {
      bookid:this.Book._id,
    }
    console.log(data);
    
    console.log(this.Book._id);
    this.cartservice.addtoCart(data).subscribe((result: any) => {
      console.log(result);
     
      
    })
  }
  wishlist(){
    let data={
      bookid: this.Book._id,
    }
    console.log(this.Book._id);
    this.wish.wishlist(data).subscribe((result:any)=>{
      console.log(result);
    })
  }
  increment() {
    this.badgeCounter++;
    this.hideMatBadge = false;
  }
  decrement(){ 
    if(this.badgeCounter < 0)
     return;
    this.badgeCounter--;
    if(this.badgeCounter == 0){
      this.hideMatBadge = true;
    }
  }
  openSnackbar(message: any, action: any) {
    this.snackbar.open(message, action,{duration:2000})
  }

  resetCount() {
    this.badgeCounter = 0;
    this.hideMatBadge = true;
  } 


}
