import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AptColorPickerComponent } from './apt-color-picker.component';
import { DefaultColorsComponent } from './default-colors/default-colors.component';
import { ColorPickerInputDirective } from './color-picker-input.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColorPickerToggleComponent } from './color-picker-toggle/color-picker-toggle.component';

@NgModule({
  declarations: [AptColorPickerComponent, DefaultColorsComponent, ColorPickerInputDirective, ColorPickerToggleComponent],
  imports: [
    CommonModule, OverlayModule
  ],
  exports: [AptColorPickerComponent, ColorPickerInputDirective, ColorPickerToggleComponent]
})
export class AptColorPickerModule {
  getTitle(): string{
    return 'AptColorPicker';
  }
}
