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

  public readonly imageUrl: SafeUrl;

  public readonly productIdentifier: string = "flyer-brochure";

  public readonly details$ = this.productService.getDetailsFiles("flyer-brochure");
  
  constructor(private readonly productService: ProductService, private readonly assetService: AssetService) {
    this.imageUrl = this.assetService.getFile("/flyer-brochure-tables/flyer-brochure-image-loose-sheet-folding.jpg");
  }

  ngOnInit(): void { }

}
