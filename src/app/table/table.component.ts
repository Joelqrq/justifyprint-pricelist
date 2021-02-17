import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';

@Component({
  selector: 'jp-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() products$: Observable<IProduct[]>  = new Observable<IProduct[]>();
  
  constructor() { }

  ngOnInit(): void { }
}
