import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AptColorPickerComponent } from './apt-color-picker.component';
import { ColorChangeEvent } from './color-change-event';

@Directive({
  selector: 'input[aptColorPicker]',
  exportAs: 'aptColorPicker'
})

export class ColorPickerInputDirective implements OnDestroy {

  private _colorChangeSubscription: Subscription = Subscription.EMPTY;

  constructor(private _inputRef: ElementRef<HTMLInputElement>) { }

  @Input() set aptColorPicker(colorPicker: AptColorPickerComponent) {
    if (colorPicker) {
      this._colorPicker = colorPicker;
      this._colorChangeSubscription = this._colorPicker.selectedColorChange.subscribe((e: ColorChangeEvent) => {
        this._onColorChange(e.color);
      });
    }
  }

  ngOnDestroy(): void {
    this._colorChangeSubscription.unsubscribe();
  }

  _colorPicker: AptColorPickerComponent | null = null;

  _onColorChange(color: string) {
    this._inputRef.nativeElement.value = color;
  }

  // Similar to DatepickerInput
  // Accept `any` to avoid conflicts with other directives on `<input>` that
  // may accept different types.
  static ngAcceptInputType_value: any;  
}
