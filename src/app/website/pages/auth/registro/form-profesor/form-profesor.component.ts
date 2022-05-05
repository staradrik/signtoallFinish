import {AuthService} from "../../../../../services/auth.service"
import { Component} from '@angular/core';
import { MessageService } from 'primeng/api';
import { RegistroProfesor } from 'src/app/models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrls: ['./form-profesor.component.scss']
})
export class FormProfesorComponent {

  registroProfesor: RegistroProfesor = {
    id_profesor: "",
    nombres: "",
    apellidos:"",
    correo:"",
    password:""
  }

  
  constructor(private router: Router, private registroService: AuthService, private messageService: MessageService) { }

    registrarProfesor(){
      this.registroService.registroProfesor(this.registroProfesor).subscribe(
        res => {
          this.messageService.add({severity:'success', summary:'Registro exitoso', detail:'Puedes ingresar'});
          setTimeout( ()=> { this.router.navigate(['/login'])}, 4000);       
        }, err =>{
          this.messageService.add({severity:'error', summary:'Registro fallido', detail:'Completa los datos'});
        }
      );
    }

}
