import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumelocalservice2Component } from './consumelocalservice2.component';

describe('Consumelocalservice2Component', () => {
  let component: Consumelocalservice2Component;
  let fixture: ComponentFixture<Consumelocalservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consumelocalservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consumelocalservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
