import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos Angular
import { FormsModule } from '@angular/forms';

//Primeng
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';

//components
import { MemoramaMatComponent } from './memorama-mat/memorama-mat.component';
import { RompecabezasComponent } from './rompecabezas/rompecabezas.component';
import { SopaNumerosComponent } from './sopa-numeros/sopa-numeros.component';

//routing
import { MatematicasRoutingModule } from './matematicas-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { BoardComponent } from './sliding-puzzle/board/board.component';
import { StateComponent } from './sliding-puzzle/state/state.component';
import { TileComponent } from './sliding-puzzle/tile/tile.component';
import { SlidingPuzzleComponent } from './sliding-puzzle/sliding-puzzle.component';



@NgModule({
  declarations: [
    MemoramaMatComponent,
    RompecabezasComponent,
    SopaNumerosComponent,
    BoardComponent,
    StateComponent,
    TileComponent,
    SlidingPuzzleComponent,
    
  ],
  imports: [
    CommonModule,
    MatematicasRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CommonModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PanelMenuModule,
    RatingModule,
    RippleModule,
    TableModule,
    TagModule,
    ToastModule,
    InputNumberModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    QuicklinkModule
  ]
})
export class MatematicasModule { }
