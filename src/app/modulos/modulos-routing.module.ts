import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SopaNumerosComponent } from './components/matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './components/vista-actividades/vista-actividades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vistaAct',component: VistaActividadesComponent
      },
      {
        path: 'sopNumeros',component: SopaNumerosComponent
         
      },      
      {
        path: '**',
        redirectTo: '/notfound'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
