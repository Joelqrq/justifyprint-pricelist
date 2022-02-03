import { Component, OnInit } from '@angular/core';
import { SafeUrl, Title } from '@angular/platform-browser';
import { AssetService } from '@services/asset.service';

@Component({
  selector: 'jp-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  
  public readonly modelImageUrl: SafeUrl;
  public readonly productIdentifier: string = "folder";

  constructor(private readonly assetService: AssetService, private readonly titleService: Title) {
    this.modelImageUrl = this.assetService.getFile("/folder-tables/folder-image-layout.jpg");
    this.titleService.setTitle('Justify Print | Folder');
  }
  
  ngOnInit(): void {
  }

}
