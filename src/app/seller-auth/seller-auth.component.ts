import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from 'src/service/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService, private router: Router ) { }

  ngOnInit(): void {
  }
  sellerSignup(formData:NgForm):void{
    this.seller.signupSellerApi(formData).subscribe((sellerData)=>{
      console.log("Seller Data is::",sellerData);
      this.router.navigate(['seller-home']);
      
    })

  }

}

