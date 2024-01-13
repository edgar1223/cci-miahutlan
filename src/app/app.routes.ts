import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarhordComponent } from './darhord/darhord.component';
import { ReynaValeraComponent } from './reyna-valera/reyna-valera.component';
import { PlanDeLecturaComponent } from './plan-de-lectura/plan-de-lectura.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

export const routes: Routes = [
    { path: 'inicio', component: DarhordComponent },
  { path: 'reyna-valera', component: ReynaValeraComponent },
  { path: 'plan-lectura', component: PlanDeLecturaComponent },
  { path: 'buscar', component: BusquedaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}