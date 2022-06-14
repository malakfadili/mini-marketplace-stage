import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ImgPathPipe } from './img-path.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFullComponent } from './product-full/product-full.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ImgPathPipe,
    HomeComponent,
    MyaccountComponent,
    MarketplaceComponent,
    ContactusComponent,
    NavbarComponent,
    ProductFullComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
