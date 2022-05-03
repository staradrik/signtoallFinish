import {AuthService} from "../../../../../services/auth.service"
import {Component} from '@angular/core';
import {CursoElegido } from 'src/app/models/Actividades';
import {InicioSesionEstudiante } from 'src/app/models/auth';
import {MessageService} from 'primeng/api';
import {Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-estudiante',
  templateUrl: './ingreso-estudiante.component.html',
  styleUrls: ['./ingreso-estudiante.component.scss']
})
export class IngresoEstudianteComponent {

  inicioSesionEstudiante: InicioSesionEstudiante = {
    id_curso: "",
    password:""
  }
  
  cursos :any[]= [ 1,2,3,4,5];
  selectCu1 : CursoElegido [] = [];
  selectCu : any;

  constructor(private router: Router, private inicioSesionService: AuthService,
              private messageService: MessageService) {}

  isPosition(value:  CursoElegido) {
    this.selectCu = value
  }

  iniciarSesionEstudiante(){

    let variableCurso: any = this.inicioSesionEstudiante.id_curso;
    this.inicioSesionService.inicioSesionEstudiante(this.inicioSesionEstudiante).subscribe(
      res => {
        localStorage.setItem("token_estudiante", res.token)
        localStorage.setItem('idCurso', variableCurso)
        this.messageService.add({severity:'success', summary:'Ingreso exitoso', detail:'Juega'});
        setTimeout( ()=> { this.router.navigate(['/actividades'])}, 4000); 
      }, err =>{
        this.messageService.add({severity:'error', summary:'Error en ingreso', detail:'Algo anda mal'});
      }
    );
  }

}
