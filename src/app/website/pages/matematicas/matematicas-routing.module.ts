import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { MemoramaMatComponent } from './memorama-mat/memorama-mat.component';
import { SopaNumerosComponent } from './sopa-numeros/sopa-numeros.component';
import { RompecabezasComponent } from './rompecabezas/rompecabezas.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { SlidingPuzzleComponent } from './sliding-puzzle/sliding-puzzle.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'sopNumeros',component: SopaNumerosComponent},
      {path: 'memoMate', component: MemoramaMatComponent},
      {path: 'rompeMate', component: RompecabezasComponent},
      {path: 'sudoku', component:SudokuComponent},
      {path: 'slidin', component: SlidingPuzzleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatematicasRoutingModule { }
