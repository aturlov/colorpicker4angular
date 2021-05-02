import { Component, Input, OnInit } from '@angular/core';
import {AptColorPickerControl, ColorChangeEvent} from '../apt-color-picker-common';


@Component({
  selector: 'apt-color-picker-toggle',
  templateUrl: './color-picker-toggle.component.html',
  styleUrls: ['./color-picker-toggle.component.css'],
  host:{
    'class': 'apt-color-picker-toggle',
    '(click)': '_toggle($event)'
  }
})
export class ColorPickerToggleComponent implements OnInit {

  @Input('for') colorPicker: AptColorPickerControl<ColorChangeEvent> | null = null;
  @Input() iconSize: string = '14px';
  @Input() iconColor: string = '#000000';
  @Input() buttonStyle: string = '';

  constructor() { }

  ngOnInit(): void {  
  }

  _toggle(event: Event): void {
    if (this.colorPicker) {
      if (this.colorPicker.opened) {
        this.colorPicker.close();
      }
      else {
        this.colorPicker.open();
      }
      event.stopPropagation();
    }
  }

}
