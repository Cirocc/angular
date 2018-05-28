import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TratamentoDeErroComponent } from './tratamento-de-erro/tratamento-de-erro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TratamentoDeErroComponent
  ],
  declarations: [
    TratamentoDeErroComponent
  ]
})
export class SharedModule { }
