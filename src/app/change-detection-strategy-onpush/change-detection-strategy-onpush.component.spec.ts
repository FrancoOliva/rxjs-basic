import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategyOnpushComponent } from './change-detection-strategy-onpush.component';

describe('ChangeDetectionStrategyOnpushComponent', () => {
  let component: ChangeDetectionStrategyOnpushComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategyOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionStrategyOnpushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionStrategyOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
