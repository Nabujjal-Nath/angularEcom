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

    productListAPI(){
      return this.http.get<ProductDetails[]>('http://localhost:3000/product');
    }

    productDeleteAPI(id:Number){
      return this.http.delete(`http://localhost:3000/product/${id}`);
    }

    getProductByIdAPI(id:string){
      return this.http.get<ProductDetails>(`http://localhost:3000/product/${id}`);
    }

    updateProductAPI(body:ProductDetails){
      return this.http.put(`http://localhost:3000/product/${body.id}`,body);
    }

    getTrendingProducts(){
      return this.http.get<ProductDetails[]>(`http://localhost:3000/product?_limit=4`);
    }

    getPopularProducts(){
      return this.http.get<ProductDetails[]>(`http://localhost:3000/product?_limit=8`);
    }
    
  }
