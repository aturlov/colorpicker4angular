import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apt-ColorPicker',
  templateUrl:'./apt-color-picker.component.html' ,
  styleUrls:['./apt-color-picker.component.css']
})
export class AptColorPickerComponent implements OnInit {

  @Input() palette: string[] = ['00', '99', '33', '66', 'FF', 'CC'];
  constructor() { }

  ngOnInit(): void {
  }

}
