import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { InicioSesionEstudiante } from 'src/app/models/auth';
import {MessageService} from 'primeng/api';
import { CursoElegido } from 'src/app/models/Actividades';
@Component({
  selector: 'app-ingreso-estudiante',
  templateUrl: './ingreso-estudiante.component.html',
  styleUrls: ['./ingreso-estudiante.component.scss']
})
export class IngresoEstudianteComponent  implements OnInit{

  inicioSesionEstudiante: InicioSesionEstudiante = {
    id_estudiante: "",
    password:""
  }
  
 

  miFormulario: FormGroup = this.fb.group({
    numeroID:     [null, [ Validators.required ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]]}
  );
  cursos :any[]= [ 1,2,3,4,5];
  selectCu1 : CursoElegido [] = []
  selectCu : any
  selectedCurso: any;

  constructor(private router: Router,
    private fb: FormBuilder, private inicioSesionService: AuthService,
    private messageService: MessageService) { 
  }
  ngOnInit(): void {
    console.log("sf")
  }

  isPosition(value:  CursoElegido) {
  //  this.selectedCurso = value.id_curso;
    this.selectCu = value
    console.log(value) 
    console.log(this.selectCu ) 
  // localStorage.setItem('idCurso', this.selectCu)
    
  }


  iniciarSesionEstudiante(){

  

    

    
    this.inicioSesionService.inicioSesionEstudiante(this.inicioSesionEstudiante).subscribe(
      res => {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Ingreso exitoso'});
        localStorage.setItem("token_estudiante", res.token)
        localStorage.setItem('idCurso', this.selectCu)
        this.router.navigate(['/actividades'])
        
        console.log(res);
      }, err =>{
        console.error(err);
      }
    );
  }

}
