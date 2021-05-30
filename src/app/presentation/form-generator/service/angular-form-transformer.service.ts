import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { camelCase, chain, Dictionary, isEqual } from 'lodash';
import {
  ControlType,
  FormFieldModel,
  FormGroupModel
} from '../model/form-field.input';

@Injectable()
export class AngularFormTransformerService {
  constructor(private readonly fb: FormBuilder) {}

  toFormGroup(formGroups: FormGroupModel[]): FormGroup {
    const groups = chain(formGroups)
      .map((group) => ({
        name: camelCase(group.name),
        value: this.fb.group(this.toFormControls(group.fields)),
      }))
      .keyBy('name')
      .mapValues('value')
      .value();
    return new FormGroup(groups);
  }

  toFormControls(fields: Array<FormFieldModel>): Dictionary<FormControl> {
    return chain(fields)
      .map((field) => this.newFormField(field))
      .keyBy('name')
      .mapValues('value')
      .value();
  }

  private newFormField(field: FormFieldModel) {
    if (field.validators) {
      return {
        name: field.name,
        value: new FormControl(field.value, field.validators),
      };
    }
    return field.required
      ? {
          name: field.name,
          value: new FormControl(
            field.value,
            isEqual(field.controlType, ControlType.EMAIL)
              ? [Validators.email, Validators.required]
              : Validators.required
          ),
        }
      : {
          name: field.name,
          value: new FormControl(
            field.value,
            isEqual(field.controlType, ControlType.EMAIL)
              ? [Validators.email]
              : []
          ),
        };
  }
}
