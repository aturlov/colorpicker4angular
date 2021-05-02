import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorPickerToggleComponent } from './color-picker-toggle.component';
import { AptColorPickerControl, ColorChangeEvent } from '../apt-color-picker-common';


describe('ToggleComponent positive 1', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle should call event.stopPropagation every time',()=>{
    component.colorPicker = colorPickerSpy;
    component._toggle(toggleEventSpy);
    expect(toggleEventSpy.stopPropagation).toHaveBeenCalledTimes(1);      
  });

});


describe('ToggleComponent positive 2', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle method should call this.colorPicker.open() if colorPicker.opened==false',()=>{
    component.colorPicker = colorPickerSpy;
    component.colorPicker.opened = false;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.open).toHaveBeenCalledTimes(1);
  });

});


describe('ToggleComponent positive 3', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle method should call this.colorPicker.close() if colorPicker.opened==true',()=>{
    component.colorPicker = colorPickerSpy;
    component.colorPicker.opened = true;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.close).toHaveBeenCalledTimes(1);
  });

});


describe('ToggleComponent positive 4', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle method should call this.colorPicker: once open or once close and once stopPropagation',()=>{
    component.colorPicker = colorPickerSpy;
    component.colorPicker.opened = false;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.open).toHaveBeenCalledTimes(1);
    expect(component.colorPicker.close).toHaveBeenCalledTimes(0);
    expect(toggleEventSpy.stopPropagation).toHaveBeenCalledTimes(1);   

    component.colorPicker.opened = true;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.open).toHaveBeenCalledTimes(1);
    expect(component.colorPicker.close).toHaveBeenCalledTimes(1);
    expect(toggleEventSpy.stopPropagation).toHaveBeenCalledTimes(2); 

    component.colorPicker.opened = false;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.open).toHaveBeenCalledTimes(2);
    expect(component.colorPicker.close).toHaveBeenCalledTimes(1);
    expect(toggleEventSpy.stopPropagation).toHaveBeenCalledTimes(3); 
  });
});


describe('ToggleComponent negative 1', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle should not call stopPropagation without colorPicker',()=>{
    component.colorPicker = null;
    component._toggle(toggleEventSpy);
    expect(toggleEventSpy.stopPropagation).not.toHaveBeenCalled();
  });
});


describe('ToggleComponent negative 2', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });
  it('_toggle method should not call this.colorPicker.open() if colorPicker.opened==true',()=>{
    component.colorPicker = colorPickerSpy;
    component.colorPicker.opened = true;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.open).not.toHaveBeenCalled();
  });
});


describe('ToggleComponent negative 3', () => {
  
  let component: ColorPickerToggleComponent;
  let fixture: ComponentFixture<ColorPickerToggleComponent>;
  let colorPickerSpy = jasmine.createSpyObj<AptColorPickerControl<ColorChangeEvent>>(['open','close']);
  let toggleEventSpy = jasmine.createSpyObj<Event>(['stopPropagation']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerToggleComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(ColorPickerToggleComponent);
    component = fixture.componentInstance;
  });

  it('_toggle method should not call this.colorPicker.close() if colorPicker.opened==false',()=>{
    component.colorPicker = colorPickerSpy;
    component.colorPicker.opened = false;
    component._toggle(toggleEventSpy);
    expect(component.colorPicker.close).not.toHaveBeenCalled();
  });
});