import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './app/service/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSellerGuard implements CanActivate {
  constructor(private sellerService: SellerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('seller-data'))
       return true;
    return this.sellerService.isSellerLoggedIn;
  }
  
}
