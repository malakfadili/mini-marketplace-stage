import { ProductService } from './../product.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product! : Product
  @Input() prd_idx! : number
  constructor( private router : Router, private service : ProductService) { }

  ngOnInit(): void {
  }

  decrement(event : Event){
    if (this.product.likes > 0) this.product.likes -=1;
    this.service.updateLikes(this.product).subscribe( data=>{
      this.product.likes = data.likes
    })
    }

  increment(event : Event){           
    this.product.likes += 1 
    this.service.updateLikes(this.product)
    .subscribe(data => {
    this.product.likes = data.likes
    })
    }
      

  readMore() {
    this.router.navigate(['/', 'products', this.prd_idx])
    }

  decrementQuantity(quantity : number){
    if(this.product.quantity > 0) this.product.quantity -= 1
    return this.product.quantity;
  }

}
