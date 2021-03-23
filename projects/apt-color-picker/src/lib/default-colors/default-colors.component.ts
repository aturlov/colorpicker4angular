import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'apt-default-colors',
  templateUrl: './default-colors.component.html',
  styleUrls: ['./default-colors.component.scss']
})
export class DefaultColorsComponent implements OnInit {

  @Input() palette: string[] = [];
  _rows: string[][] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('Receied palette', this.palette);
    this.buildRows();
  }

  private buildRows() {
    const l = this.palette.length;
    for (var r = 0; r < l; r++) {
      var row = [];
      for (var g = 0; g < l; g++) {
          if (g === 3) {
            this._rows.push(row);
            row = [];
          }
          for (var b = 0; b < l; b++) {
              row.push(this.palette[r] + this.palette[g] + this.palette[b]);
          }
      }
      this._rows.push(row);
    }    
  }
}