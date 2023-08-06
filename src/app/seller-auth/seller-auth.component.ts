import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import { Login, Signup } from '../interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  show=false;
  authError=""
  constructor(public sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.onReload();
  }
  sellerSignup(formData:Signup):void{
    this.sellerService.signupSellerAPI(formData);
  }

  sellerLogin(formData:Login):void{
    this.sellerService.loginSellerAPI(formData);
    if(this.sellerService.isLoginFailed)
      this.authError="Incorrect Email or Password!"
  }

  openSignup():void{
    this.show=false;
  }

  openLogin():void{
    this.show=true;
  }


}

