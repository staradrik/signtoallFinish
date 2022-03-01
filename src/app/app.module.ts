//Modulos
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import { ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToastModule} from 'primeng/toast';

//Servicios
import { ServicioService } from './servicios/servicio.service';
//Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ModuloMatematicasComponent } from './modulo-matematicas/modulo-matematicas.component';
import { ModuloEspannolComponent } from './modulo-espannol/modulo-espannol.component';











@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ModuloMatematicasComponent,
    ModuloEspannolComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    CascadeSelectModule,
    CheckboxModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    HttpClientModule ,
    InputTextModule,
    PanelModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    ReactiveFormsModule,
    SelectButtonModule,
    ToastModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
