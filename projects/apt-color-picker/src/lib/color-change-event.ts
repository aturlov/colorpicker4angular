import { AptColorPickerComponent } from "./apt-color-picker.component";

export class ColorChangeEvent {
    constructor(public color: string, public target: AptColorPickerComponent){
    }
}