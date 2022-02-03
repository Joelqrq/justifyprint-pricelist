import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeUrl, Title } from '@angular/platform-browser';
import { AssetService } from '@services/asset.service';

@Component({
  selector: 'jp-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnvelopeComponent implements OnInit {

  public readonly imageUrl: SafeUrl;
  public readonly mockImageUrl: SafeUrl;
  public readonly readyMadeUrl: SafeUrl;
  public readonly productSpecUrl: SafeUrl;

  public readonly envelopeIdentifier: string = "envelope";
  public readonly readyMadeIdentifier: string = "envelope-ready-made";

  constructor(private readonly assetService: AssetService, private readonly titleService: Title) {
    this.imageUrl = this.assetService.getFile("/envelope-tables/envelope-image-full-bleed.jpg");
    this.mockImageUrl = this.assetService.getFile("/envelope-tables/envelope-image-mock.jpg");
    this.readyMadeUrl = this.assetService.getFile("/envelope-tables/envelope-image-standard-envelope.jpg");
    this.productSpecUrl = this.assetService.getFile("/envelope-tables/envelope-image-product-specification.jpg");
    this.titleService.setTitle('Justify Print | Envelope')
  }

  ngOnInit(): void {
  }
}
