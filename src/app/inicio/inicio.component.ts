import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  imports: [MatButtonModule, MatMenuModule,RouterModule],
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
