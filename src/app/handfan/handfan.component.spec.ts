import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandfanComponent } from './handfan.component';

describe('HandfanComponent', () => {
  let component: HandfanComponent;
  let fixture: ComponentFixture<HandfanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandfanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandfanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
