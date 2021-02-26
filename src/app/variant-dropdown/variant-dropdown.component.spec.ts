import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantDropdownComponent } from './variant-dropdown.component';

describe('VariantDropdownComponent', () => {
  let component: VariantDropdownComponent;
  let fixture: ComponentFixture<VariantDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
