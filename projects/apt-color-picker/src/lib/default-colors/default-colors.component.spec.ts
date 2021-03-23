import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultColorsComponent } from './default-colors.component';

describe('DefaultColorsComponent', () => {
  let component: DefaultColorsComponent;
  let fixture: ComponentFixture<DefaultColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
