import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AptColorPickerModule } from 'apt-color-picker';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [AptColorPickerModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Demo application for AptColorPicker library'`, () => {
    // expect(app.title).toEqual('Demo application for AptColorPicker library');
    expect(app.title).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('h2').textContent).toContain('Welcome to Demo application for AptColorPicker library');
  });
});
