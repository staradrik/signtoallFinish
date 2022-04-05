import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { Registro } from 'src/app/models/auth';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styles: [
  ]
})
export class FormProfesorComponent {

  registro: Registro = {
    id_profesor: "",
    nombres: "",
    apellidos:"",
    correo:"",
    password:""
  }

  tipoDoc: [{name: string}];
  
  miFormulario: FormGroup = this.fb.group({
    nombre:     ['', [ Validators.required ]],
    apellido:     ['', [ Validators.required ]],
    numeroID:     [null, [ Validators.required ]],
    correo:    ['', [ Validators.required, Validators.email ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]],
    confirm_contraseña: ['', [Validators.required]]}
  );

  constructor(private router: Router,
    private fb: FormBuilder, private registroService: AuthService) { 
      this.tipoDoc = [{name: 'C.C'}];
    }

    registrarProfesor(){
      this.registroService.registro(this.registro).subscribe(
        res => {
          console.log(res);
        }, err =>{
          console.error(err);
        }
      );
    }

}
