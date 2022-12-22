import { Component, Input } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  newName='name';
  currentItem = 'Television';
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: ['Surat'],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) {  }

  
  // profileForm = new FormGroup({

  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),

  //   address: new FormGroup({
  //   street: new FormControl(''),
  //   city: new FormControl(''),
  //   state: new FormControl(''),
  //   zip: new FormControl(''),
  //   })
  // });

  onSubmit() {
    console.warn(this.profileForm.value);
 }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
