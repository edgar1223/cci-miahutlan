import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {CustomAlertDialogComponentComponent}from "../custom-alert-dialog-component/custom-alert-dialog-component.component"
@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  imports: [MatButtonModule, MatMenuModule,RouterModule],
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(public dialog: MatDialog) {}
  dioshabla(){
    const dialogRef = this.dialog.open(CustomAlertDialogComponentComponent, {
      width: '400px',
      data: { message: 'Estamos trabajando en la base de datos de esta versión. ¡Regrese pronto!' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El cuadro de diálogo se cerró');
    });
  }
}
