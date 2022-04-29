import { Component} from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { RegistroEstudiante } from 'src/app/models/auth';
import { MessageService } from 'primeng/api';

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
    id_curso:""
  }

  cursos :any[]= [1,2,3,4,5];

  tipoDoc: [{name: string}];
  


  constructor(private router: Router, private registroService: AuthService, private messageService: MessageService) { 
      this.tipoDoc = [{name: 'T.I'}];
    }

    registrarEstudiante(){
      this.registroService.registroEstudiante(this.registroEstudiante).subscribe(
        res => {
          this.messageService.add({severity:'success', summary:'Registro exitoso', detail:'Puedes ingresar'});
          setTimeout( ()=> { this.router.navigate(['/login'])}, 4000);
          console.log(res);
        }, err =>{
          this.messageService.add({severity:'error', summary:'error', detail:'Por favor ingresa todos los datos'});
          console.error(err);
        }
      );
    }
}

