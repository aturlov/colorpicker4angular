import { ElementRef, EventEmitter } from '@angular/core';

export interface ColorPickerInput {
    getConnectedOverlayOrigin(): ElementRef<HTMLInputElement>;
}

export interface ColorChangeEvent {
    readonly color: string;
    readonly target: AptColorPickerControl<ColorChangeEvent>;
}

export interface AptColorPickerControl<E> {
    palette: string[];
    selectedColorChange: EventEmitter<E>;
    readonly selectedColor: string;
    opened: boolean;
    open(): void;
    close(): void;
    setInput(input: ColorPickerInput): void;
}
