import { AptColorPickerComponent } from "./apt-color-picker.component";

export interface ColorChangeEvent {
    color: string;
    target: AptColorPickerComponent;
}