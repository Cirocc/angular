import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoDeErroComponent } from './tratamento-de-erro.component';

describe('TratamentoDeErroComponent', () => {
  let component: TratamentoDeErroComponent;
  let fixture: ComponentFixture<TratamentoDeErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamentoDeErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentoDeErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
