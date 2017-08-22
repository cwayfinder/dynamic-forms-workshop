import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  clientGroup: FormGroup;

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
