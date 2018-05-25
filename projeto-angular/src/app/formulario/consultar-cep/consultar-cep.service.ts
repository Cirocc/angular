import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ConsultarCepService {
  constructor(private http: Http) { }

  consultaDeCep(cep, resetaFormCallback, formulario) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        resetaFormCallback(formulario);

        return this.http
          .get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json());
      }
    }
  }
}
