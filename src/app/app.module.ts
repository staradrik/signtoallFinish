//Modulos Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Primeng
import { AccordionModule } from 'primeng/accordion'; 
import { BreadcrumbModule } from "primeng/breadcrumb";
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

//Componentes
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './website/components/breadcrumb/breadcrumb.component';
import { PanelMenuComponent } from './website/components/panel-menu/panel-menu.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { FormProfesorComponent } from './website/pages/auth/registro/form-profesor/form-profesor.component';
import { IngresoEstudianteComponent } from './website/pages/auth/inicio-sesion/ingreso-estudiante/ingreso-estudiante.component';
import { IngresoGoogleComponent } from './website/pages/auth/registro/ingreso-google/ingreso-google.component';
import { IngresoProfesorComponent } from './website/pages/auth/inicio-sesion/ingreso-profesor/ingreso-profesor.component';
import { InicioSesionComponent } from './website/pages/auth/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './website/pages/auth/registro/registro.component';
import { LayoutComponent } from './website/components/layout/layout.component';

//services
import {AuthService} from "./services/auth.service";

//Routing
import { AppRoutingModule } from './app-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    LayoutComponent,
    FormProfesorComponent,
    IngresoEstudianteComponent,
    IngresoGoogleComponent,
    IngresoProfesorComponent,
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BreadcrumbModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CascadeSelectModule,
    CheckboxModule,
    DataViewModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    HttpClientModule ,
    InputTextModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule,
    QuicklinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgbModule,
  ],
  
  providers: [MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
