import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConsultarCepService {
  constructor(private http: HttpClient) { }

  retornaCep(cep) {
    return this.http
      .get(`//viacep.com.br/ws/${cep}/json`)
  }
}
