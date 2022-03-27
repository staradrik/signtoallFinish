import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { MemoramaMatComponent } from './memorama-mat/memorama-mat.component';
import { SopaNumerosComponent } from './sopa-numeros/sopa-numeros.component';
import { RompecabezasComponent } from './rompecabezas/rompecabezas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sopNumeros',component: SopaNumerosComponent},
      {path: 'memoMate', component: MemoramaMatComponent},
      {path: 'rompeMate', component: RompecabezasComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatematicasRoutingModule { }