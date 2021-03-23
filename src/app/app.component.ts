import { Component, OnInit } from '@angular/core';
import {AptColorPickerModule} from 'apt-color-picker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title?:string;
  p2 = ['EE', 'BB', '55', '22', '88', '11'];

  constructor(
    private AptColorPickerModule: AptColorPickerModule
  ){}
  
  ngOnInit(): void {
    this.title = `demo application for ${this.AptColorPickerModule.getTitle()} library`;
  } 
}
