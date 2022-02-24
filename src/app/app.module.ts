//Modulos
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import {SelectButtonModule} from 'primeng/selectbutton';

//Componentes
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    CascadeSelectModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    RadioButtonModule,
    ReactiveFormsModule,
    SelectButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
