import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  successMsg:string|undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  addProduct(productDetails:ProductDetails){
    this.productService.addProductAPI(productDetails).subscribe((response:any)=>{
      if(response.body){
        this.successMsg="Product added succesfully!"
        setTimeout(()=>{
          this.successMsg=undefined;
        },3000);
      }
    });
  }

}
