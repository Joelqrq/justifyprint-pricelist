import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-flyer-brochure',
  templateUrl: './flyer-brochure.component.html',
  styleUrls: ['./flyer-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerBrochureComponent implements OnInit {

  productUrls: string[] = ["/business-card-tables/business-card.csv", "/business-card-tables/finishing.csv"];
  
  products$ = combineLatest(this.productService.getProducts(this.productUrls)); 

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

}
