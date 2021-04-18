import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerToggleComponent } from './color-picker-toggle.component';

describe('ToggleComponent', () => {
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
