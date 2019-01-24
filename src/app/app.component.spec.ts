import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dom-unitTest-reactive-forms-ngclass-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dom-unitTest-reactive-forms-ngclass-test');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to dom-unitTest-reactive-forms-ngclass-test!'
    );
  });

  it('should change class from red to green when password reaches 3 characters', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const el = compiled.querySelector('input[formControlName="password"]');
    const form = fixture.debugElement.componentInstance.loginForm;

    fixture.detectChanges();
    expect(el.className).toContain('red');

    form.patchValue({ password: 'a' });
    fixture.detectChanges();
    expect(el.className).toContain('red');

    form.patchValue({ password: 'ab' });
    fixture.detectChanges();
    expect(el.className).toContain('red');

    form.patchValue({ password: 'abc' });
    fixture.detectChanges();
    expect(el.className).toContain('green');
  });
});
