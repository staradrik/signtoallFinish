//Modulos
import {AccordionModule} from 'primeng/accordion'; 
import { AppRoutingModule } from './app-routing.module';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {PanelModule} from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
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
import { BreadcrumbComponent } from './modulos/components/breadcrumb/breadcrumb.component';
import { PanelMenuComponent } from './modulos/components/panel-menu/panel-menu.component';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    BreadcrumbComponent,
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
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
