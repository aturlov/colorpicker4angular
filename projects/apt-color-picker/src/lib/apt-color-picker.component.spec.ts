import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptColorPickerComponent } from './apt-color-picker.component';

describe('AptColorPickerComponent', () => {
  let component: AptColorPickerComponent;
  let fixture: ComponentFixture<AptColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptColorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
