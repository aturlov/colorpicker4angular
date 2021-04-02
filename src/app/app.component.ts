import { Component, OnInit } from '@angular/core';
import {AptColorPicker, AptColorPickerModule, ColorChangeEvent} from 'apt-color-picker'

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

  private _colorPicker3: AptColorPicker | null = null;

  constructor(
    private AptColorPickerModule: AptColorPickerModule
  ){ }
  
  ngOnInit(): void {
    this.title = `demo application for ${this.AptColorPickerModule.getTitle()} library`;
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

}
