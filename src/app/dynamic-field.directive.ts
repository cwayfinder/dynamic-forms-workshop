import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';

const types = {
  text: FormInputComponent,
  radio: FormRadioComponent,
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() group: FormGroup;
  @Input() config: any;

  constructor(private container: ViewContainerRef, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.resolver.resolveComponentFactory<any>(types[this.config.type]);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
  }
}
