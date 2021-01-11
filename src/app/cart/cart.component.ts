import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productarr:any;
  
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("productsData") != null){
      this.productarr=JSON.parse(localStorage.getItem("productsData"));
  }}
  remove(item){
    this.productarr=JSON.parse(localStorage.getItem("productsData"));
    for(let i=0; i< this.productarr.length;i++){
      if (this.productarr[i]['id'] == item.id){
        this.productarr.splice(i,1);
        localStorage.setItem('productsData ', JSON.stringify(this.productarr));
        return true;
      }
    }
  }
}
