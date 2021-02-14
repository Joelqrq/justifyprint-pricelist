import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'jp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  showMenu = true;

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
