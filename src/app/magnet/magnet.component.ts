import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'jp-magnet',
  templateUrl: './magnet.component.html',
  styleUrls: ['./magnet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagnetComponent implements OnInit {

  public readonly productIdentifier: string = "magnet";

  constructor() { }

  ngOnInit(): void {
  }

}
