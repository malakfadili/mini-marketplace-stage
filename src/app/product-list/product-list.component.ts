import { ProductService } from './../product.service';
import { Product } from './../product/product';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductArray : Product[] = [];
  constructor(private service : ProductService) { 
    this.service.getData().subscribe( data =>{
      this.ProductArray = data
    })
  }

  ngOnInit(): void {
  }

}
