import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'jp-magnet',
  templateUrl: './magnet.component.html',
  styleUrls: ['./magnet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MagnetComponent implements OnInit {
  
  public readonly productIdentifier: string = "magnet";

  constructor(private readonly titleService: Title) { 
    this.titleService.setTitle('Justify Print | Magnet');
  }

  ngOnInit(): void {
  }

}
