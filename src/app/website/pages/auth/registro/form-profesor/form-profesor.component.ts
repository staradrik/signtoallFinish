import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from "../../../../../services/auth.service"
import { RegistroProfesor } from 'src/app/models/auth';
import { MessageService } from 'primeng/api';

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

  tipoDoc: [{name: string}];
  


  constructor(private router: Router, private registroService: AuthService, private messageService: MessageService) { 
              this.tipoDoc = [{name: 'C.C'}];}

    registrarProfesor(){
      this.registroService.registroProfesor(this.registroProfesor).subscribe(
        res => {
          this.messageService.add({severity:'success', summary:'Registro exitoso', detail:'Puedes ingresar'});
          setTimeout( ()=> { this.router.navigate(['/login'])}, 4000);
          console.log(res);
        }, err =>{
          console.error(err);
        }
      );
    }

}
