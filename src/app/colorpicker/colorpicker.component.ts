import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {
  flagVisibleTable:boolean = false;
  checkedColor:string = "";
  numbers?:number[];
  constructor() {
    this.numbers = Array(5).fill(1).map((x,i)=>i+1); // [0,1,2,3,4]
    //this.numbers = Array(5).fill(4); // [4,4,4,4,4] 
  }

  ngOnInit(): void {
  }

  onShowTable():void{
    this.flagVisibleTable = !(this.flagVisibleTable);
    
  }


  onCheckColor(i:number,j:number):void{
    this.flagVisibleTable = !(this.flagVisibleTable);
    this.checkedColor = `Color was checked ${i}${j}`
  }

}
