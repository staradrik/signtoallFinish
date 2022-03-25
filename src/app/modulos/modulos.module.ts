
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
import {TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import {ToastModule} from 'primeng/toast';
import {InputNumberModule} from 'primeng/inputnumber';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SelectButtonModule} from 'primeng/selectbutton';

import { ModulosRoutingModule } from './modulos-routing.module';

import { SopaNumerosComponent } from './components/matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './components/vista-actividades/vista-actividades.component';
import { ContenedorActividadesComponent } from './components/contenedor-actividades/contenedor-actividades.component';
import { MemoramaComponent } from './components/español/memorama/memorama.component';
import { ContenedorMatematicasComponent } from './components/contenedor-matematicas/contenedor-matematicas.component';
import { AhorcadoComponent } from './components/español/ahorcado/ahorcado.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { FormProfesorComponent } from './components/registro/form-profesor/form-profesor.component';
import { IngresoGoogleComponent } from './components/registro/ingreso-google/ingreso-google.component';
import { IngresoEstudianteComponent } from './components/inicio-sesion/ingreso-estudiante/ingreso-estudiante.component';
import { IngresoProfesorComponent } from './components/inicio-sesion/ingreso-profesor/ingreso-profesor.component';
import { MemoramaMatComponent } from './components/matematicas/memorama-mat/memorama-mat.component';
import { SobreNosotrosComponent } from './components/sobreNosotros/sobreNosotros.component';
import { RompecabezasComponent } from './components/matematicas/rompecabezas/rompecabezas.component';
import { SopLetrasComponent } from './components/español/sop-letras/sop-letras.component';
import { RompeLetrasComponent } from './components/español/rompe-letras/rompe-letras.component';
import { VocabularioComponent } from './components/español/vocabulario/vocabulario.component';

@NgModule({
  declarations: [
    VistaActividadesComponent,
    SopaNumerosComponent,
    ContenedorActividadesComponent,
    MemoramaComponent,
    ContenedorMatematicasComponent,
    AhorcadoComponent,
    RegistroComponent,
    InicioSesionComponent,
    FormProfesorComponent,
    IngresoGoogleComponent,
    IngresoEstudianteComponent,
    IngresoProfesorComponent,
    MemoramaMatComponent,
    SobreNosotrosComponent,
    RompecabezasComponent,
    SopLetrasComponent,
    RompeLetrasComponent,
    VocabularioComponent
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
    TableModule,
    TagModule,
    ToastModule,
    InputNumberModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule 
  ],
  exports:[
    VistaActividadesComponent
  ]
})
export class ModulosModule { }
