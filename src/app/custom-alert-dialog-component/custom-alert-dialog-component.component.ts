import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-alert-dialog-component',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './custom-alert-dialog-component.component.html',
  styleUrl: './custom-alert-dialog-component.component.css'
})
export class CustomAlertDialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
