import { Injectable } from "@angular/core";
import { ProductDetails } from "../interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    constructor(private http: HttpClient){}
    addProductAPI(body:ProductDetails){  
        return this.http.post('http://localhost:3000/product',body, {observe:'response'});
    }
  }