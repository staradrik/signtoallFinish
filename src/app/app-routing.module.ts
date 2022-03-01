import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MemoramaComponent } from './modulo-espannol/memorama/memorama.component';
import { ModuloEspannolComponent } from './modulo-espannol/modulo-espannol.component';
import { ModuloMatematicasComponent } from './modulo-matematicas/modulo-matematicas.component';
import { SopaNumerosComponent } from './modulo-matematicas/sopa-numeros/sopa-numeros.component';

const routes: Routes = [ 
  {path:'',
    children: [
      {path:'login', component:LoginComponent},
      {path:'registro', component:RegisterComponent},
      {path:'modEspannol',component:ModuloEspannolComponent,
        children:[ 
        {path:'memorama', component:MemoramaComponent} ]
      },
      {path:'modMatematicas',
      component:ModuloMatematicasComponent,
        children:[
        {path:'sopNumeros', component:SopaNumerosComponent} ]
      },
      { path: '**', redirectTo: '/notfound' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
