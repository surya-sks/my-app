import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CommonServiceService } from '../services/common-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public commonService : CommonServiceService, private router: Router, private route: ActivatedRoute){}
  loginForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    username: new FormControl(''),
  });
  ngOnInit(){
    this.commonService.loggedInUser.next('');
  }
  updateUserName(loggedInUser: any){
    this.commonService.loggedInUser.next(loggedInUser);
  }
  onSubmit(){
   this.updateUserName(this.loginForm.controls['username'].value);
   this.router.navigate([`/home`], { relativeTo: this.route });
  }
}
