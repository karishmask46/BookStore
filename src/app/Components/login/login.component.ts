import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;
  show=false;
  constructor(private formBuilder:FormBuilder,private loginbook:UserService) { }
  isShow(){
    this.show=true;
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onNext() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('valid data', this.loginForm.value);
      console.log('do api call');
      let abcd = {
        email: this.loginForm.value.Email,
        password: this.loginForm.value.password,
        service:'advance'
      }
      this.loginbook.login(abcd).subscribe((result:any)=>
        {
          console.log(result);
        })
    }
    else {
      console.log('invalid data', this.loginForm.value);
      console.log('no api call');

    }
  }
}
