import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns: string[] = [
    'proId',
    'proNome',
    'proCategoria',
    'proPrecoCusto',
    'proPrecoVenda',
    'proEstoque',
    'proStatus',
    'proAtualizadoEm',
    'action'
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)  
    })
  }

}
