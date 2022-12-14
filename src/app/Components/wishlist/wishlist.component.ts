import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { WishlistService } from 'src/app/Services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  @Input() recieveBookList: any;
  BookList=[]
  Book:any
  description: any;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity:any
  price: any;
  _id:any;
  length:any;
  isShow= false;
  wishlist:any=[];
  constructor(private data:DataService,private book:WishlistService,private router:Router) { }

  ngOnInit(): void {
    this.getwishlistitems();
  }
  getwishlistitems(){
    this.book.getwishlist().subscribe((result:any)=>{
      this.wishlist=result.result;
    })
  }
  deleteItem(Book:any){
    console.log(Book)
    this.book.removeWish(Book).subscribe((res:any)=>{
      console.log(res)
    })
  }
  todashboard() {
    this.router.navigateByUrl('/home/dashboard')
  }
}
