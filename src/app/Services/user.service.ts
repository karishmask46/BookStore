import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 bookid:any;
 token:any;
  constructor(private httpservice: HttpService) {
    this.token=localStorage.getItem('token')
   }
  register(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
    console.log(data);

    return this.httpservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', data, false, header)
  }
  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
    return this.httpservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', data, false, header)
  }
  getbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.getbook('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', false, header)
  }
  wishlist(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':this.token
      })

    }
    return this.httpservice.wishlist('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list'+data.bookid, data, true, header)
  }
  addtoCart(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':this.token
      })
    }
    return this.httpservice.addcart('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/'+data.bookid,data,true,header)
  }
  cartitemQuantity(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpservice.putbook('https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity',false,header)
  }
}
