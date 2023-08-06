import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUp } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  signupSellerAPI(body:SignUp){
    return this.http.post('http://localhost:3000/seller',body, {observe:'response'})
    .subscribe((response)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller-data',JSON.stringify(response.body)); // localStorage store data in string
      this.router.navigate(['seller-home']);
    })
  }

  /*
    * When you click on seller link, it should not show you registration/auth page,
    * it should redirect to seler-home page on page load, provided you logged in earlier.
  */
  onReload(){
    if(localStorage.getItem('seller-data')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
