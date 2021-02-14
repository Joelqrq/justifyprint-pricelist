import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  private _products: IProduct[];
  get products(): IProduct[] {
    return this._products;
  }
  set products(values: IProduct[]) {
    this._products = values;
  }

  @Input() productUrls: string[];

  products$: Observable<IProduct[]>;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = combineLatest(this.productService.getProducts(this.productUrls)); 
  }
}
