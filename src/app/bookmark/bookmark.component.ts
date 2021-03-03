import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';

@Component({
  selector: 'jp-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {

  public readonly imageUrl: SafeUrl;
  public readonly sampleImageUrl: SafeUrl;
  public readonly productIdentifier: string = "bookmark";

  constructor(private readonly assetService: AssetService) {
    this.imageUrl = this.assetService.getFile("/bookmark-tables/bookmark-image-model.jpg");
    this.sampleImageUrl = this.assetService.getFile("/bookmark-tables/bookmark-image-mock.jpg");
  }

  ngOnInit(): void {
  }
}
