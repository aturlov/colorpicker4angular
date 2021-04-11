import { Component, OnInit, ViewChild } from '@angular/core';
import { AptColorPickerModule, ColorChangeEvent, AptColorPickerControl } from 'apt-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title?:string;

  palettes: {[key: string]: string[]} = {
    'p1': ['00', '99', '33', '66', 'FF', 'CC'],
    'p2': ['EE', 'BB', '55', '22'],
    'p3': ['00', '22', '44', '66', '88', 'AA', 'CC','EE']
  };

  selectedColor: string = '';
  selectedPalette = '';

  @ViewChild('colorPicker1') colorPicker: AptColorPickerControl<ColorChangeEvent> | null = null;

  constructor(
    private aptColorPickerModule: AptColorPickerModule
  ){ }
  
  ngOnInit(): void {
    this.title = `Demo application for ${this.aptColorPickerModule.getTitle()} library`;
  } 

  onSelectedColorChange(event: ColorChangeEvent): void {
    this.selectedColor = event.color;
  }

  changePalette($event: any) {
    this.selectedPalette = $event.target.value;
    if (this.colorPicker) {
      this.colorPicker.palette = this.palettes[this.selectedPalette];
    }
  }

}
