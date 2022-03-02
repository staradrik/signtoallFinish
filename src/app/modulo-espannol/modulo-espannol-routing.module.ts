import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoramaComponent } from './memorama/memorama.component';

const routes: Routes = [
  {path:'memorama',
  component:MemoramaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloEspannolRoutingModule { }
