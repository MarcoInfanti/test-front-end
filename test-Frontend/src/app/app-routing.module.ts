import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasasComponent } from './casas/casas.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { ListaProfesoresComponent } from './lista-profesores/lista-profesores.component';


const routes: Routes = [

  {path:'houses', component: CasasComponent},
  {path:'students', component: ListaEstudiantesComponent},
  {path:'teachers', component: ListaProfesoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CasasComponent, ListaEstudiantesComponent, ListaProfesoresComponent]
