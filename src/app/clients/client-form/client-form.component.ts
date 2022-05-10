import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  // define new FormGroup
  clientForm: FormGroup;

  // create new FormControls with validation
  firstname = new  FormControl('', Validators.required);
  lastname = new  FormControl('', Validators.required);
  email = new  FormControl('', Validators.required);
  telephoneNumber = new  FormControl('', Validators.required);
  companyName = new  FormControl('', Validators.required);

  // create a FormGroup in constructor and set properties of
  // formGroup to the FormControls, then set it to be the clientForm used in tempalte
  constructor(fb: FormBuilder) {
    this.clientForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      telephoneNumber: this.telephoneNumber,
      companyName: this.companyName
    });
  }

  ngOnInit(): void {
  }

  // event called when form is submitted, displaying output of form
  saveClient() {
    console.log(this.clientForm);
  }

}
