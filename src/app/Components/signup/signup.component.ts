import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  constructor( private formBuilder:FormBuilder,private user : UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      phone:['', Validators.required],
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('valid data', this.registerForm.value);
      console.log('do api call');
      let data = {
        fullName: this.registerForm.value.FullName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.Password,
        phone:this.registerForm.value.phone,
        service:'advance'

      }
      this.user.register(data).subscribe((result:any)=>
      {
        console.log(result);
        
      })

    }
    else {
      console.log('invalid data', this.registerForm.value);
      console.log('no api call');

    }



  }
}
