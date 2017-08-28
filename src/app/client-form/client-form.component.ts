import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.clientForm = this.builder.group({
      'title': 'Mr',
      'firstName': 'Henrik',
      'lastName': 'Larsson',
      'company': 'Fish & Meat',
      'position': 'CEO',
      'gender': 'female'
    });
  }

  save() {
    console.log('submit');
  }
}
