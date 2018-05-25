import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCepComponent } from './consultar-cep.component';

describe('ConsultarCepComponent', () => {
  let component: ConsultarCepComponent;
  let fixture: ComponentFixture<ConsultarCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
