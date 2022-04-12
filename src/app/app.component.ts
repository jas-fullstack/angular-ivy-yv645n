import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

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
      name: new FormControl('',Validators.required),
      email: new FormControl(''),
    });
  }
  submitFN() {
    console.log(this.register.valid)
    console.log(this.register.value)
  }
}
