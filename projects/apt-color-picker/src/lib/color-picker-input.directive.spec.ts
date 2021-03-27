import { ElementRef } from '@angular/core';
import { ColorPickerInputDirective } from './color-picker-input.directive';

describe('ColorPickerInputDirective', () => {
  it('should create an instance', () => {
    const input = new HTMLInputElement();
    const directive = new ColorPickerInputDirective(new ElementRef<HTMLInputElement>(input));
    expect(directive).toBeTruthy();
  });
});
