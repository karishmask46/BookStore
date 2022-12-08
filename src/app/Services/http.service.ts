import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  postservice(url: any, data: any, token: boolean = false, options: any) {

    return this.http.post(url, data, token && options)
  }
  getbook(url:any,token:boolean=false,options:any){
   return this.http.get(url,token && options)
  }
  putbook(url:any,token:boolean=false,options:any){
    return this.http.put(url,token && options)
  }
  addcart(url:any,data:any,token:boolean=true,options:any){
    return this.http.post(url,data,token && options)
  }
  wishlist(url:any,data:any,token:boolean=true,options:any){
    return this.http.post(url,data,token && options)
  }
}
