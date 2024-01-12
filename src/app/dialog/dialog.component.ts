import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Lectura } from '../plan-de-lectura/plan-de-lectura.component';  // Asegúrate de importar tu interfaz Lectura desde la ubicación correcta
import { CommonModule } from '@angular/common';  // Asegúrate de importar CommonModule
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
let capitulo: number;
let endCapitulo: number;
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'

})


export class DialogComponent {
  informacion: string;
  result: any[] = [];

  libros: string[] = [
    'Génesis', 'Éxodo', 'Levítico', 'Números', 'Deuteronomio', 'Josué', 'Jueces', 'Rut',
    '1 Samuel', '2 Samuel', '1 Reyes', '2 Reyes', '1 Crónicas', '2 Crónicas', 'Esdras',
    'Nehemías', 'Ester', 'Job', 'Salmos', 'Proverbios', 'Eclesiastés', 'Cantares',
    'Isaías', 'Jeremías', 'Lamentaciones', 'Ezequiel', 'Daniel', 'Oseas', 'Joel', 'Amós',
    'Abdías', 'Jonás', 'Miqueas', 'Nahúm', 'Habacuc', 'Sofonías', 'Hageo', 'Zacarías', 'Malaquías',
    // Nuevo Testamento
    'Mateo', 'Marcos', 'Lucas', 'Juan', 'Hechos', 'Romanos', '1 Corintios', '2 Corintios',
    'Gálatas', 'Efesios', 'Filipenses', 'Colosenses', '1 Tesalonicenses', '2 Tesalonicenses',
    '1 Timoteo', '2 Timoteo', 'Tito', 'Filemón', 'Hebreos', 'Santiago', '1 Pedro', '2 Pedro',
    '1 Juan', '2 Juan', '3 Juan', 'Judas', 'Apocalipsis'
  ];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient) {
    console.log('Información recibida:', data);
    this.informacion = data;
    this.consulta();
    const isNewLine = this.informacion.includes('\n');

    // Si hay un salto de línea, utiliza la segunda línea, de lo contrario, utiliza toda la cadena
    const libroTexto = isNewLine ? this.informacion.split('\n')[1] : this.informacion;

    // Extrae el nombre del libro
    const [libro] = libroTexto.split(' ');
  }
  consulta(): void {
    if (this.informacion.includes(':')) {
      // Intenta detectar un salto de línea
      const isNewLine = this.informacion.includes('\n');

      // Si hay un salto de línea, utiliza la segunda línea, de lo contrario, utiliza toda la cadena
      const libroTexto = isNewLine ? this.informacion.split('\n')[1] : this.informacion;

      // Extrae el nombre del libro
      const [libro] = libroTexto.split(' ');

      // Obtener el índice del libro
      const bookId = this.libros.indexOf(libro) + 1;

      // Separar capítulo y versículos
      const [_, capituloVersiculos] = this.informacion.split(' '); // Cambiado de capituloVersiculos a _
      const [capitulo, versiculos] = capituloVersiculos.split(':');
      const [startVerse, endVerse] = versiculos.split('-').map(Number);

      // Hacer la consulta a la API
      const apiUrl = `http://54.91.135.162:8080/biblia/books/${bookId}/${capitulo}/${startVerse}/${endVerse}`;

      this.httpClient.get(apiUrl).subscribe(
        (response: any) => {
          // Maneja la respuesta de la API aquí
          console.log(response);
          this.result = response;  // Asigna la respuesta al array result
        },
        (error) => {
          console.error('Error al hacer la consulta a la API:', error);
        }
      );
    }
    else if (this.informacion.includes('-')) {
      const isNewLine = this.informacion.includes('\n');

      let libro: string;
      let capituloRango: string;

      if (isNewLine) {
        const [, segundaLinea] = this.informacion.split('\n');
        const primerElementoSegundaLinea = segundaLinea.trim().split(' ')[0];

        // Verifica si el primer elemento de la segunda línea es un número
        if (!isNaN(Number(primerElementoSegundaLinea))) {
          // Si es un número, considera solo la primera palabra como el libro
          libro = segundaLinea.split(' ', 2)[0].trim() + ' ' + segundaLinea.split(' ', 2)[1].trim();
          capituloRango = this.informacion.split('\n')[0];
        } else {
          // Si no es un número, considera solo la primera palabra como el libro
          libro = segundaLinea.split(' ', 2)[0].trim();
          capituloRango = this.informacion.split('\n')[0];
        }
      } else {
        // Si no hay un salto de línea, utiliza la cadena completa
        libro = this.informacion.split(' ')[1];
        capituloRango = this.informacion.split(' ')[0];
      }

      console.log(libro);

      // Obtener el índice del libro
      const bookId = this.libros.indexOf(libro) + 1;

      // Separar capítulo y rango de capítulos
      const [, libroPart, capituloRangoPart] = this.informacion.match(/(\d+\s*[^\d]+)(\d+-\d+)/) || [null, null, null];

      // Verificar si se encontró un rango de capítulos y toma el valor antes del guion
      libro = libroPart ? libroPart.trim() : this.informacion.trim();
      const [, capituloPart, endCapituloPart] = capituloRangoPart ? capituloRangoPart.match(/(\d+)-(\d+)/) || [null, null, null] : [null, null, null];
      capitulo = capituloPart ? parseInt(capituloPart, 10) : 0;
      endCapitulo = endCapituloPart ? parseInt(endCapituloPart, 10) : 0;

      console.log(libro, capitulo, endCapitulo);

      console.log(capitulo + " " + endCapitulo);

      // Verificar si los valores son números antes de realizar la solicitud
      if (!isNaN(Number(capitulo)) && !isNaN(Number(endCapitulo))) {
        // Hacer la consulta a la API para un rango de capítulos
        const apiUrl = `http://54.91.135.162:8080/biblia/books/rango/${bookId}/${capitulo}/${endCapitulo}`;

        this.httpClient.get(apiUrl).subscribe(
          (response: any) => {
            // Maneja la respuesta de la API aquí
            console.log(response);
            this.result = response;  // Asigna la respuesta al array result
          },
          (error) => {
            console.error('Error al hacer la consulta a la API:', error);
          }
        );
      } else {
        console.error('Los valores de capitulo y/o endCapitulo no son números válidos.');
      }
    } else {
      console.log('La información no contiene ":" ni "-".');
      const isNewLine = this.informacion.includes('\n');
      let bander:boolean = true;
      let libro: string;
      let capituloRango: string;

      if (isNewLine) {
        const [, segundaLinea] = this.informacion.split('\n');
        const primerElementoSegundaLinea = segundaLinea.trim().split(' ')[0];

        // Verifica si el primer elemento de la segunda línea es un número
        if (!isNaN(Number(primerElementoSegundaLinea))) {
          // Si es un número, considera solo la primera palabra como el libro
          libro = segundaLinea.split(' ', 2)[0].trim() + ' ' + segundaLinea.split(' ', 2)[1].trim();
          capituloRango = this.informacion.split('\n')[0];
        } else {
          // Si no es un número, considera solo la primera palabra como el libro
          libro = segundaLinea.split(' ', 2)[0].trim();
          capituloRango = this.informacion.split('\n')[0];
        }
      } else {
        // Si no hay un salto de línea, utiliza la cadena completa
        libro = this.informacion.split(' ')[1];
        capituloRango = this.informacion.split(' ')[0];
      }

      console.log(libro);

      // Obtener el índice del libro
      const bookId = this.libros.indexOf(libro) + 1;

      const libroRegExp = new RegExp(`${libro}(\\D*\\d+)(?:\\D*(\\d+))?`);
      const match = this.informacion.match(libroRegExp);
      
      if (match) {
        // La expresión regular coincidió
      
        // Obtener el número de capítulo
        const [, capituloPart, endCapituloPart] = match;
      
        // Eliminar la parte coincidente de la cadena original
        this.informacion = this.informacion.replace(match[0], '');
      
        capitulo = capituloPart ? parseInt(capituloPart, 10) : 0;
        endCapitulo = endCapituloPart ? parseInt(endCapituloPart, 10) : capitulo;
      } else {
        // Si no se encontró un número para capitulo y endCapitulo, pero hay un libro
        // Realizar una consulta a otra API con el nombre del libro
        bander=false;
        const otraApiLibroUrl = `http://54.91.135.162:8080/biblia/book/${bookId}`;
        this.httpClient.get(otraApiLibroUrl).subscribe(
          (response: any) => {
            // Maneja la respuesta de la otra API aquí
            console.log(response);
            this.result = response; 
            // Asigna los valores adecuados a las variables según la respuesta
          },
          (error) => {
            console.error('Error al hacer la consulta a la otra API con el nombre del libro:', error);
          }
        );
      }
      console.log(libro, capitulo, endCapitulo);

      // Verificar si los valores son números antes de realizar la solicitud
      // Verificar si los valores son números antes de realizar la solicitud
      if (!isNaN(Number(capitulo)) && !isNaN(Number(endCapitulo))&& bander !=false) {
        // Hacer la consulta a la API para un rango de capítulos
        const apiUrl = `http://54.91.135.162:8080/biblia/books/rango/${bookId}/${capitulo}/${endCapitulo}`;

        this.httpClient.get(apiUrl).subscribe(
          (response: any) => {
            // Maneja la respuesta de la API aquí
            console.log(response);
            this.result = response;  // Asigna la respuesta al array result
          },
          (error) => {
            console.error('Error al hacer la consulta a la API:', error);
          }
        );
      } 

    }
  }
}
