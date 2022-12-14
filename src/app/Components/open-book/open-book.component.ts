
import { Component, Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.scss']
})
export class OpenBookComponent implements OnInit {
  show=false;
  @Input() cartitem:any
  constructor(private dataservice:DataService,private cartservice:CartService, private wish:WishlistService,private router:Router ) { }
  Book: any
  length:any;
  cart:any;
  count=1;
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
      bookid: this.Book._id,
    }
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
    this.count=this.count+1;
  }
  decrement(){
    this.count=this.count-1;
  }
}
