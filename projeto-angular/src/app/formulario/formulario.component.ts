import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      cep: new FormControl(null),
      endereco: new FormControl(null),
      complemento: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null),
      pais: new FormControl(null)
    })

  }

}
