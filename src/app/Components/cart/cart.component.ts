import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { CartService } from 'src/app/Services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() messageevent=new EventEmitter<any>();
  constructor(private user: CartService, private router: Router, private formBuilder: FormBuilder) { }
  cartbook: any = []
  items: any;
  Book: any;
  count = 1;
  show = false;
  address = true;
  placeorder = true;
  summary = false;
  continue = true;
  item_qty:any;
  createForm !: FormGroup;
  discountPrice: any;
  bookName: any;
  author: any;
  quantity: any
  price: any;
  _id: any;
  length: any;
  addressType:any[]=['Home','work','others']
  ngOnInit(): void {
    this.getcartitems();
    this.createForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      fullAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })
  }
  isShow() {
    this.show = true;
  }
  getcartitems() {
    this.user.cartitemQuantity().subscribe((result: any) => {
      this.cartbook = result.result;
      console.log(this.cartbook);
    })
  }
  close(){
    console.log('enter data');
 
    this.show = false;
    console.log('valid data', this.createForm.value);
    let abcd = {
      addressType: this.addressType,
      fullAddress:this.createForm.value.fullAddress,
      city: this.createForm.value.city,
      state: this.createForm.value.state,
    }
    console.log(abcd);
    
    this.user.customerdetails(abcd).subscribe((result: any) => {
      console.log('details', result);
    })
  }
  todashboard() {
    this.router.navigateByUrl('/home/dashboard')
  }
  increment() {
    this.count = this.count + 1;
  }
  decrement() {
    this.count = this.count - 1;
  }
  addressdetails() {
    this.address = false;
    this.placeorder = false;
  }
  continuebutton() {
    this.summary = false;
    this.continue = false;
  }
  placeOrder() {
    let orders: Array<any> = []
    for (this.Book of this.cartbook) {
      let Book = {
        product_id: this.Book.product_id._id,
        product_name: this.Book.product_id.bookName,
        product_quantity: this.Book.product_id.quantity,
        product_price: this.Book.product_id.price,
      }
      orders.push(Book)
    }
    let payload = {
      orders: orders
    }
    console.log(payload)
    this.user.order(payload).subscribe((res: any) => {
      console.log(res)
    })
  }
  deleteItem(Book:any) {
    console.log(Book)
    this.user.removeItem(Book).subscribe((res: any) => {
      console.log(res)
      location.reload();
    })
  }
  increasebook(Book: any) {
    this.item_qty = Book.quantityToBuy;
    this.item_qty += 1;
    console.log("increased",this.item_qty);
    this.updateCount(Book);
  }
  decreasebook(Book: any) {
    this.item_qty =Book.quantityToBuy;
    if (this.item_qty > 0) {
      this.item_qty -= 1;
      console.log( "decrease", this.item_qty);
      this.updateCount(Book);
    }

  }
  updateCount(Book:any){
    let payload={
      quantityToBuy: this.item_qty
    }
    this.user.quantity(Book._id,payload).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
