import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tratamento-de-erro',
  templateUrl: './tratamento-de-erro.component.html',
  styleUrls: ['./tratamento-de-erro.component.css']
})

@Injectable()
export class TratamentoDeErroComponent implements OnInit {

  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched() {
    return (
      !this.control.valid &&
      (this.control.touched || this.control.dirty)
    );
  }
}
