import { NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormComponent } from './form/form.component';
import { AngularFormTransformerService } from './service/angular-form-transformer.service';

@NgModule({
  declarations: [
    FormFieldComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers:[AngularFormTransformerService],
  exports:[FormComponent, FormFieldComponent]
})
export class FormGeneratorModule { }
