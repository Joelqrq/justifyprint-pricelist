import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  host: { 'class': 'w-full'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() public readonly identifier: string | undefined;
  public variants$: Observable<Product[]> | undefined;
  
  constructor(private readonly productService: ProductService) { }

  ngOnInit(): void {
    if(this.identifier == undefined)
    {
      throw new Error("Table identifier is not available!");
    }
    this.variants$ = this.productService.getSingleProduct(this.identifier);
  }
}
