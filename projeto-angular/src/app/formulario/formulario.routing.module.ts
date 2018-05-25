import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario.component';

const formularioRoutes: Routes = [
  { path: '', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(formularioRoutes)],
  exports: [RouterModule]
})

export class FormularioRoutingModule {}
