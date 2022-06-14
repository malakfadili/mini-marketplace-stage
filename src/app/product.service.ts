import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  product! : Product
  constructor( private http : HttpClient) { }

  getData(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products")
  }

  getPrdByIndex(prd_idx: number): Product {
    this.http.get<Product>("http://localhost:3000/products/" + prd_idx).subscribe(data =>{
      this.product = data
    })
    return this.product
  }

  updateLikes(product : Product) : Observable<Product>{
    return this.http.put<Product>('http://localhost:3000/products/' + product.prd_id, product)
  }
      

  
}
