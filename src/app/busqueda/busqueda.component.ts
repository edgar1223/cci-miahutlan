import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
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
  frase: string = '';
  resultados: any[] = [];
  selectedLibro: string = '';
  constructor(private http: HttpClient) { }
  resultadosPorPagina = 10;
  paginaActual = 1;
  buscarLibro() {
    if (this.frase.trim() !== '') {
      this.http.get(`https://biblia-production.up.railway.app/biblia/book/buscar/${this.frase}`).subscribe(
        (data: any) => {
        
          const inicio = (this.paginaActual - 1) * this.resultadosPorPagina;
          const fin = inicio + this.resultadosPorPagina;
          this.resultados = data
          this.resultados = this.resultados.slice(inicio, fin);
          //alert( this.resultados);
        },
        (error) => {
          console.error('Error al buscar:', error);
        }
      );
    } else {
      this.resultados = [];
    }
  }
  cambiarPagina(nuevaPagina: number) {
    this.paginaActual = nuevaPagina;
    // Lógica para obtener los resultados de la nueva página, por ejemplo, ajustando el índice de inicio y fin.
    this.buscarLibro();
  }
}
