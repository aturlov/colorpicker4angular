import { Component, OnInit } from '@angular/core';
import {AptColorPickerModule} from 'apt-color-picker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title?:string;
  constructor(
    private AptColorPickerModule: AptColorPickerModule
  ){}
  ngOnInit(): void {
    this.title = this.AptColorPickerModule.getTitle();
  }

  
}
