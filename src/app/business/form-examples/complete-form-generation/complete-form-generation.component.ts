import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  ControlType,
  FormFieldModelBuilder,
  FormGroupModel
} from './../../../presentation/form-generator/model/form-field.input';

@Component({
  selector: 'app-complete-form-generation',
  templateUrl: './complete-form-generation.component.html',
})
export class CompleteFormGenerationComponent implements OnInit {
  readonly FORM_LABEL = 'Sign In';

  readonly SIGN_UP_FORM = [
    new FormGroupModel(this.FORM_LABEL, [
      new FormFieldModelBuilder()
        .withControlType(ControlType.TEXT)
        .withName('username')
        .withPlaceholder('Desired username')
        .withRequired(true)
        .withDescription('You login identifier')
        .withValidators([Validators.required, Validators.minLength(2)])
        .build(),
      new FormFieldModelBuilder()
        .withControlType(ControlType.TEXT)
        .withName('email')
        .withPlaceholder('Your contact email address')
        .withDescription(
          "We'll be using this address to stay in touch with you"
        )
        .withRequired(true)
        .build(),
      new FormFieldModelBuilder()
        .withControlType(ControlType.DATE)
        .withName('birthday')
        .withPlaceholder('Your birthday')
        .withDescription('Use by us to send you adequate content')
        .withRequired(true)
        .build(),
      new FormFieldModelBuilder()
        .withControlType(ControlType.PASSWORD)
        .withName('password')
        .withPlaceholder('Password')
        .withDescription('Secret used to authenticate')
        .withRequired(true)
        .build(),
    ]),
  ];

  values;
  constructor() {}

  onSave() {
    console.log(this.values);
  }

  ngOnInit(): void {}
}
