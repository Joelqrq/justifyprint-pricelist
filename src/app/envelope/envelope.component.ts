import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnvelopeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
