import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '@services/asset.service';

@Component({
  selector: 'jp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  public readonly logo: SafeUrl;

  public showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor(private readonly assetService: AssetService) { 
    this.logo = this.assetService.getFile("/logo/justifyprint.png");
  }

  ngOnInit(): void {
  }
}
