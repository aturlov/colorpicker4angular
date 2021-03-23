import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {
  flagVisibleTable:boolean = false;
  checkedColor:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onShowTable():void{
    this.flagVisibleTable = !(this.flagVisibleTable);
    
  }


  onCheckColor():void{
    this.flagVisibleTable = !(this.flagVisibleTable);
    this.checkedColor = "Color was checked"
  }

}
