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

    if (this.formulario.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            // this.formulario.reset();
            // this.resetar();
          },
          (error: any) => alert('erro')
        );
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  mensagemErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCepIncorreto(cep, resetaFormCallback, formulario) {
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        resetaFormCallback(formulario);

        return this.cepService.retornaCep(cep);
      }
    }
  }

  consultaDeCep() {
    let cep = this.formulario.get('enderecoCompleto.cep').value;
    this.consultaCepIncorreto(cep, this.resetaDados, this.formulario)
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
