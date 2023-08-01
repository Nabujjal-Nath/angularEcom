import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(formData:NgForm):void{
    console.log("Data::"+ formData.value.name)
  }

}

