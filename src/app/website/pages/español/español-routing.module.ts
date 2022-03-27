import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MemoramaComponent } from './memorama/memorama.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'memoLetras', component: MemoramaComponent},        
      {path: 'ahorcado', component: AhorcadoComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspañolRoutingModule { }
