import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReynaValeraComponent } from './reyna-valera.component';

describe('ReynaValeraComponent', () => {
  let component: ReynaValeraComponent;
  let fixture: ComponentFixture<ReynaValeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReynaValeraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReynaValeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
