import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { camelCase, startCase } from 'lodash';
import { FormGroupModel } from '../model/form-field.input';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class FormFieldComponent implements OnInit {
  @Input() group: FormGroupModel;

  constructor() {}

  ngOnInit(): void {}

  trackByFn(index) {
    return index;
  }

  camelCase(input: string): string {
    return camelCase(input);
  }

  getLabel(fieldName: string): string {
    return startCase(fieldName);
  }
}


