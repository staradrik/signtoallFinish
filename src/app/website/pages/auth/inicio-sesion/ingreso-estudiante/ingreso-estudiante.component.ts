import { Component} from '@angular/core';
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
export class IngresoEstudianteComponent {

  inicioSesionEstudiante: InicioSesionEstudiante = {
    id_estudiante: "",
    password:""
  }
  

  cursos :any[]= [ 1,2,3,4,5];
  selectCu1 : CursoElegido [] = []
  selectCu : any
  selectedCurso: any;

  constructor(private router: Router, private inicioSesionService: AuthService,
              private messageService: MessageService) {}
 

  isPosition(value:  CursoElegido) {
    this.selectCu = value
  }


  iniciarSesionEstudiante(){
    this.inicioSesionService.inicioSesionEstudiante(this.inicioSesionEstudiante).subscribe(
      res => {
         localStorage.setItem("token_estudiante", res.token)
        localStorage.setItem('idCurso', this.selectCu)
        this.messageService.add({severity:'success', summary:'Ingreso exitoso', detail:'Juega'});
        setTimeout( ()=> { this.router.navigate(['/actividades'])}, 4000); 
        console.log(res);
      }, err =>{
        console.error(err);
      }
    );
  }

}
