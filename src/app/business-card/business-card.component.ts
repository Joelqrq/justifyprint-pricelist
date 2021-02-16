import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  productUrls: string[] = ["/business-card-tables/business-card.csv", "/business-card-tables/finishing.csv"];
  
  products$ = combineLatest(this.productService.getProducts(this.productUrls)); 

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }
}
