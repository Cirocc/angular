import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tratamento-de-erro',
  templateUrl: './tratamento-de-erro.component.html',
  styleUrls: ['./tratamento-de-erro.component.css']
})
export class TratamentoDeErroComponent implements OnInit {

  @Input() msgErro: string;
  @Input() mostrarErro: boolean;

  constructor() { }

  ngOnInit() {
  }

}
