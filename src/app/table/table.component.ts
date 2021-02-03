import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
