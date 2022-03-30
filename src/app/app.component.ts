import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //   registrationForm = new FormGroup({
  //     userName: new FormControl('Saif'),
  //     password: new FormControl(''),
  //     confirmPassword: new FormControl(''),

  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       postalCode: new FormControl(''),
  //     }),
  //   });

  constructor(private fb: FormBuilder) {};

  registrationForm = this.fb.group({
    userName: ['Saif'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: ['Khulna'],
      state: [''],
      postalCode: [''],
    }),
  });

  loadAPI() {
    this.registrationForm.setValue({
      userName: 'Fardin',
      password: '',
      confirmPassword: '',
      address: {
        city: 'Dhaka',
        state: 'Ghulshan',
        postalCode: '1217',
      },
    });
  }

  patchAPI() {
    this.registrationForm.patchValue({
      address: {
        city: 'Chittagong',
        state: 'Raozan',
        postalCode: '6577',
      },
    });
  }
}
