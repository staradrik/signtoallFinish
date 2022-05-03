import {AuthService} from "../../../../../services/auth.service"
import { Component} from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegistroEstudiante } from 'src/app/models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-google',
  templateUrl: './ingreso-google.component.html',
  styleUrls: ['./ingreso-google.component.scss']
})
export class IngresoGoogleComponent {

  registroEstudiante: RegistroEstudiante = {
    nombres: "",
    apellidos:"",
    password:"",
    id_curso:""
  }

  cursos :any[]= [1,2,3,4,5];

  constructor(private router: Router, private registroService: AuthService, 
              private messageService: MessageService) { }

    registrarEstudiante(){
      this.registroService.registroEstudiante(this.registroEstudiante).subscribe(
        res => {
          this.messageService.add({severity:'success', summary:'Registro exitoso', detail:'Puedes ingresar'});
          setTimeout( ()=> { this.router.navigate(['/login'])}, 4000);
        }, err =>{
          this.messageService.add({severity:'error', summary:'error', detail:'Por favor ingresa todos los datos'});
        }
      );
    }
}

