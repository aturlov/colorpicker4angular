import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apt-ColorPicker',
  templateUrl:'./apt-color-picker.component.html' ,
  styleUrls:['./apt-color-picker.component.css']
})
export class AptColorPickerComponent implements OnInit {

  @Input() palette: string[] = ['00', '99', '33', '66', 'FF', 'CC'];
  checkedColor: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  getColor(color:string): void{
    this.checkedColor = color;
    console.log("Checked color: ", this.checkedColor);
  }

}
