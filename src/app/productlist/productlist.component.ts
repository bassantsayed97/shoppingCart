import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  data: any; 
  productsArr: any;
term:string;
  constructor( private dataservice : DataService) { }


ngOnInit(): void {
  
  this.dataservice.getProductslist().subscribe({
    next: (data) => {
      this.data=data; 
    },
    error: (msg) => {
      console.log('error',msg);
    },
  });
}
addCard(Data)
{
     if(localStorage.getItem("productsData") == null)
      {
        this.productsArr = [];
        this.productsArr.push(Data);
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));

      }
      else
      {
        this.productsArr.push(Data)
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));
      }


    }

}

