import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userservice: HttpService) { }
  register(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
    console.log(data);

    return this.userservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', data, false, header)
  }
  login(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })

    }
    return this.userservice.postservice('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', data, false, header)
  }
  getbooks() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.userservice.getbook('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book', false, header)
  }
}
