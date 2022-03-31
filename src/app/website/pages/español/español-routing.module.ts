import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { RompeLetrasComponent } from './rompe-letras/rompe-letras.component';
import { SopLetrasComponent } from './sop-letras/sop-letras.component';
import { VocabularioComponent } from './vocabulario/vocabulario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'memoLetras', component: MemoramaComponent},        
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'rompecabezas', component: RompeLetrasComponent},
      {path: 'sopLetras', component: SopLetrasComponent},
      {path: 'vocavulario', component: VocabularioComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspañolRoutingModule { }
