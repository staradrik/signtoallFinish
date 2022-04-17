import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDocenteComponent } from './crud-docente/crud-docente.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'crud',component: CrudDocenteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
