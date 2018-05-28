import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConsultarCepService } from './consultar-cep/consultar-cep.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private cepService: ConsultarCepService, private http: Http, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(null, Validators.required),
      enderecoCompleto: this.formBuilder.group({
        cep: [null, Validators.required],
        endereco: [null, Validators.required],
        complemento: [null],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
        pais: [null, Validators.required]
      })
    })
  }

  onSubmit() {
    console.log(this.formulario);
  }

  resetar() {
    this.formulario.reset();
  }

  consultaDeCep() {
    let cep = this.formulario.get('enderecoCompleto.cep').value;
    this.cepService.consultaDeCep(cep, this.resetaDados, this.formulario)
      .subscribe(dados => this.preencheDadosForm(dados));
  }

  preencheDadosForm(dados) {
    this.formulario.patchValue({
      enderecoCompleto: {
        endereco: dados.logradouro + ", " + dados.bairro,
        complemento: dados.complemento,
        cidade: dados.localidade,
        estado: dados.uf,
        pais: dados.pais
      }
    });
  }

  resetaDados(formulario) {
    formulario.patchValue({
      enderecoCompleto: {
        endereco: null,
        complemento: null,
        cidade: null,
        estado: null,
        pais: null
      }
    });
  }

}
