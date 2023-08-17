import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../interface';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingProducts: undefined | ProductDetails[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.trendingProduct();
  }

  trendingProduct(){
    this.productService.getTrendingProducts().subscribe((data)=>{
      console.log("Data is:",data);
      this.trendingProducts= data;
    })
  }

  popularProduct(){
    this.productService.getPopularProducts().subscribe((data)=>{
      console.log("Data is:",data);
      this.trendingProducts= data;
    })
  }

}
