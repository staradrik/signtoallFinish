import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { RegistroEstudiante } from 'src/app/models/auth';

@Component({
  selector: 'app-ingreso-google',
  templateUrl: './ingreso-google.component.html',
  styleUrls: ['./ingreso-google.component.scss']
})
export class IngresoGoogleComponent {

  registroEstudiante: RegistroEstudiante = {
    id_estudiante: "",
    nombres: "",
    apellidos:"",
    correo:"",
    password:"",
    id_curso:"1"
  }

  cursos :any[]= [1,2,3,4,5];

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
      this.tipoDoc = [{name: 'T.I'}];
    }

    registrarEstudiante(){
      this.registroService.registroEstudiante(this.registroEstudiante).subscribe(
        res => {
          console.log(res);
        }, err =>{
          console.error(err);
        }
      );
    }
}

