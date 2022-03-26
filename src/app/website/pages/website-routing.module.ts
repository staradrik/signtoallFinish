
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './contenedor-español/ahorcado/ahorcado.component';
import { MemoramaComponent } from './contenedor-español/memorama/memorama.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { MemoramaMatComponent } from './contenedor-matematicas/memorama-mat/memorama-mat.component';
import { SopaNumerosComponent } from './contenedor-matematicas/sopa-numeros/sopa-numeros.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { SobreNosotrosComponent } from './sobreNosotros/sobreNosotros.component';
import { RompecabezasComponent } from './contenedor-matematicas/rompecabezas/rompecabezas.component';
import { LayoutComponent } from '../components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'vistaAct', pathMatch: 'full'},
      {path: 'vistaAct',component: VistaActividadesComponent},    
      {path: 'sopNumeros',component: SopaNumerosComponent},
      {path: 'memoMate', component: MemoramaMatComponent},
      {path: 'rompeMate', component: RompecabezasComponent},
      {path: 'memoLetras', component: MemoramaComponent},        
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'sobreNosotros', component: SobreNosotrosComponent},   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

