import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAlertDialogComponentComponent } from './custom-alert-dialog-component.component';

describe('CustomAlertDialogComponentComponent', () => {
  let component: CustomAlertDialogComponentComponent;
  let fixture: ComponentFixture<CustomAlertDialogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAlertDialogComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomAlertDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
