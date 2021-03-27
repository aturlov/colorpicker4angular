import { AptColorPickerComponent } from './apt-color-picker.component';

import { ColorChangeEvent } from './color-change-event';

describe('ColorChangeEvent', () => {
  it('should create an instance', () => {
    expect(new ColorChangeEvent("", new AptColorPickerComponent())).toBeTruthy();
  });
});
