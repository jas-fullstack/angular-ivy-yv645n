import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  register: FormGroup;

  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    this.register = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
  submitFN() {
    console.log(this.register.value)
  }
}
