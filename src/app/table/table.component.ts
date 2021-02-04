import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private _products: IProduct[];
  get products(): IProduct[] {
    return this._products;
  }
  set products(values: IProduct[]) {
    this._products = values;
  }

  constructor() {
    this.products = [ 
      { "name": "Business Cards",
       "attributes": ["Qty", "260gsm + Matte Lamination", "260gsm + Matte Lamination + SpotUV(S)"],
       "datas": [ 
        ["100", "26", "-"],
        ["200", "29", "-"]
      ]},

    ];
  }

  ngOnInit(): void {

  }
}
