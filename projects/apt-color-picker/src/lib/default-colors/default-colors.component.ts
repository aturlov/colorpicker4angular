import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'apt-default-colors',
  templateUrl: './default-colors.component.html',
  styleUrls: ['./default-colors.component.scss']
})
export class DefaultColorsComponent implements OnInit, OnChanges {

  @Input() palette: string[] = [];
  _rows: string[][] = [];
  @Output() colorSelect = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit(): void {
    this.buildRows();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO why does not work?
    console.log('Colors ngOnChanges');
    if (changes.palette) {
      this.buildRows();
    }
  }

  private buildRows(): void {
    const l = this.palette.length;
    for (let r = 0; r < l; r++) {
      let row = [];
      for (let g = 0; g < l; g++) {
          if (g === Math.floor(l / 2)) {
            this._rows.push(row);
            row = [];
          }
          for (let b = 0; b < l; b++) {
              row.push(this.palette[r] + this.palette[g] + this.palette[b]);
          }
      }
      this._rows.push(row);
    }
  }

  _clickOnColor(color: string): void {
    this.colorSelect.emit(color);
  }
}
