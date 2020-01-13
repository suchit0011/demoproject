import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceapiService } from 'src/app/_service/serviceapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private apiservice: ServiceapiService,private router: Router) { 
    if(this.apiservice.authUser()){
      this.router.navigate(['']);
    }
  }
  jwt_token;
  invalid_data;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    
    let user_value = this.loginForm.value;
    this.apiservice.loginValue(user_value).subscribe((res: any) => {
      if (res && res.token) {
        
        console.log('+--', res.token);
        this.jwt_token = JSON.stringify(res.token);
        localStorage.setItem('token', this.jwt_token);
        this.router.navigate(['']);
        // console.log('check value ls', localStorage.getItem('token'));

      } else {
        this.invalid_data = "credantial doesn't match";
        // console.log('Invalid credantial', res.user);
        // localStorage.removeItem('token');
      }

    })

  }
}
