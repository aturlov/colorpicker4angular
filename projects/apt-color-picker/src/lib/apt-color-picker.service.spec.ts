import { TestBed } from '@angular/core/testing';

import { AptColorPickerService } from './apt-color-picker.service';

describe('AptColorPickerService', () => {
  let service: AptColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptColorPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
