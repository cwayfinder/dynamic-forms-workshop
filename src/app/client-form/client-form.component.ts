import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientGroup: FormGroup;

  formConfig = [
    {
      key: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Title',
    }, {
      key: 'firstName',
      type: 'text',
      label: 'First name',
      placeholder: 'First name',
    }, {
      key: 'lastName',
      type: 'text',
      label: 'Last name',
      placeholder: 'Last name',
    }, {
      key: 'company',
      type: 'text',
      label: 'Company',
      placeholder: 'Company',
    }, {
      key: 'position',
      type: 'text',
      label: 'Position',
      placeholder: 'Position',
    }, {
      key: 'gender',
      type: 'radio',
      label: 'Gender',
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ]
    },
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clientGroup = this.formBuilder.group({
      'title': 'Mr',
      'firstName': 'Henrik',
      'lastName': 'Larsson',
      'company': 'Fish & Meat',
      'position': 'CEO',
      'gender': 'male'
    });
  }

  save() {
    console.log(this.clientGroup.value);
  }
}
