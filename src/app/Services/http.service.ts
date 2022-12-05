import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
