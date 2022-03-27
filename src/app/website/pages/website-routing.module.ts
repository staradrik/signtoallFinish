
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './español/ahorcado/ahorcado.component';
import { MemoramaComponent } from './español/memorama/memorama.component';
import { MemoramaMatComponent } from './matematicas/memorama-mat/memorama-mat.component';
import { SopaNumerosComponent } from './matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { SobreNosotrosComponent } from './sobreNosotros/sobreNosotros.component';
import { RompecabezasComponent } from './matematicas/rompecabezas/rompecabezas.component';
import { LayoutComponent } from '../components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '',component: VistaActividadesComponent},    
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

