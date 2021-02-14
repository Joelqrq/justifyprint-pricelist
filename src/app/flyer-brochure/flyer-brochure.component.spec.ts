import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerBrochureComponent } from './flyer-brochure.component';

describe('FlyerBrochureComponent', () => {
  let component: FlyerBrochureComponent;
  let fixture: ComponentFixture<FlyerBrochureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerBrochureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyerBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
