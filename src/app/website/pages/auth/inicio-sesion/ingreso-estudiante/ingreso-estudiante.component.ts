import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { InicioSesionEstudiante } from 'src/app/models/auth';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-ingreso-estudiante',
  templateUrl: './ingreso-estudiante.component.html',
  styles: [
  ]
})
export class IngresoEstudianteComponent {

  inicioSesionEstudiante: InicioSesionEstudiante = {
    id_estudiante: "",
    password:""
  }
  
  miFormulario: FormGroup = this.fb.group({
    numeroID:     [null, [ Validators.required ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]]}
  );

  constructor(private router: Router,
    private fb: FormBuilder, private inicioSesionService: AuthService,
    private messageService: MessageService) { 
  }

  iniciarSesionEstudiante(){
    this.inicioSesionService.inicioSesionEstudiante(this.inicioSesionEstudiante).subscribe(
      res => {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        console.log(res);
      }, err =>{
        console.error(err);
      }
    );
  }

}
