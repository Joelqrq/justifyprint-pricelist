import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';

@Component({
  selector: 'jp-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  public readonly modelImageUrl: SafeUrl;
  public readonly productIdentifier: string = "folder";

  constructor(private readonly assetService: AssetService) {
    this.modelImageUrl = this.assetService.getFile("/folder-tables/folder-image-layout.jpg");
  }
  
  ngOnInit(): void {
  }

}
