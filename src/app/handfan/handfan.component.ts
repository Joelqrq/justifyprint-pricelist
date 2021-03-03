import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';

@Component({
  selector: 'jp-handfan',
  templateUrl: './handfan.component.html',
  styleUrls: ['./handfan.component.scss']
})
export class HandfanComponent implements OnInit {

  public readonly mockImageUrl: SafeUrl;
  public readonly modelImageUrl: SafeUrl;
  public readonly productIdentifier: string = "handfan";

  constructor(private readonly assetService: AssetService) {
    this.mockImageUrl = this.assetService.getFile("/handfan-tables/handfan-image-mock.png");
    this.modelImageUrl = this.assetService.getFile("/handfan-tables/handfan-image-model.jpg");
  }

  ngOnInit(): void {
  }

}
