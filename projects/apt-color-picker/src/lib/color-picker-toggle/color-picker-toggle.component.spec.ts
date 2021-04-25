import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { ColorPickerToggleComponent } from './color-picker-toggle.component';
import { AptColorPickerControl } from '../apt-color-picker-common';
import { DebugElement } from '@angular/core';


describe('ToggleComponent', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let toggleDe: DebugElement;
  let toggleEl;
  // let mockAptColorPickerControl = {
  //   palette: ['00', '99', '33', '66', 'FF', 'CC'],
  //   selectedColorChange: EventEmitter<E>,
  //   readonly selectedColor: "",
  //   opened: false,
  //   open(): void {},
  //   close(): void {},
  //   setInput(input: ColorPickerInput): void};

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

    toggleDe = fixture.debugElement.query(By.css('.apt-color-picker-toggle'));
    toggleEl = toggleDe.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have colorPicker property as null at begin',()=>{
    expect(component.colorPicker).toBeNull();
    // pending();
  });

  it('colorPicker should be AptColorPickerControl',()=>{
    expect(5).toEqual(5);
    pending();
  });

  it('_toggle method should call this.colorPicker.open() if colorPicker.opened==false',()=>{

    pending();
  });

  it('_toggle method should call this.colorPicker.close() if colorPicker.opened==true',()=>{

    pending();
  });

  it('_toggle method should call event.stopPropagation()',()=>{

    pending();
  });

  it('should have selector',()=>{
    toggleDe.nativeElement.selector;
    pending();
  });

  it('should have template',()=>{

    pending();
  });

  it('template should have a button',()=>{

    pending();
  });

  it('template should have any title',()=>{

    pending();
  });

  it('should have host class apt-color-picker-toggle',()=>{

    pending();
  });

  it('should have host (click) method',()=>{

    pending();
  });

  it('host (click) method should call _toggle method',()=>{

    pending();
  });

});
