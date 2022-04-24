import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { InicioSesionProfesor } from 'src/app/models/auth';

@Component({
  selector: 'app-ingreso-profesor',
  templateUrl: './ingreso-profesor.component.html',
  styles: [
  ]
})
export class IngresoProfesorComponent {

  inicioSesionProfesor: InicioSesionProfesor = {
    id_profesor: "",
    password:""
  }
  
  miFormulario: FormGroup = this.fb.group({
    numeroID:     [null, [ Validators.required ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]]}
  );

  constructor(private router: Router,
    private fb: FormBuilder, private inicioSesionService: AuthService) { 
  }

  iniciarSesionProfesor(){
    
    this.inicioSesionService.inicioSesionProfesor(this.inicioSesionProfesor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/docente/crud'])
      }, err =>{
        console.error(err);
      }
    );
  }
}
