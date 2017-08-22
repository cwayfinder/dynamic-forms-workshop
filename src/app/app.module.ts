import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { DynamicFieldDirective } from './dynamic-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    FormInputComponent,
    FormRadioComponent,
    DynamicFieldDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FormInputComponent,
    FormRadioComponent,
  ]
})
export class AppModule { }
