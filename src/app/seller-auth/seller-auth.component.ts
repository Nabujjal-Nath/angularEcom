import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import { SignUp } from '../interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService: SellerService, private router: Router ) { }

  ngOnInit(): void {
    this.sellerService.onReload();
  }
  sellerSignup(formData:SignUp):void{
    this.sellerService.signupSellerAPI(formData);
  }
}

