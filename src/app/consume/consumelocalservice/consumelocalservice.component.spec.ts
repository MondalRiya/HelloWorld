import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumelocalserviceComponent } from './consumelocalservice.component';

describe('ConsumelocalserviceComponent', () => {
  let component: ConsumelocalserviceComponent;
  let fixture: ComponentFixture<ConsumelocalserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumelocalserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumelocalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
