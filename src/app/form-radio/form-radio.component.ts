import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.css']
})
export class FormRadioComponent implements OnInit {

  @Input() group: FormGroup;

  @Input() key: string;
  @Input() label: string;
  @Input() options: { value: string, label: string }[];

  constructor() { }

  ngOnInit() {
  }

}
