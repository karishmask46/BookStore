import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
bookid:any;
token:any;
  constructor(private http :HttpService) { 
    this.token=localStorage.getItem('token')
  }
  wishlist(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.token
      })

    }
    return this.http.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/'+data.bookid,data, true, header)
  }
  getwishlist(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token':this.token
      })
    }
    return this.http.getwishlist("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items", true, header)
  }
  removeWish(data:any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.http.deleteService("https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/"+data,true, header)
  }
}
