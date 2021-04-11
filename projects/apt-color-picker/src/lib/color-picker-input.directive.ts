import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AptColorPickerControl, ColorChangeEvent, ColorPickerInput } from './apt-color-picker-common';

@Directive({
  selector: 'input[aptColorPicker]',
  exportAs: 'aptColorPicker'
})

export class ColorPickerInputDirective implements ColorPickerInput, OnDestroy {

  private _colorChangeSubscription: Subscription = Subscription.EMPTY;

  private _colorPicker: AptColorPickerControl<ColorChangeEvent> | null = null;

  constructor(private _inputRef: ElementRef<HTMLInputElement>) { }

  @Input() set aptColorPicker(colorPicker: AptColorPickerControl<ColorChangeEvent>) {
    if (colorPicker) {
      this._colorPicker = colorPicker;
      this._colorPicker.setInput(this);
      this._colorChangeSubscription = this._colorPicker.selectedColorChange.subscribe((e: ColorChangeEvent) => {
        this._onColorChange(e.color);
      });
    }
  }

  ngOnDestroy(): void {
    this._colorChangeSubscription.unsubscribe();
  }

  getConnectedOverlayOrigin(): ElementRef {
    return this._inputRef;
  }

  _onColorChange(color: string): void {
    this._inputRef.nativeElement.value = color;
  }

  // Similar to DatepickerInput
  // Accept `any` to avoid conflicts with other directives on `<input>` that
  // may accept different types.
  static ngAcceptInputType_value: any;
}
