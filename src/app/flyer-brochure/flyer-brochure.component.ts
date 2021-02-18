import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-flyer-brochure',
  templateUrl: './flyer-brochure.component.html',
  styleUrls: ['./flyer-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerBrochureComponent implements OnInit {

  imageUrl: SafeUrl;

  productUrls: string[] = [
    "/flyer-brochure-tables/A4.csv",
    "/flyer-brochure-tables/3xA4.csv",
    "/flyer-brochure-tables/4xA4.csv",
    "/flyer-brochure-tables/A3.csv",
    "/flyer-brochure-tables/A5.csv",
    "/flyer-brochure-tables/A6.csv"
  ];

  variants$ = this.productService.getVariants(this.productUrls);

  details$ = this.productService.getDetailsFiles(["/flyer-brochure-tables/custom.json"])

  constructor(private productService: ProductService, private assetService: AssetService) {
    this.imageUrl = this.assetService.getFile("/flyer-brochure-tables/Loose-Sheet-Folding-01.jpg");
  }

  ngOnInit(): void { }

}
