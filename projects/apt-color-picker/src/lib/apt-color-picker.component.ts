import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorChangeEvent } from './color-change-event';

// TODO: refactor the rest of the code to use this interface instead of AptColorPickerComponent
export interface AptColorPicker {
  palette: string[];
  selectedColorChange: EventEmitter<ColorChangeEvent>;
  selectedColor:string;
}

@Component({
  selector: 'apt-ColorPicker',
  templateUrl:'./apt-color-picker.component.html' ,
  styleUrls:['./apt-color-picker.component.css']
})
export class AptColorPickerComponent implements AptColorPicker, OnInit {
  
  private _selectedColor: string = "";
  
  @Input() palette: string[] = ['00', '99', '33', '66', 'FF', 'CC'];

  @Output() readonly selectedColorChange: EventEmitter<ColorChangeEvent> = new EventEmitter<ColorChangeEvent>();

  @Output() get selectedColor() { 
      return this._selectedColor; 
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  _onColorSelect(color:string): void {
    this._selectedColor = color;
    this.selectedColorChange.emit({color: color, target: this});    
  }

}
