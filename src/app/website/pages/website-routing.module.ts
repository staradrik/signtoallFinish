
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { SobreNosotrosComponent } from './sobreNosotros/sobre-nosotros.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { LogoutComponent } from '../components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '',component: VistaActividadesComponent},    
      {
        path:'Español',
        loadChildren: () => import('./español/español.module').then(m => m.EspañolModule),        
      },
      {
        path:'Matematicas',
        loadChildren: () => import('./matematicas/matematicas.module').then(m => m.MatematicasModule),        
      },     
      {path: 'sobreNosotros', component: SobreNosotrosComponent},   
      {path: 'logout', component: LogoutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }

