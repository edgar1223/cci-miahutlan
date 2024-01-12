import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeLecturaComponent } from './plan-de-lectura.component';

describe('PlanDeLecturaComponent', () => {
  let component: PlanDeLecturaComponent;
  let fixture: ComponentFixture<PlanDeLecturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDeLecturaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanDeLecturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
