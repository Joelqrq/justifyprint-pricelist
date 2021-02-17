import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-flyer-brochure',
  templateUrl: './flyer-brochure.component.html',
  styleUrls: ['./flyer-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerBrochureComponent implements OnInit {

  productUrls: string[] = [
    "/flyer-brochure-tables/A4.csv",
    "/flyer-brochure-tables/3xA4.csv",
    "/flyer-brochure-tables/4xA4.csv",
    "/flyer-brochure-tables/A3.csv",
    "/flyer-brochure-tables/A5.csv",
    "/flyer-brochure-tables/A6.csv"
  ];

  products$ = this.productService.getProducts(this.productUrls);

  details$ = this.productService.getDetailsFiles(["/flyer-brochure-tables/custom.json"])

  constructor(private productService: ProductService) { }

  ngOnInit(): void {  }

}
