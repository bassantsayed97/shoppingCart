import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
index ;
product:any={};
  constructor( routerid : ActivatedRoute, dataid :DataService) {
this.index=routerid.snapshot.paramMap.get("id");
dataid.getProductslist().subscribe((data)=>{
  this.product = data[this.index];
  console.log(this.product);
  
  });
}

  ngOnInit(): void {
  }

}
