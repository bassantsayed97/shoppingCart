import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'form', component: FormDataComponent },
  { path: 'cart', component: CartComponent },
  
  { path: 'home', component: ProductlistComponent},
  {path: "" , redirectTo :'home', pathMatch:'full'} , 
  {path:"details/:id" , component : ProductdetailsComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
