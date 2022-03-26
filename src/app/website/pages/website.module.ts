//Modulos Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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

//Componentes
import { AhorcadoComponent } from './contenedor-español/ahorcado/ahorcado.component';
import { ContenedorActividadesComponent } from './contenedor-español/contenedor-actividades.component';
import { ContenedorMatematicasComponent } from './contenedor-matematicas/contenedor-matematicas.component';
import { FormProfesorComponent } from './auth/registro/form-profesor/form-profesor.component';
import { IngresoEstudianteComponent } from './auth/inicio-sesion/ingreso-estudiante/ingreso-estudiante.component';
import { IngresoGoogleComponent } from './auth/registro/ingreso-google/ingreso-google.component';
import { IngresoProfesorComponent } from './auth/inicio-sesion/ingreso-profesor/ingreso-profesor.component';
import { InicioSesionComponent } from './auth/inicio-sesion/inicio-sesion.component';
import { MemoramaComponent } from './contenedor-español/memorama/memorama.component';
import { MemoramaMatComponent } from './contenedor-matematicas/memorama-mat/memorama-mat.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { RompecabezasComponent } from './contenedor-matematicas/rompecabezas/rompecabezas.component';
import { RompeLetrasComponent } from './contenedor-español/rompe-letras/rompe-letras.component';
import { SobreNosotrosComponent } from './sobreNosotros/sobreNosotros.component';
import { SopLetrasComponent } from './contenedor-español/sop-letras/sop-letras.component';
import { SopaNumerosComponent } from './contenedor-matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';
import { VocabularioComponent } from './contenedor-español/vocabulario/vocabulario.component';

//Modulo routing
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [
    AhorcadoComponent,
    ContenedorActividadesComponent,
    ContenedorMatematicasComponent,
    FormProfesorComponent,
    IngresoEstudianteComponent,
    IngresoGoogleComponent,
    IngresoProfesorComponent,
    InicioSesionComponent,
    MemoramaComponent,
    MemoramaMatComponent,
    RegistroComponent,
    RompecabezasComponent,
    RompeLetrasComponent,
    SobreNosotrosComponent,
    SopLetrasComponent,
    SopaNumerosComponent,
    VistaActividadesComponent,
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
    WebsiteRoutingModule,
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
export class WebsiteModule { }
