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
  constructor(private productList:ProductService) { }

  ngOnInit(): void {
    this.productList.productListAPI().subscribe((response)=>{
      if(response)
        this.products=response;
    })
  }

}
