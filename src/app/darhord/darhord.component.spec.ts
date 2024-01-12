import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarhordComponent } from './darhord.component';

describe('DarhordComponent', () => {
  let component: DarhordComponent;
  let fixture: ComponentFixture<DarhordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarhordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DarhordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
