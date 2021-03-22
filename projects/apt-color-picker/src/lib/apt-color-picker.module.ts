import { NgModule } from '@angular/core';
import { AptColorPickerComponent } from './apt-color-picker.component';

@NgModule({
  declarations: [AptColorPickerComponent],
  imports: [
  ],
  exports: [AptColorPickerComponent]
})
export class AptColorPickerModule {
  getTitle(): string{
    return 'AptColorPicker';
  }
 }
