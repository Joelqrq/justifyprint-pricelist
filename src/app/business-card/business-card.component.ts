import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  productUrls: string[] = [
    "/business-card-tables/business-card.csv",
    "/business-card-tables/finishing.csv"
  ];

  variants$ = this.productService.getVariants(this.productUrls);

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }
}
