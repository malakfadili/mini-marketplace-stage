import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
//import { MarketplaceComponent } from './marketplace/marketplace.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProductFullComponent } from './product-full/product-full.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'myaccount', component: MyaccountComponent},
  {path: 'marketplace', component: ProductListComponent}, 
  {path:'contact', component: ContactusComponent},
  {path: 'products/:id', component: ProductFullComponent } ,
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
