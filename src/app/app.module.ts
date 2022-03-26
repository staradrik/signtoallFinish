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

//Componentes
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './website/components/breadcrumb/breadcrumb.component';
import { PanelMenuComponent } from './website/components/panel-menu/panel-menu.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { MessageService } from 'primeng/api';

//Routing
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './website/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelMenuComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    LayoutComponent,
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
