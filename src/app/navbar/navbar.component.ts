import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { AssetService } from '../asset.service';

@Component({
  selector: 'jp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  logo: SafeUrl;

  showMenu = false;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor(private assetService: AssetService) { 
    this.logo = this.assetService.getFile("/logo/justifyprint.png");
  }

  ngOnInit(): void {
  }
}
