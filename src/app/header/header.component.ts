import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerType:string='default';
  sellerName:string="";
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.route.events.subscribe((urlData:any)=>{
      if(urlData.url){   //url could be null or undefined
        if(localStorage.getItem('seller-data') && urlData.url.includes('seller')){
          this.headerType='seller-header';
          const store= localStorage.getItem('seller-data');
          const storeData = store && JSON.parse(store)[0];
          this.sellerName= storeData.name;
        }
        else{
          this.headerType='default';
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller-data');
    this.route.navigate(["/"]);
  }
}
