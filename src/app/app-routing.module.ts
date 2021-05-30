import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
      import('./business/form-examples/form-examples.module').then(
        (mod) => mod.FormExamplesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
