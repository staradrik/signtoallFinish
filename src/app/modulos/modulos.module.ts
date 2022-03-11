import { NgModule } from '@angular/core';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { CommonModule } from '@angular/common';
import {DataViewModule} from 'primeng/dataview';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';
import {RatingModule} from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';

import { ModulosRoutingModule } from './modulos-routing.module';

import { SopaNumerosComponent } from './components/matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './components/vista-actividades/vista-actividades.component';
import { ContenedorActividadesComponent } from './components/contenedor-actividades/contenedor-actividades.component';
import { MemoramaComponent } from './components/español/memorama/memorama.component';
import { ContenedorMatematicasComponent } from './components/contenedor-matematicas/contenedor-matematicas.component';
import { AhorcadoComponent } from './components/español/ahorcado/ahorcado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    VistaActividadesComponent,
    SopaNumerosComponent,
    ContenedorActividadesComponent,
    MemoramaComponent,
    ContenedorMatematicasComponent,
    AhorcadoComponent,
    RegistroComponent,
    InicioSesionComponent
  ],
  imports: [
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CommonModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ModulosRoutingModule,
    PanelMenuModule,
    RatingModule,
    ReactiveFormsModule,
    RippleModule,
    TagModule,
    InputNumberModule,
    PasswordModule,
    RadioButtonModule 
  ],
  exports:[
    VistaActividadesComponent
  ]
})
export class ModulosModule { }
