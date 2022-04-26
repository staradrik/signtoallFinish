import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDocenteComponent } from './crud-docente/crud-docente.component';

import { AuthProfesorGuard } from '../../../guard/authProfesor.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'crud',component: CrudDocenteComponent, canActivate:[AuthProfesorGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
