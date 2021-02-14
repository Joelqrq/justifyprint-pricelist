import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  productUrls: string[] = ["assets/api/businessCard/BusinessCard.csv", "assets/api/businessCard/Finishing.csv"];

  constructor() { }

  ngOnInit(): void {
  }
}
