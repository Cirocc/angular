import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarCepService } from './consultar-cep/consultar-cep.service';
import { FormularioRoutingModule } from './formulario.routing.module';
import { FormularioComponent } from './formulario.component';
import { FormResultComponent } from './form-result/form-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TratamentoDeErroComponent } from './tratamento-de-erro/tratamento-de-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  exports: [],
  declarations: [
    FormularioComponent,
    FormResultComponent,
    TratamentoDeErroComponent
  ],
  providers: [ConsultarCepService]
})
export class FormularioModule { }
