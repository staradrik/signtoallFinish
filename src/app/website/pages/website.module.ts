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
import { SobreNosotrosComponent } from './sobreNosotros/sobre-nosotros.component';
import { VistaActividadesComponent } from './vista-actividades/vista-actividades.component';

//Modulo routing
import { WebsiteRoutingModule } from './website-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    SobreNosotrosComponent,
    VistaActividadesComponent
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
    SelectButtonModule,
    QuicklinkModule
  ],
  exports:[
    VistaActividadesComponent
  ]
})
export class WebsiteModule { }
