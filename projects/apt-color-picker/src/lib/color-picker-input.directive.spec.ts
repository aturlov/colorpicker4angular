import { Component, DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ColorPickerInputDirective } from './color-picker-input.directive';

@Component({
  template: `
  <input aptColorPicker>`
})
class TestColorPickerInputDirectiveComponent { }

describe('ColorPickerInputDirective', () => {

  let component: TestColorPickerInputDirectiveComponent;
  let fixture: ComponentFixture<TestColorPickerInputDirectiveComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerInputDirective, TestColorPickerInputDirectiveComponent ]
    });

    fixture = TestBed.createComponent(TestColorPickerInputDirectiveComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(ColorPickerInputDirective));
  });

  it('should find a directive', () => {

    expect(inputEl).toBeTruthy();
    const inputRef = new ElementRef<HTMLInputElement>(inputEl.nativeElement);

    const directive = new ColorPickerInputDirective(inputRef);
    expect(directive).toBeTruthy();
  });
});
