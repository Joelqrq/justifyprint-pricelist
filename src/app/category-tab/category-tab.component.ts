import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';

@Component({
  selector: 'jp-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {

  @Input() pageUrl: string = "";
  @Input() variants$: Observable<IProduct[]> = new Observable<IProduct[]>();

  constructor() { }

  ngOnInit(): void {
  }

}
