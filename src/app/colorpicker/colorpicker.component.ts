import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {
  flagVisibleTable:boolean = false;
  checkedColor:string = '';
  numbers?:number[];
  colorset:string[] = ['ff0000','b00000','870000','550000','e4e400','baba00','878700','545400','00ff00','00b000','008700','005500','00ffff','00b0b0','008787','005555','b0b0ff','8484ff','4949ff','0000ff','ff00ff','b000b0','870087','550055','e4e4e4']
  constructor() {
    this.numbers = Array(5).fill(1).map((x,i)=>i); // [0,1,2,3,4]
    //this.numbers = Array(5).fill(4); // [4,4,4,4,4] 
    
  }

  ngOnInit(): void {
  }

  onShowTable():void{
    this.flagVisibleTable = !(this.flagVisibleTable);
    
  }

  onCheckColor(color:string):void{
    console.log("checked color: ",color);
    this.flagVisibleTable = !(this.flagVisibleTable);
    this.checkedColor = `#${color}`;
    
  }

}
