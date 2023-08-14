import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  productData: undefined | ProductDetails
  updateSuccessMsg: undefined | String; 
  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if(productId)
      this.productService.getProductByIdAPI(productId.slice(1)).subscribe(result=>{
        this.productData = result;
      })
  }

  updateProduct(productDetails:ProductDetails){
    if(this.productData)
      productDetails.id=this.productData.id;
    this.productService.updateProductAPI(productDetails).subscribe((result)=>{
      if(result){
        this.updateSuccessMsg="Product Specification updated Succesfully!"
        setTimeout(()=>{
          this.updateSuccessMsg=undefined;
        },3000);
      }
    })
  }
}
