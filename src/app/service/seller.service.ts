import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Login, Signup } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);
  isLoginFailed = new EventEmitter<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }
  signupSellerAPI(body:Signup){
    return this.http.post('http://localhost:3000/seller',body, {observe:'response'})
    .subscribe((response)=>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller-data',JSON.stringify(response.body)); // localStorage store data in string
      this.router.navigate(['seller-home']);
    })
  }

  loginSellerAPI(body:Login){
    return this.http.get(`http://localhost:3000/seller?email=${body.email}&password=${body.password}`,{observe:'response'})
    .subscribe((response:any)=>{  // without any response is treated as an object so response.body.length throws error, MUST FIX IT!
      if(response && response.body && response.body.length){ // GET call return response with no body or empty body
        localStorage.setItem('seller-data',JSON.stringify(response.body)); // localStorage store data in string
        this.router.navigate(['seller-home']);
      }
      else
        this.isLoginFailed.emit(true);
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
