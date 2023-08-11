import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerAuthComponent } from './seller/seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { SellerHomeComponent } from './seller/seller-home/seller-home.component';
import { AuthSellerGuard } from 'src/auth-seller.guard';
import { ProductListComponent } from './seller/product-list/product-list.component';
import { AddProductComponent } from './seller/add-product/add-product.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'seller-auth',
    component: SellerAuthComponent
  },
  {
    path:'seller-product-list',
    component: ProductListComponent
  },
  {
    path:'seller-add-product',
    component: AddProductComponent
  },
  {
    path:'seller-home',
    component: SellerHomeComponent,
    canActivate:[AuthSellerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
