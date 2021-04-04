import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AptColorPickerControl, ColorChangeEvent, ColorPickerInput } from './apt-color-picker-common';
import { DefaultColorsComponent } from './default-colors/default-colors.component';

@Component({
  selector: 'apt-color-picker',
  templateUrl: './apt-color-picker.component.html' ,
  styleUrls: ['./apt-color-picker.component.css']
})

export class AptColorPickerComponent implements AptColorPickerControl<ColorChangeEvent>, OnInit, OnDestroy {

  private _input: ColorPickerInput | null = null;
  private _popupRef: OverlayRef | null = null;
  private _opened = false;
  private _selectedColor = '';
  private _defaultColorsComponent: DefaultColorsComponent | null = null;

  @Input() palette: string[] = ['00', '99', '33', '66', 'FF', 'CC'];

  @Output() readonly selectedColorChange: EventEmitter<ColorChangeEvent> = new EventEmitter<ColorChangeEvent>();

  @Output() get selectedColor(): string {
      return this._selectedColor;
  }

  get opened(): boolean {
    return this._opened;
  }

  @Input() set opened(open: boolean) {
    this._opened = open;
    if (this._opened) {
      this.open();
    } else {
      this.close();
    }
  }

  constructor(private _overlay: Overlay) { }

  ngOnDestroy(): void {
    this._destroyPopup();
  }

  setInput(input: ColorPickerInput): void {
    if (!this._input) {
      this._input = input;
    }
  }

  open(): void {
    if (this._opened || !this._input) {
      return;
    }

    const x1 = 'start';
    const x2 = 'end';
    const y1 = 'top';
    const y2 = 'bottom';

    const overlayconfig = new OverlayConfig({
      positionStrategy: this._overlay.position()
        .flexibleConnectedTo(this._input.getConnectedOverlayOrigin())
        .withPositions([
          { originX: x1, originY: y2, overlayX: x1, overlayY: y1 },
          { originX: x1, originY: y1, overlayX: x1, overlayY: y2 },
          { originX: x2, originY: y2, overlayX: x2, overlayY: y1 },
          { originX: x2, originY: y1, overlayX: x2, overlayY: y1 }
        ]),
        height: '500px', width: '500px'
    });
    this._popupRef = this._overlay.create(overlayconfig);
    const portal = new ComponentPortal(DefaultColorsComponent);
    this._defaultColorsComponent = this._popupRef.attach(portal).instance;
    console.log(this._defaultColorsComponent);
    this._defaultColorsComponent.palette = this.palette;
    this._defaultColorsComponent.colorSelect.subscribe(c => this._onColorSelect(c));

    this._opened = true;
  }

  close(): void {
    if (!this._opened) {
      return;
    }
    this._destroyPopup();
    this._opened = false;
  }

  ngOnInit(): void {
  }

  _onColorSelect(name: string): void {
    this._selectedColor = name;
    this.selectedColorChange.emit({color: name, target: this});
  }

  private _destroyPopup(): void {
    if (this._popupRef) {
      this._popupRef.dispose();
      this._popupRef = null;
    }
  }
}
