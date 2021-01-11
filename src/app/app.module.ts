import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule,NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { SliderComponent } from './slider/slider.component';
import { FormDataComponent } from './form-data/form-data.component';
import { SearchComponent } from './search/search.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductdetailsComponent,
    ProductlistComponent,
    CartComponent,
    SliderComponent,
    FormDataComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule, 
     HttpClientModule,
     FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
