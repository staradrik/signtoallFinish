import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SopaNumerosComponent } from './sopa-numeros/sopa-numeros.component';

const routes: Routes = [
  {path:'sopNumeros', 
  component:SopaNumerosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloMatematicasRoutingModule { }
