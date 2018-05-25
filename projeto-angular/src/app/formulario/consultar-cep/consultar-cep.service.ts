import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ConsultarCepService {

  constructor(private http: Http) { }

  retornaCep(cep) {
    let cepCorreto = cep;
    return this.http
    .get(`//viacep.com.br/ws/${cepCorreto}/json`)
    .map(dados => dados.json());
  }
}
