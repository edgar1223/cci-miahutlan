import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-reyna-valera',
  standalone: true,
  imports: [MatAutocompleteModule,MatFormFieldModule,MatInputModule,ReactiveFormsModule, FormsModule, CommonModule, MatExpansionModule, MatCardModule, MatButtonModule],
  templateUrl: './reyna-valera.component.html',
  styleUrl: './reyna-valera.component.css'
})
export class ReynaValeraComponent  implements OnInit {
  myControl = new FormControl();
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
  filteredLibros: Observable<string[]> | undefined;
  selectedLibro: string = '';
  versiculos: number[] = [];
  selectedVersiculo: number = 1;
  versiculosData: any[] = [];
  
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
  }
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const filtroSinAcentos = this.quitarAcentos(inputValue.toLowerCase());
    this.filteredLibros = this.myControl.valueChanges.pipe(
      startWith(inputValue),
      map(value => {
        const filterValue = this.quitarAcentos(value.toLowerCase());
        return this._filter(filterValue, filtroSinAcentos);
      })
    );
  }
 
  private _filter(value: string, filtroSinAcentos: string): string[] {
    return this.libros.filter(libro => this.quitarAcentos(libro.toLowerCase()).includes(filtroSinAcentos));
  }
  displayFn(libro: string): string {
    return libro ? libro : '';
  }
  obtenerVersiculos(libro: string) {
    const bookId = this.libros.indexOf(libro) + 1;
    this.httpClient.get<number>(`https://biblia-production.up.railway.app/biblia/numchapter/${bookId}`).subscribe(
      (cantidadCapitulos) => {
        this.versiculos = Array.from({ length: cantidadCapitulos }, (_, i) => i + 1);
        this.obtenerCapitulo(bookId, this.selectedVersiculo);
      },
      (error) => {
        console.error('Error al obtener la cantidad de capítulos:', error);
      }
    );
  }
   quitarAcentos(cadena: string): string {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  obtenerCapitulo(bookId: number, chapter: number) {
    this.httpClient.get<any[]>(`https://biblia-production.up.railway.app/biblia/capitulo/${bookId}/${chapter}`).subscribe(
      (data) => {
        this.versiculosData = data;
      },
      (error) => {
        console.error('Error al obtener versículos:', error);
      }
    );
  }

  buscarCapitulo() {
    const bookId = this.libros.indexOf(this.selectedLibro) + 1;
    this.obtenerCapitulo(bookId, this.selectedVersiculo);
  }
 
}
