import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicacionesComponent } from './indicaciones/indicaciones.component';
@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    IndicacionesComponent
  ],
  exports: [
    IndicacionesComponent
  ]
})
export class sharedModule { }