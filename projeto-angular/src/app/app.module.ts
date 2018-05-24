import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultarCepComponent } from './consultar-cep/consultar-cep.component';
import { FormComponent } from './formulario/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ConsultarCepComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
