import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  signupSellerApi(body:Object){
    return this.http.post('http://localhost:3000/seller',body);
  }
}
