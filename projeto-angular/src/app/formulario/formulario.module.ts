import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarCepComponent } from './consultar-cep/consultar-cep.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormComponent,
    ConsultarCepComponent
  ],
  declarations: [ConsultarCepComponent]
})
export class FormularioModule { }
