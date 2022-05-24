import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from './product/interfaces/product.interface';
import { ProductsService } from './product/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productSvc:ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getProducts().pipe(
      tap((products: Product[])=> this.products = products)
    )
    .subscribe();
  }

}
