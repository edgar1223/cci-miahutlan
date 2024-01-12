  import { Component, NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterOutlet } from '@angular/router';
  import {InicioComponent} from "./inicio/inicio.component";
  import { ReynaValeraComponent } from './reyna-valera/reyna-valera.component';
  import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [MatAutocompleteModule ,MatFormFieldModule ,CommonModule, RouterOutlet,InicioComponent,HttpClientModule,ReynaValeraComponent],
    template: '<app-inicio></app-inicio> ',
    styleUrl: './app.component.css'
  })
 
  export class AppComponent {
    title = 'biblia';
  }
