import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneratorModule } from './../../presentation/form-generator/form-generator.module';
import { CompleteFormGenerationComponent } from './complete-form-generation/complete-form-generation.component';
import { PartialFormComponent } from './partial-form/partial-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompleteFormGenerationComponent,
  },
  {
    path: 'partial',
    component: PartialFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormExampleRouting {}

@NgModule({
  declarations: [CompleteFormGenerationComponent, PartialFormComponent],
  imports: [
    CommonModule,
    FormExampleRouting,
    FormGeneratorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
})
export class FormExamplesModule {}
