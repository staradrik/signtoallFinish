import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { RompeLetrasComponent } from './rompe-letras/rompe-letras.component';
import { VocabularioComponent } from './vocabulario/vocabulario.component';
import { AbcDeslizanteComponent } from './abc-deslizante/abc-deslizante.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'memoLetras', component: MemoramaComponent},        
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'rompecabezas', component: RompeLetrasComponent},
      {path: 'vocabulario', component: VocabularioComponent},
      {path: 'abecedario', component: AbcDeslizanteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspañolRoutingModule { }
