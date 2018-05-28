import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarCepService } from './consultar-cep/consultar-cep.service';
import { FormularioRoutingModule } from './formulario.routing.module';
import { FormularioComponent } from './formulario.component';
import { FormResultComponent } from './form-result/form-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormularioRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    FormularioComponent,
    FormResultComponent
  ],
  providers: [ConsultarCepService]
})
export class FormularioModule { }
