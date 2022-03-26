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
import { AhorcadoComponent } from './components/español/ahorcado/ahorcado.component';
import { ContenedorActividadesComponent } from './components/contenedor-actividades/contenedor-actividades.component';
import { ContenedorMatematicasComponent } from './components/contenedor-matematicas/contenedor-matematicas.component';
import { FormProfesorComponent } from './components/registro/form-profesor/form-profesor.component';
import { IngresoEstudianteComponent } from './components/inicio-sesion/ingreso-estudiante/ingreso-estudiante.component';
import { IngresoGoogleComponent } from './components/registro/ingreso-google/ingreso-google.component';
import { IngresoProfesorComponent } from './components/inicio-sesion/ingreso-profesor/ingreso-profesor.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { MemoramaComponent } from './components/español/memorama/memorama.component';
import { MemoramaMatComponent } from './components/matematicas/memorama-mat/memorama-mat.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RompecabezasComponent } from './components/matematicas/rompecabezas/rompecabezas.component';
import { RompeLetrasComponent } from './components/español/rompe-letras/rompe-letras.component';
import { SobreNosotrosComponent } from './components/sobreNosotros/sobreNosotros.component';
import { SopLetrasComponent } from './components/español/sop-letras/sop-letras.component';
import { SopaNumerosComponent } from './components/matematicas/sopa-numeros/sopa-numeros.component';
import { VistaActividadesComponent } from './components/vista-actividades/vista-actividades.component';
import { VocabularioComponent } from './components/español/vocabulario/vocabulario.component';

//Modulo routing
import { ModulosRoutingModule } from './modulos-routing.module';

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
