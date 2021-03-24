import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AptColorPickerComponent } from './apt-color-picker.component';
import { DefaultColorsComponent } from './default-colors/default-colors.component';

@NgModule({
  declarations: [AptColorPickerComponent, DefaultColorsComponent],
  imports: [
    CommonModule
  ],
  exports: [AptColorPickerComponent]
})
export class AptColorPickerModule {
  getTitle(): string{
    return 'AptColorPicker';
  }
 }
