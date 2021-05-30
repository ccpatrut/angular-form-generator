import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { FormGeneratorModule } from './../../presentation/form-generator/form-generator.module';
import { CompleteFormGenerationComponent } from './complete-form-generation/complete-form-generation.component';

const routes: Routes = [
  {
    path: '',
    component: CompleteFormGenerationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormExampleRouting {}

@NgModule({
  declarations: [CompleteFormGenerationComponent],
  imports: [
    CommonModule,
    FormExampleRouting,
    FormGeneratorModule,
    MatButtonModule,
  ],
})
export class FormExamplesModule {}
