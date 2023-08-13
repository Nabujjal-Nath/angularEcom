import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/interface';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:ProductDetails[]|undefined;
  successDeleteMsg: String|undefined;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.displayProductList();
  }

  deleteProduct(id:Number){
    this.productService.productDeleteAPI(id).subscribe((result)=>{
      console.log("result is::",result);
      if(result){
        this.successDeleteMsg = "Product deleted successfully!";
      }
      setTimeout(()=>{
        this.successDeleteMsg = "";
      },3000);
      this.displayProductList(); // this rerender the page once an item is deleted.
    });
  }

  displayProductList(){
    this.productService.productListAPI().subscribe((response)=>{
      if(response)
        this.products=response;
    })
  }

}
