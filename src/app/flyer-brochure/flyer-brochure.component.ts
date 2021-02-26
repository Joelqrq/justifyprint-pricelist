import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AssetService } from '../asset.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-flyer-brochure',
  templateUrl: './flyer-brochure.component.html',
  styleUrls: ['./flyer-brochure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyerBrochureComponent implements OnInit {

  imageUrl: SafeUrl;

  readonly productIdentifier: string = "flyer-brochure";

  public readonly variants$: Observable<Product[]>;
  
  public readonly details$ = this.productService.getDetailsFiles("flyer-brochure");
  
  constructor(private productService: ProductService, private assetService: AssetService) {
    this.variants$ = this.productService.getVariants(this.productIdentifier);
    this.imageUrl = this.assetService.getFile("/flyer-brochure-tables/Loose-Sheet-Folding-01.jpg");
  }

  ngOnInit(): void { }

}
