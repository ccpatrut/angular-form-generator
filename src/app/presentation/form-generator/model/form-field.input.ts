import { ValidatorFn } from '@angular/forms';

export class FormFieldModel {
  constructor(
    public readonly name: string,
    public readonly required: boolean,
    public readonly description: string,
    public readonly controlType: ControlType,
    public readonly placeholder: string,
    public readonly validators: ValidatorFn[],
    public readonly value?: string | Date,
    public readonly preIcon?: string
  ) {}
}

export class FormFieldModelBuilder {
  private name: string;
  private required: boolean;
  private description: string;
  private controlType: ControlType;
  private placeholder: string;
  private validators?: ValidatorFn[];
  private value: string | Date;

  withName(name: string): this {
    this.name = name;
    return this;
  }
  withRequired(required: boolean): this {
    this.required = required;
    return this;
  }

  withDescription(description: string): this {
    this.description = description;
    return this;
  }

  withControlType(controlType: ControlType): this {
    this.controlType = controlType;
    return this;
  }

  withPlaceholder(placeholder: string): this {
    this.placeholder = placeholder;
    return this;
  }

  withValidators(validators: ValidatorFn[]): this {
    this.validators = validators;
    return this;
  }

  withValue(value: string | Date): this {
    this.value = value;
    return this;
  }

  build(): FormFieldModel {
    return new FormFieldModel(
      this.name,
      this.required,
      this.description,
      this.controlType,
      this.placeholder,
      this.validators,
      this.value
    );
  }
}

export class FormGroupModel {
  constructor(
    public readonly name: string,
    public readonly fields: Array<FormFieldModel>
  ) {}
}

export enum ControlType {
  TEXT = 'text',
  TEXTAREA = 'textarea',
  EMAIL = 'email',
  PASSWORD = 'password',
  DATE = 'date',
  BOOLEAN = 'boolean',
}
