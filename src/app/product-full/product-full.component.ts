import { Product } from './../product/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.css']
})
export class ProductFullComponent implements OnInit {

  prd_idx! : number
  product! : Product

  constructor( private activatedroute : ActivatedRoute, service : ProductService) {
    this.prd_idx = parseInt(this.activatedroute.snapshot.paramMap.get('id') || '0') 
    this.product = service.getPrdByIndex(this.prd_idx)
   }

  ngOnInit(): void {
  }

}
