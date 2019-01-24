import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dom-unitTest-reactive-forms-ngclass-test';
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }
}
