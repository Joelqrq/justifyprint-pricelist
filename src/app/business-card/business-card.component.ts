import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  readonly productIdentifier: string = "business-card";
  public readonly variants$: Observable<Product[]>;

  constructor(private productService: ProductService) {
    this.variants$ = this.productService.getVariants(this.productIdentifier);
  }

  ngOnInit(): void { }
}
