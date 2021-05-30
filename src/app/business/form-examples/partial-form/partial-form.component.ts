import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ControlType,
  FormFieldModelBuilder,
  FormGroupModel
} from './../../../presentation/form-generator/model/form-field.input';
import { AngularFormTransformerService } from './../../../presentation/form-generator/service/angular-form-transformer.service';

@Component({
  selector: 'app-partial-form',
  templateUrl: './partial-form.component.html',
})
export class PartialFormComponent implements OnInit {
  readonly ADDRESS_FORM = new FormGroupModel('address', [
    new FormFieldModelBuilder()
      .withControlType(ControlType.TEXT)
      .withName('street')
      .withPlaceholder('Street Address')
      .withDescription('The Street you have your residency at with number')
      .withRequired(true)
      .build(),

    new FormFieldModelBuilder()
      .withControlType(ControlType.TEXT)
      .withName('postalCode')
      .withPlaceholder('Postal code')
      .withDescription('Postal code of your residency')
      .withRequired(true)
      .build(),
    new FormFieldModelBuilder()
      .withControlType(ControlType.TEXTAREA)
      .withName('otherDetails')
      .withPlaceholder("Anything else that you'd like to add?")
      .withRequired(true)
      .build(),
  ]);
  addAddressForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly angularFormTransformerService: AngularFormTransformerService
  ) {}

  ngOnInit(): void {
    this.addAddressForm = this.fb.group({
      username: ['', Validators.required],
      address: this.fb.group(
        this.angularFormTransformerService.toFormControls(
          this.ADDRESS_FORM.fields
        )
      ),
    });
  }
  onSave() {
    console.log(this.addAddressForm.value);
  }
}
