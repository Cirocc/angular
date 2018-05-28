import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-result',
  templateUrl: './form-result.component.html',
  styleUrls: ['./form-result.component.css']
})
export class FormResultComponent implements OnInit {

  @Input() formResult;

  constructor() { }

  ngOnInit() {
  }

}
