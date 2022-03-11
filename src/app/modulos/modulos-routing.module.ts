import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './components/español/ahorcado/ahorcado.component';
import { MemoramaComponent } from './components/español/memorama/memorama.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { MemoramaMatComponent } from './components/matematicas/memorama-mat/memorama-mat.component';

import { SopaNumerosComponent } from './components/matematicas/sopa-numeros/sopa-numeros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { VistaActividadesComponent } from './components/vista-actividades/vista-actividades.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'vistaAct',component: VistaActividadesComponent},    
      {path: 'sopNumeros',component: SopaNumerosComponent},
      {path: 'memoMate', component: MemoramaMatComponent},
      {path: 'memoLetras', component: MemoramaComponent},        
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'registro', component: RegistroComponent},
      {path: 'iniciarSesion', component: InicioSesionComponent},
      {path: '**',redirectTo: '/notfound'}     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulosRoutingModule { }
