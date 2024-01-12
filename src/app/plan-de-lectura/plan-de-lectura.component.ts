  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { ViewChild } from '@angular/core';
  import { MatDialog, MatDialogRef } from '@angular/material/dialog';
  import { DialogComponent } from '../dialog/dialog.component';

  export interface Lectura {
    day: number;
    libro: string;
    versiculos: string;
  
  }

  interface Mes {
    nombre: string;
    dias: Array<Lectura>;
  }
  @Component({
    selector: 'app-plan-de-lectura',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './plan-de-lectura.component.html',
    styleUrls: ['./plan-de-lectura.component.css'],
    
  })
  export class PlanDeLecturaComponent {
    
    @ViewChild('paginator') paginator: any; // ViewChild para acceder al paginador desde el componente
    meses: Array<Mes> = [
      {
        nombre: 'ENERO',
        dias: [
          { day: 1, libro: 'Juan', versiculos: '1:1-18' },
          { day: 2, libro: 'Génesis', versiculos: '1-4' },
          { day: 3, libro: 'Génesis', versiculos: '5-8' },
          { day: 4, libro: 'Génesis', versiculos: '9-12' },
          { day: 5, libro: 'Salmos', versiculos: '1-3' },
          { day: 6, libro: 'Génesis', versiculos: '13-16' },
          { day: 7, libro: 'Génesis', versiculos: '17-19' },
          { day: 8, libro: 'Génesis', versiculos: '20-22' },
          { day: 9, libro: 'Job', versiculos: '1-3' },
          { day: 10, libro: 'Job', versiculos: '4-7' },
          { day: 11, libro: 'Job', versiculos: '8-11' },
          { day: 12, libro: 'Salmos', versiculos: '4-7' },
          { day: 13, libro: 'Job', versiculos: '12-14' },
          { day: 14, libro: 'Job', versiculos: '15-17' },
          { day: 15, libro: 'Job', versiculos: '18-21' },
          { day: 16, libro: 'Job', versiculos: '22-25' },
          { day: 17, libro: 'Job', versiculos: '26-31' },
          { day: 18, libro: 'Job', versiculos: '32-34' },
          { day: 19, libro: 'Salmos', versiculos: '8-11' },
          { day: 20, libro: 'Job', versiculos: '35-37' },
          { day: 21, libro: 'Job', versiculos: '38-42' },
          { day: 22, libro: 'Génesis', versiculos: '23-26' },
          { day: 23, libro: 'Génesis', versiculos: '27-30' },
          { day: 24, libro: 'Génesis', versiculos: '31-34' },
          { day: 25, libro: 'Génesis', versiculos: '35-38' },
          { day: 26, libro: 'Salmos', versiculos: '12-14' },
          { day: 27, libro: 'Génesis', versiculos: '39-42' },
          { day: 28, libro: 'Génesis', versiculos: '43-46' },
          { day: 29, libro: 'Génesis', versiculos: '47-50' },
          { day: 30, libro: 'Exodo', versiculos: '1-3' },
          { day: 31, libro: 'Exodo', versiculos: '4-6' },
          // ... otros días de enero
        ]
      }
      ,{
        nombre: 'FEBRERO',
        dias: [
          { day: 1, libro: 'Éxodo', versiculos: '7-9' },
          { day: 2, libro: 'Salmos', versiculos: '15-17' },
          { day: 3, libro: 'Éxodo', versiculos: '10-12' },
          { day: 4, libro: 'Éxodo', versiculos: '13-15' },
          { day: 5, libro: 'Éxodo', versiculos: '16-18' },
          { day: 6, libro: 'Éxodo', versiculos: '19-21' },
          { day: 7, libro: 'Éxodo', versiculos: '22-24' },
          { day: 8, libro: 'Éxodo', versiculos: '25-27' },
          { day: 9, libro: 'Salmos', versiculos: '18-20' },
          { day: 10, libro: 'Éxodo', versiculos: '28-30' },
          { day: 11, libro: 'Éxodo', versiculos: '31-33' },
          { day: 12, libro: 'Éxodo', versiculos: '34-37' },
          { day: 13, libro: 'Éxodo', versiculos: '38-40' },
          { day: 14, libro: 'Levítico', versiculos: '1-3' },
          { day: 15, libro: 'Levítico', versiculos: '4-6' },
          { day: 16, libro: 'Salmos', versiculos: '21-23' },
          { day: 17, libro: 'Levítico', versiculos: '7-9' },
          { day: 18, libro: 'Levítico', versiculos: '10-12' },
          { day: 19, libro: 'Levítico', versiculos: '13-15' },
          { day: 20, libro: 'Levítico', versiculos: '16-18' },
          { day: 21, libro: 'Levítico', versiculos: '19-21' },
          { day: 22, libro: 'Levítico', versiculos: '22-24' },
          { day: 23, libro: 'Salmos', versiculos: '24-26' },
          { day: 24, libro: 'Levítico', versiculos: '25-27' },
          { day: 25, libro: 'Números', versiculos: '1-3' },
          { day: 26, libro: 'Números', versiculos: '4-6' },
          { day: 27, libro: 'Números', versiculos: '7-9' },
          { day: 28, libro: 'Números', versiculos: '10-12' },
          // ... otros días de febrero
        ]
      },
      {
        nombre: 'MARZO',
        dias: [
          { day: 1, libro: 'Números', versiculos: '13-15' },
          { day: 2, libro: 'Salmos', versiculos: '27-29' },
          { day: 3, libro: 'Números', versiculos: '16-18' },
          { day: 4, libro: 'Números', versiculos: '19-21' },
          { day: 5, libro: 'Números', versiculos: '22-24' },
          { day: 6, libro: 'Números', versiculos: '25-27' },
          { day: 7, libro: 'Números', versiculos: '28-30' },
          { day: 8, libro: 'Números', versiculos: '31-33' },
          { day: 9, libro: 'Salmos', versiculos: '30-32' },
          { day: 10, libro: 'Números', versiculos: '34-36' },
          { day: 11, libro: 'Deuteronomio', versiculos: '1-3' },
          { day: 12, libro: 'Deuteronomio', versiculos: '4-6' },
          { day: 13, libro: 'Deuteronomio', versiculos: '7-9' },
          { day: 14, libro: 'Deuteronomio', versiculos: '10-12' },
          { day: 15, libro: 'Deuteronomio', versiculos: '13-15' },
          { day: 16, libro: 'Salmos', versiculos: '33-35' },
          { day: 17, libro: 'Deuteronomio', versiculos: '16-18' },
          { day: 18, libro: 'Deuteronomio', versiculos: '19-21' },
          { day: 19, libro: 'Deuteronomio', versiculos: '22-24' },
          { day: 20, libro: 'Deuteronomio', versiculos: '25-27' },
          { day: 21, libro: 'Deuteronomio', versiculos: '28-30' },
          { day: 22, libro: 'Deuteronomio', versiculos: '31-34' },
          { day: 23, libro: 'Salmos', versiculos: '36-38' },
          { day: 24, libro: 'Josué', versiculos: '1-3' },
          { day: 25, libro: 'Josué', versiculos: '4-6' },
          { day: 26, libro: 'Josué', versiculos: '7-9' },
          { day: 27, libro: 'Josué', versiculos: '10-12' },
          { day: 28, libro: 'Josué', versiculos: '13-15' },
          { day: 29, libro: 'Josué', versiculos: '16-18' },
          { day: 30, libro: 'Salmos', versiculos: '39-41' },
          { day: 31, libro: 'Josué', versiculos: '19-21' },
          // ... otros días de marzo
        ]
      },
      {
        nombre: 'ABRIL',
        dias: [
          { day: 1, libro: 'Josué', versiculos: '22-24' },
          { day: 2, libro: 'Jueces', versiculos: '1-3' },
          { day: 3, libro: 'Jueces', versiculos: '4-6' },
          { day: 4, libro: 'Jueces', versiculos: '7-9' },
          { day: 5, libro: 'Jueces', versiculos: '10-12' },
          { day: 6, libro: 'Salmos', versiculos: '42-44' },
          { day: 7, libro: 'Jueces', versiculos: '13-15' },
          { day: 8, libro: 'Jueces', versiculos: '16-18' },
          { day: 9, libro: 'Jueces', versiculos: '19-21' },
          { day: 10, libro: 'Rut', versiculos: '1-4' },
          { day: 11, libro: '1 Samuel', versiculos: '1-3' },
          { day: 12, libro: '1 Samuel', versiculos: '4-6' },
          { day: 13, libro: 'Salmos', versiculos: '45-47' },
          { day: 14, libro: '1 Samuel', versiculos: '7-9' },
          { day: 15, libro: '1 Samuel', versiculos: '10-13' },
          { day: 16, libro: '1 Samuel', versiculos: '14-16' },
          { day: 17, libro: '1 Samuel', versiculos: '17-19' },
          { day: 18, libro: '1 Samuel', versiculos: '20-22' },
          { day: 19, libro: '1 Samuel', versiculos: '23-25' },
          { day: 20, libro: 'Salmos', versiculos: '48-50' },
          { day: 21, libro: '1 Samuel', versiculos: '26-28' },
          { day: 22, libro: '1 Samuel', versiculos: '29-31' },
          { day: 23, libro: '2 Samuel', versiculos: '1-3' },
          { day: 24, libro: '2 Samuel', versiculos: '4-6' },
          { day: 25, libro: '2 Samuel', versiculos: '7-9' },
          { day: 26, libro: '2 Samuel', versiculos: '10-12' },
          { day: 27, libro: 'Salmos', versiculos: '51-53' },
          { day: 28, libro: '2 Samuel', versiculos: '13-15' },
          { day: 29, libro: '2 Samuel', versiculos: '16-18' },
          { day: 30, libro: '2 Samuel', versiculos: '19-21' },
          // ... otros días de abril
        ]
      },
      {
        nombre: 'MAYO',
        dias: [
          { day: 1, libro: '2 Samuel', versiculos: '22-24' },
          { day: 2, libro: '1 Reyes', versiculos: '1-4' },
          { day: 3, libro: 'Proverbios', versiculos: '1-3' },
          { day: 4, libro: 'Salmos', versiculos: '54-56' },
          { day: 5, libro: 'Proverbios', versiculos: '4-6' },
          { day: 6, libro: 'Proverbios', versiculos: '7-9' },
          { day: 7, libro: 'Proverbios', versiculos: '10-12' },
          { day: 8, libro: 'Proverbios', versiculos: '13-15' },
          { day: 9, libro: 'Proverbios', versiculos: '16-18' },
          { day: 10, libro: 'Proverbios', versiculos: '19-21' },
          { day: 11, libro: 'Salmos', versiculos: '57-59' },
          { day: 12, libro: 'Proverbios', versiculos: '22-24' },
          { day: 13, libro: 'Proverbios', versiculos: '25-27' },
          { day: 14, libro: 'Proverbios', versiculos: '28-31' },
          { day: 15, libro: 'Cantares', versiculos: '1-4' },
          { day: 16, libro: 'Cantares', versiculos: '5-8' },
          { day: 17, libro: '1 Reyes', versiculos: '5-7' },
          { day: 18, libro: 'Salmos', versiculos: '60-62' },
          { day: 19, libro: '1 Reyes', versiculos: '8-11' },
          { day: 20, libro: 'Eclesiastés', versiculos: '1-4' },
          { day: 21, libro: 'Eclesiastés', versiculos: '5-8' },
          { day: 22, libro: 'Eclesiastés', versiculos: '9-12' },
          { day: 23, libro: '1 Reyes', versiculos: '12-14' },
          { day: 24, libro: '1 Reyes', versiculos: '15-17' },
          { day: 25, libro: 'Salmos', versiculos: '63-65' },
          { day: 26, libro: '1 Reyes', versiculos: '18-20' },
          { day: 27, libro: '1 Reyes', versiculos: '21-22' },
          { day: 28, libro: '2 Reyes', versiculos: '1' },
          { day: 29, libro: '2 Reyes', versiculos: '2-4' },
          { day: 30, libro: '2 Reyes', versiculos: '5-7' },
          { day: 31, libro: '2 Reyes', versiculos: '8-10' },
          // ... otros días de mayo
        ]
      },
      {
        nombre: 'JUNIO',
        dias: [
          { day: 1, libro: 'Salmos', versiculos: '66-68' },
          { day: 2, libro: 'Jonás',versiculos: '1-4' },
          { day: 3, libro: 'Amós', versiculos: '1-3' },
          { day: 4, libro: 'Amós', versiculos: '4-6' },
          { day: 5, libro: 'Amós', versiculos: '7-9' },
          { day: 6, libro: '2 Reyes', versiculos: '15-17' },
          { day: 7, libro: '2 Reyes', versiculos: '18-21' },
          { day: 8, libro: 'Salmos', versiculos: '69-71' },
          { day: 9, libro: '2 Reyes', versiculos: '22-25' },
          { day: 10, libro: '1 Crónicas', versiculos: '1-3' },
          { day: 11, libro: '1 Crónicas', versiculos: '4-6' },
          { day: 12, libro: '1 Crónicas', versiculos: '7-9' },
          { day: 13, libro: '1 Crónicas', versiculos: '10-12' },
          { day: 14, libro: '1 Crónicas', versiculos: '13-16' },
          { day: 15, libro: 'Salmos', versiculos: '72-74' },
          { day: 16, libro: '1 Crónicas', versiculos: '17-19' },
          { day: 17, libro: '1 Crónicas', versiculos: '20-22' },
          { day: 18, libro: '1 Crónicas', versiculos: '23-25' },
          { day: 19, libro: '1 Crónicas', versiculos: '26-29' },
          { day: 20, libro: '2 Crónicas', versiculos: '1-3' },
          { day: 21, libro: '2 Crónicas', versiculos: '4-6' },
          { day: 22, libro: 'Salmos', versiculos: '75-77' },
          { day: 23, libro: '2 Crónicas', versiculos: '7-9' },
          { day: 24, libro: '2 Crónicas', versiculos: '10-12' },
          { day: 25, libro: '2 Crónicas', versiculos: '13-15' },
          { day: 26, libro: '2 Crónicas', versiculos: '16-18' },
          { day: 27, libro: '2 Crónicas', versiculos: '19-22' },
          { day: 28, libro: 'Joel, Abdías', versiculos: '1-3,1'  },
          { day: 29, libro: 'Salmos', versiculos: '78-80' },
          { day: 30, libro: '2 Crónicas', versiculos: '23-26' },
          // ... otros días de junio
        ]
      },                
      {
        nombre: 'JULIO',
        dias: [
          { day: 1, libro: 'Isaías', versiculos: '1-3' },
          { day: 2, libro: 'Isaías', versiculos: '4-6' },
          { day: 3, libro: '2 Crónicas', versiculos: '27-29' },
          { day: 4, libro: '2 Crónicas', versiculos: '30-32' },
          { day: 5, libro: 'Isaías', versiculos: '7-9' },
          { day: 6, libro: 'Salmos', versiculos: '81-83' },
          { day: 7, libro: 'Isaías', versiculos: '10-12' },
          { day: 8, libro: 'Isaías', versiculos: '13-15' },
          { day: 9, libro: 'Isaías', versiculos: '16-18' },
          { day: 10, libro: 'Isaías', versiculos: '19-21' },
          { day: 11, libro: 'Isaías', versiculos: '22-24' },
          { day: 12, libro: 'Isaías', versiculos: '25-27' },
          { day: 13, libro: 'Salmos', versiculos: '84-86' },
          { day: 14, libro: 'Isaías', versiculos: '28-30' },
          { day: 15, libro: 'Isaías', versiculos: '31-33' },
          { day: 16, libro: 'Isaías', versiculos: '34-36' },
          { day: 17, libro: 'Isaías', versiculos: '37-39' },
          { day: 18, libro: 'Isaías', versiculos: '40-42' },
          { day: 19, libro: 'Isaías', versiculos: '43-45' },
          { day: 20, libro: 'Salmos', versiculos: '87-90' },
          { day: 21, libro: 'Isaías', versiculos: '46-48' },
          { day: 22, libro: 'Isaías', versiculos: '49-51' },
          { day: 23, libro: 'Isaías', versiculos: '52-54' },
          { day: 24, libro: 'Isaías', versiculos: '55-57' },
          { day: 25, libro: 'Isaías', versiculos: '58-60' },
          { day: 26, libro: 'Isaías', versiculos: '61-63' },
          { day: 27, libro: 'Salmos', versiculos: '91-93' },
          { day: 28, libro: 'Isaías', versiculos: '64-66' },
          { day: 29, libro: 'Oseas', versiculos: '1-3' },
          { day: 30, libro: 'Oseas', versiculos: '4-6' },
          { day: 31, libro: 'Oseas', versiculos: '7-9' },
          // ... otros días de julio
        ]
      },
      {
        nombre: 'AGOSTO',
        dias: [
          { day: 1, libro: 'Oseas', versiculos: '10-12' },
          { day: 2, libro: 'Oseas', versiculos: '13-14' },
          { day: 2, libro: 'Miqueas', versiculos: '1' },
          { day: 3, libro: 'Salmos', versiculos: '94-96' },
          { day: 4, libro: 'Miqueas', versiculos: '2-4' },
          { day: 5, libro: 'Miqueas', versiculos: '5-7' },
          { day: 6, libro: 'Nahum', versiculos: '1-3' },
          { day: 7, libro: '2 Crónicas', versiculos: '33-34' },
          { day: 7, libro: 'Sofonías', versiculos: '1' },
          { day: 8, libro: 'Sofonías', versiculos: '2-3' },
          { day: 8, libro: '2 Crónicas', versiculos: '35' },
          { day: 9, libro: 'Habacuc', versiculos: '1-3' },
          { day: 10, libro: 'Salmos', versiculos: '97-99' },
          { day: 11, libro: 'Jeremías', versiculos: '1-3' },
          { day: 12, libro: 'Jeremías', versiculos: '4-6' },
          { day: 13, libro: 'Jeremías', versiculos: '11-12, 26' },
          { day: 14, libro: 'Jeremías', versiculos: '7-9' },
          { day: 15, libro: 'Jeremías', versiculos: '10, 14-15' },
          { day: 16, libro: 'Jeremías', versiculos: '16-18' },
          { day: 17, libro: 'Salmos', versiculos: '100-102' },
          { day: 18, libro: 'Jeremías', versiculos: '19, 20, 35' },
          { day: 19, libro: 'Jeremías', versiculos: '25, 36, 45' },
          { day: 20, libro: 'Jeremías', versiculos: '46-49' },
          { day: 21, libro: 'Jeremías', versiculos: '13, 22-23' },
          { day: 22, libro: 'Jeremías', versiculos: '24, 27-28' },
          { day: 23, libro: 'Jeremías', versiculos: '29, 50-51' },
          { day: 24, libro: 'Salmos', versiculos: '103-105' },
          { day: 25, libro: 'Jeremías', versiculos: '30-33' },
          { day: 26, libro: 'Jeremías', versiculos: '21, 34, 37' },
          { day: 27, libro: 'Jeremías', versiculos: '38-39, 52' },
          { day: 28, libro: 'Jeremías', versiculos: '40-42' },
          { day: 29, libro: 'Jeremías', versiculos: '43-44' },
          { day: 29, libro: 'Lamentaciones ', versiculos: '1' },
          { day: 30, libro: 'Lamentaciones ', versiculos: '2-5' },
          { day: 31, libro: 'Salmos  ', versiculos: '106-108' },
          // ... otros días de agosto
        ]
      },{nombre: 'SEPTIEMBRE',
      dias: [
        { day: 1, libro: '2 de Crónicas', versiculos: '36:1-8' },
        { day: 1, libro: 'Daniel', versiculos: '1-3' },
        { day: 2, libro: 'Daniel', versiculos: '4-6' },
        { day: 3, libro: 'Daniel', versiculos: '7-9' },
        { day: 4, libro: 'Daniel', versiculos: '10-12' },
        { day: 5, libro: '2 de Crónicas', versiculos: '36:9-21' },
        { day: 5, libro: 'Ezequiel', versiculos: '1-3' },
        { day: 6, libro: 'Ezequiel', versiculos: '4-6' },
        { day: 7, libro: 'Salmos', versiculos: '109-111' },
        { day: 8, libro: 'Ezequiel', versiculos: '7-9' },
        { day: 9, libro: 'Ezequiel', versiculos: '10-12' },
        { day: 10, libro: 'Ezequiel', versiculos: '13-16' },
        { day: 11, libro: 'Ezequiel', versiculos: '17-20' },
        { day: 12, libro: 'Ezequiel', versiculos: '21-24' },
        { day: 13, libro: 'Ezequiel', versiculos: '25-28' },
        { day: 14, libro: 'Salmos', versiculos: '112-114' },
        { day: 15, libro: 'Ezequiel', versiculos: '29-32' },
        { day: 16, libro: 'Ezequiel', versiculos: '33-36' },
        { day: 17, libro: 'Ezequiel', versiculos: '37-40' },
        { day: 18, libro: 'Ezequiel', versiculos: '41-44' },
        { day: 19, libro: 'Ezequiel', versiculos: '45-48' },
        { day: 20, libro: '2 de Crónicas', versiculos: '36:22-23' },
        { day: 20, libro: 'Esdras', versiculos: '1-3' },
        { day: 21, libro: 'Salmos', versiculos: '115-117' },
        { day: 22, libro: 'Esdras', versiculos: '4' },
        { day: 22, libro: 'Hageo', versiculos: '1-2' },
        { day: 23, libro: 'Zechariah', versiculos: '1-3' },
        { day: 24, libro: 'Zechariah', versiculos: '4-6' },
        { day: 25, libro: 'Zechariah', versiculos: '7-9' },
        { day: 26, libro: 'Zechariah', versiculos: '10-12' },
        { day: 27, libro: 'Zechariah', versiculos: '13-14' },
        { day: 28, libro: 'Salmos', versiculos: '118-119:16' },
        { day: 29, libro: 'Esdras', versiculos: '5-7' },
        { day: 30, libro: 'Esdras', versiculos: '8-10' },
        // ... otros días de septiembre
      ]
    },
    {nombre: 'OCTUBRE',
    dias: [
      { day: 1, libro: 'Ester', versiculos: '1-3' },
      { day: 2, libro: 'Ester', versiculos: '4-6' },
      { day: 3, libro: 'Ester', versiculos: '7-10' },
      { day: 4, libro: 'Nehemías', versiculos: '1-3' },
      { day: 5, libro: 'Salmos', versiculos: '119:17-72' },
      { day: 6, libro: 'Nehemías', versiculos: '4-6' },
      { day: 7, libro: 'Nehemías', versiculos: '7-9' },
      { day: 8, libro: 'Nehemías', versiculos: '10-13' },
      { day: 9, libro: 'Malaquías', versiculos: '' },
      { day: 10, libro: 'Mateo', versiculos: '1-3' },
      { day: 11, libro: 'Mateo', versiculos: '4-7' },
      { day: 12, libro: 'Salmos', versiculos: '119:73-120' },
      { day: 13, libro: 'Mateo', versiculos: '8-10' },
      { day: 14, libro: 'Mateo', versiculos: '11-13' },
      { day: 15, libro: 'Mateo', versiculos: '14-16' },
      { day: 16, libro: 'Mateo', versiculos: '17-19' },
      { day: 17, libro: 'Mateo', versiculos: '20-22' },
      { day: 18, libro: 'Mateo', versiculos: '23-25' },
      { day: 19, libro: 'Salmos', versiculos: '119:121-176' },
      { day: 20, libro: 'Mateo', versiculos: '26-28' },
      { day: 21, libro: 'Marcos', versiculos: '1-4' },
      { day: 22, libro: 'Marcos', versiculos: '5-8' },
      { day: 23, libro: 'Marcos', versiculos: '9-12' },
      { day: 24, libro: 'Marcos', versiculos: '13-16' },
      { day: 25, libro: 'Lucas', versiculos: '1-4' },
      { day: 26, libro: 'Salmos', versiculos: '120-122' },
      { day: 27, libro: 'Lucas', versiculos: '5-8' },
      { day: 28, libro: 'Lucas', versiculos: '9-12' },
      { day: 29, libro: 'Lucas', versiculos: '13-16' },
      { day: 30, libro: 'Lucas', versiculos: '17-20' },
      { day: 31, libro: 'Lucas', versiculos: '21-24' },
      // ... otros días de octubre
    ]
  },
  {nombre: 'NOVIEMBRE',
  dias: [
    { day: 1, libro: 'Juan', versiculos: '1-3' },
    { day: 2, libro: 'Salmos', versiculos: '123-125' },
    { day: 3, libro: 'Juan', versiculos: '4-6' },
    { day: 4, libro: 'Juan', versiculos: '7-9' },
    { day: 5, libro: 'Juan', versiculos: '10-12' },
    { day: 6, libro: 'Juan', versiculos: '13-15' },
    { day: 7, libro: 'Juan', versiculos: '16-18' },
    { day: 8, libro: 'Juan', versiculos: '19-21' },
    { day: 9, libro: 'Salmos', versiculos: '126-128' },
    { day: 10, libro: 'Hechos', versiculos: '1-4' },
    { day: 11, libro: 'Hechos', versiculos: '5:1-8:3' },
    { day: 12, libro: 'Hechos', versiculos: '8:4-11' },
    { day: 13, libro: 'Hechos', versiculos: '12-14' },
    { day: 14, libro: 'Santiago', versiculos: '' },
    { day: 15, libro: 'Gálatas', versiculos: '' },
    { day: 16, libro: 'Salmos', versiculos: '129-131' },
    { day: 17, libro: 'Hechos', versiculos: '15-16' },
    { day: 18, libro: 'Filipenses', versiculos: '' },
    { day: 19, libro: '1 Tesalonicenses', versiculos: '' },
    { day: 20, libro: 'Hechos', versiculos: '17-18:11' },
    { day: 20, libro: '2Tesalonicenses', versiculos: '' },
    { day: 21, libro: '1 Corintios', versiculos: '1-3' },
    { day: 22, libro: '1 Corintios', versiculos: '4-7' },
    { day: 23, libro: 'Salmos', versiculos: '132-134' },
    { day: 24, libro: '1 Corintios', versiculos: '8:1-11:1' },
    { day: 25, libro: '1 Corintios', versiculos: '11:2-14:40' },
    { day: 26, libro: '1 Corintios', versiculos: '15-16' },
    { day: 27, libro: '2 Corintios', versiculos: '1-5' },
    { day: 28, libro: '2 Corintios', versiculos: '6-9' },
    { day: 29, libro: '2 Corintios', versiculos: '10-13' },
    { day: 30, libro: 'Salmos', versiculos: '135-137' },
    // ... otros días de noviembre
  ]
  },{nombre: 'DICIEMBRE',
  dias: [
    { day: 1, libro: 'Hechos', versiculos: '18:12-19:41' },
    { day: 1, libro: 'Efesios', versiculos: '1-2' },
    { day: 2, libro: 'Efesios', versiculos: '3-6' },
    { day: 3, libro: 'Romanos', versiculos: '1-3' },
    { day: 4, libro: 'Romanos', versiculos: '4-6' },
    { day: 5, libro: 'Romanos', versiculos: '7-9' },
    { day: 6, libro: 'Romanos', versiculos: '10-12' },
    { day: 7, libro: 'Salmos', versiculos: '138-140' },
    { day: 8, libro: 'Romanos', versiculos: '13-16' },
    { day: 9, libro: 'Hechos', versiculos: '20-22' },
    { day: 10, libro: 'Hechos', versiculos: '23-25' },
    { day: 11, libro: 'Hechos', versiculos: '26-28' },
    { day: 12, libro: 'Colosenses', versiculos: '' },
    { day: 13, libro: 'Hebreos', versiculos: '1-4' },
    { day: 14, libro: 'Salmos', versiculos: '141-143' },
    { day: 15, libro: 'Hebreos', versiculos: '5-8' },
    { day: 16, libro: 'Hebreos', versiculos: '9-11' },
    { day: 17, libro: 'Hebreos', versiculos: '12-13' },
    { day: 17, libro: 'Tito', versiculos: '' },
    { day: 18, libro: '1 Timoteo', versiculos: '' },
    { day: 19, libro: '2 Timoteo', versiculos: '' },
    { day: 19, libro: 'Filemón', versiculos: '' },
    { day: 20, libro: '1 Pedro', versiculos: '' },
    { day: 21, libro: 'Salmos', versiculos: '144-146' },
    { day: 22, libro: '1 Juan', versiculos: '' },
    { day: 23, libro: '2 Pedro', versiculos: '' },
    { day: 23, libro: '2 Juan', versiculos: '' },
    { day: 23, libro: '3 Juan', versiculos: '' },
    { day: 23, libro: 'Judas', versiculos: '' },
    { day: 24, libro: 'Apocalipsis', versiculos: '1-4' },
    { day: 25, libro: 'Apocalipsis', versiculos: '5-7' },

    { day: 26, libro: 'Apocalipsis', versiculos: '8-11' },
    { day: 27, libro: 'Apocalipsis', versiculos: '12-13' },
    { day: 28, libro: 'Apocalipsis', versiculos: '147-150' },
    { day: 29, libro: 'Apocalipsis', versiculos: '14-16' },
    { day: 30, libro: 'Apocalipsis', versiculos: '17-19' },
    { day: 31, libro: 'Apocalipsis', versiculos: '20-22' },
    // ... otros días de diciembre
  ]
  }

          
      // ... otros meses
    ];
    mesActualIndex: number = 0; // Inicia en el primer mes
  JSON: any;
    tuServicioDeDialogo: any;

    cambiarMes(siguiente: boolean) {
      if (siguiente) {
        this.mesActualIndex = Math.min(this.mesActualIndex + 1, this.meses.length - 1);
      } else {
        this.mesActualIndex = Math.max(this.mesActualIndex - 1, 0);
      }
    }
    getLecturasDelDia(dias: Array<Lectura>, index: number): Array<Lectura> {
      const lecturasDelDia: Array<Lectura> = [];
      let currentDay = dias[index].day;
    
      while (index < dias.length && dias[index].day === currentDay) {
        lecturasDelDia.push(dias[index]);
        index++;
      }
    
      return lecturasDelDia;
    }
    constructor(public dialog: MatDialog) {}

  abrirDialogo(datosLectura: string): void {
    this.dialog.open(DialogComponent, {
      data: datosLectura,
    });

    
  }
  getInformacionCelda(mes: any, i: number, j: number): string {
   
    let informacion = `${mes.dias[i + j].day}\n`;
  
    for (let lectura of this.getLecturasDelDia(mes.dias, i + j)) {
      informacion += `${lectura.libro} ${lectura.versiculos}\n`;
    }
  
    return informacion;
  }
  }
