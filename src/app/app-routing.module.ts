//Modulos Angular
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { InicioSesionComponent } from './website/pages/auth/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './website/pages/auth/registro/registro.component';

//Routing
const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: InicioSesionComponent},
  {path:'signup', component: RegistroComponent},
  {
    path:'actividades',
    loadChildren: () => import('./website/pages/website.module').then(m => m.WebsiteModule),        
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
