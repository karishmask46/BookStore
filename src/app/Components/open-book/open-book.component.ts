
import { Component, Input, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-open-book',
  templateUrl: './open-book.component.html',
  styleUrls: ['./open-book.component.scss']
})
export class OpenBookComponent implements OnInit {
  show=false;
  @Input() cartitem:any
  constructor(private getbookdata: UserService, private bookservice: BookserviceService) { }
  Book: any
  length:any;
  cart:any;
  count=1;
  ngOnInit(): void {
    this.bookservice.getbookdetails.subscribe((result: any) => {
      this.Book = result;
    })
  }
  isShow(){
    this.show=true;
  }
  cartadd() {
    let data = {
      bookid: this.Book._id,
    }
    this.getbookdata.addtoCart(data).subscribe((result: any) => {
      console.log(result);
      localStorage.setItem('cartitems',result)
    })
  }
  wishlist(){
    let data={
      bookid: this.Book._id,
    }
    this.getbookdata.wishlist(data).subscribe((result:any)=>{
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
