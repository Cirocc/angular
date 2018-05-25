import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarCepService } from './consultar-cep/consultar-cep.service';
import { FormularioRoutingModule } from './formulario.routing.module';
import { FormularioComponent } from './formulario.component';
import { FormResultComponent } from './form-result/form-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormularioRoutingModule
  ],
  exports: [],
  declarations: [FormularioComponent, FormResultComponent],
  providers: [ConsultarCepService]
})
export class FormularioModule { }
