import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelarObservablesComponent } from './cancelar-observables.component';

describe('CancelarObservablesComponent', () => {
  let component: CancelarObservablesComponent;
  let fixture: ComponentFixture<CancelarObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelarObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelarObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
