import { AppComponent } from './app.component';


import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaActividadesComponent } from './modulos/components/vista-actividades/vista-actividades.component';


const routes: Routes = [ 
  {path:'',
        children:[
          {path:'', component: VistaActividadesComponent},
          {path:'actividades', loadChildren: ()=> import('./modulos/modulos.module').then(m => m.ModulosModule)}
        ]         
  },
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
