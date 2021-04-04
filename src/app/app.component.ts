import { Component, OnInit } from '@angular/core';
import { AptColorPickerModule, ColorChangeEvent, AptColorPickerControl } from 'apt-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title?:string;

  p2 = ['EE', 'BB', '55', '22'];
  p3 = ['00', '22', '44', '66', '88', 'AA', 'CC','EE'];

  color1: string = "";
  color2: string = "";
  color3: string = "";

  private _colorPicker3: AptColorPickerControl<ColorChangeEvent> | null = null;

  constructor(
    private aptColorPickerModule: AptColorPickerModule
  ){ }
  
  ngOnInit(): void {
    this.title = `demo application for ${this.aptColorPickerModule.getTitle()} library`;
  } 

  onSelectedColorChange(event: ColorChangeEvent): void {
    this.color1 = event.color;
  }

  onColorButtonClick(event: any): void {
    event.target.style.color = `#${this._colorPicker3?.selectedColor}`;
  }

  onSelectedColorChange3(event: ColorChangeEvent): void {
    this.color3 = event.color;
    this._colorPicker3 = event.target;
  }

  onButtonClick($event: Event) {
    // colorPicker.opened ? colorPicker.close() : colorPicker.open();
    $event.stopPropagation();
  }

}
