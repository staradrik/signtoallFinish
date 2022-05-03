import {AuthService} from "../../../../../services/auth.service"
import { Component } from '@angular/core';
import { InicioSesionProfesor } from 'src/app/models/auth';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-profesor',
  templateUrl: './ingreso-profesor.component.html',
  styleUrls: ['./ingreso-profesor.component.scss']
})
export class IngresoProfesorComponent {

  inicioSesionProfesor: InicioSesionProfesor = {
    id_profesor: "",
    password:""
  }
  
  esProfesor: string = "1";

  constructor(private router: Router,private messageService: MessageService,
              private inicioSesionService: AuthService) { 
  }

  iniciarSesionProfesor(){ 
    this.inicioSesionService.inicioSesionProfesor(this.inicioSesionProfesor).subscribe(
      res => {
        localStorage.setItem("token_profesor", res.token);
        localStorage.setItem("es_profesor", this.esProfesor);
        this.messageService.add({severity:'success', summary:'Ingreso exitoso', detail:'Bienvenid@'});
        setTimeout( ()=> { this.router.navigate(['/docente/crud'])}, 4000);
      }, err =>{
        this.messageService.add({severity:'error', summary:'Error en ingreso', detail:'Algo anda mal'});
      }
    );
  }
}
