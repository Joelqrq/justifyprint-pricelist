import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private _products: IProduct[];
  get products(): IProduct[] {
    return this._products;
  }
  set products(values: IProduct[]) {
    this._products = values;
  }

  products$ = combineLatest([this.productService.getProducts('/assets/api/businessCard/BusinessCard.csv'), this.productService.getProducts('/assets/api/businessCard/Finishing.csv')]);

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }
}
