import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorEjercicioComponent } from './contador-ejercicio.component';

describe('ContadorEjercicioComponent', () => {
  let component: ContadorEjercicioComponent;
  let fixture: ComponentFixture<ContadorEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
