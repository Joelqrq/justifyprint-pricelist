import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  public readonly productIdentifier: string = "business-card";

  constructor() {
  }

  ngOnInit(): void { }
}
