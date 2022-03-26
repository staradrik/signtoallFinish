//Modulos Angular
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { VistaActividadesComponent } from './website/pages/vista-actividades/vista-actividades.component';

//Routing
const routes: Routes = [ 
  {path:'',
        children:[
          {path:'', component: VistaActividadesComponent},
          {path:'actividades', loadChildren: ()=> import('./website/pages/modulos.module').then(m => m.ModulosModule)}
        ]         
  },
  {path: '**', redirectTo: '/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
