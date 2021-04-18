import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AptColorPickerControl, ColorChangeEvent, ColorPickerInput } from './apt-color-picker-common';
import { DefaultColorsComponent } from './default-colors/default-colors.component';

@Component({
  selector: 'apt-color-picker',
  template: '' ,
  styleUrls: ['./apt-color-picker.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AptColorPickerComponent implements AptColorPickerControl<ColorChangeEvent>, OnInit, OnChanges, OnDestroy {

  private _palette: string[] = ['00', '99', '33', '66', 'FF', 'CC'];
  private _input: ColorPickerInput | null = null;
  private _popupRef: OverlayRef | null = null;
  private _opened = false;
  private _selectedColor = '';
  private _defaultColorsComponent: DefaultColorsComponent | null = null;
  private _colorsSubscription: Subscription | null = null;

  @Input() get palette(): string[] {
    return this._palette;
  }
  set palette(p: string[]) {
    if (p) {
      this._palette = p;
      if (this._defaultColorsComponent && this._opened) {
        this.close();
        this.open();
      }
    }
  }

  @Output() readonly selectedColorChange: EventEmitter<ColorChangeEvent> = new EventEmitter<ColorChangeEvent>();

  @Output() get selectedColor(): string {
      return this._selectedColor;
  }

  @Input() get opened(): boolean {
    return this._opened;
  }

  constructor(private _overlay: Overlay) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void  {
    console.log('Changes', changes);
  }

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
        ])
    });
    this._popupRef = this._overlay.create(overlayconfig);
    const portal = new ComponentPortal(DefaultColorsComponent);
    this._defaultColorsComponent = this._popupRef.attach(portal).instance;
    this._defaultColorsComponent.palette = this.palette;
    this._colorsSubscription = this._defaultColorsComponent.colorSelect.subscribe((c: string) => this._onColorSelect(c));

    this._opened = true;
  }

  close(): void {
    if (!this._opened) {
      return;
    }
    this._destroyPopup();
    this._opened = false;
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
    this._colorsSubscription?.unsubscribe();
    this._colorsSubscription = null;
    this._defaultColorsComponent = null;
  }
}
