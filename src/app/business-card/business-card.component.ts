import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'jp-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusinessCardComponent implements OnInit {

  public readonly productIdentifier: string = "business-card";

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Justify Print | Business Card');
  }

  ngOnInit(): void { }
}
