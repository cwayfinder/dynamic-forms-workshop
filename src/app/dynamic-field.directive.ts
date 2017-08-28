import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormGroup } from '@angular/forms';

const map = {
  text: FormInputComponent,
  radio: FormRadioComponent,
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {

  @Input() group: FormGroup;
  @Input() config: any;

  constructor(private container: ViewContainerRef,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const componentFactory = this.resolver.resolveComponentFactory(this.getComponentType());
    const componentRef = this.container.createComponent<any>(componentFactory);
    componentRef.instance.group = this.group;
    componentRef.instance.config = this.config;
  }

  private getComponentType(): any {
    if (!(this.config.type in map)) {
      throw new Error(`Type ${this.config.type} is not registered`);
    }

    return map[this.config.type];
  }
}
