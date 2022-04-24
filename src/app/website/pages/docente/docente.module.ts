import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { CrudDocenteComponent } from './crud-docente/crud-docente.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuicklinkModule } from 'ngx-quicklink';
import {ToolbarModule} from 'primeng/toolbar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


import {DialogModule} from 'primeng/dialog';
import { PanelDocenteComponent } from './panel-docente/panel-docente.component';

@NgModule({
  declarations: [
    CrudDocenteComponent,
    PanelDocenteComponent
    
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    PanelMenuModule,
    RatingModule,
    DialogModule,
    ReactiveFormsModule,
    RippleModule,
    TableModule,
    TagModule,
    ToastModule,
    InputNumberModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    QuicklinkModule,
    ToolbarModule,
    ConfirmDialogModule
  ]
})
export class DocenteModule { }
