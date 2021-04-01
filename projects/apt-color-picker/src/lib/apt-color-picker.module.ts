import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AptColorPickerComponent } from './apt-color-picker.component';
import { DefaultColorsComponent } from './default-colors/default-colors.component';
import { ColorPickerInputDirective } from './color-picker-input.directive';

@NgModule({
  declarations: [AptColorPickerComponent, DefaultColorsComponent, ColorPickerInputDirective],
  imports: [
    CommonModule
  ],
  exports: [AptColorPickerComponent, ColorPickerInputDirective]
})
export class AptColorPickerModule {
  getTitle(): string{
    return 'AptColorPicker';
  }
 }
