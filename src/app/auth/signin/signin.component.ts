import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup = this.fb.group({ });
  submitted = false;
  signinMessage: string = '';
  authMessage: string = '';
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router,
              private authGuardService: AuthGuardService) { 

  }
  get username(){
    return this.signinForm.get('username');
  }
  get password(){
    return this.signinForm.get('password');
  }
  onSubmit(): void {
    var username = this.signinForm.get('username')!.value;
    var password = this.signinForm.get('password')!.value;
    console.log(username);
    this.authService.signInUser(username,password).then(
      () => {this.router.navigate(['/home']);},
      (error) => {
        this.signinMessage = "message d'erreur venant du backend ";
        this.router.navigate(['/signup']);
      }
    );
    
  }
  initForm(){
    this.signinForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^.*[~!@#$%^&*|]+.*$")]]
    });
  }
  
  ngOnInit(): void {
    this.authMessage = this.authGuardService.authMessage;
    this.initForm();
  }

}
