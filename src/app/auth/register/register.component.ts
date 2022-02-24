import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceService } from '../servicios/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  

  selectedValue: string = 'val1';

  miFormulario: FormGroup = this.fb.group({
    nombre:     ['', [ Validators.required ]],
    apellido:     ['', [ Validators.required ]],
    numeroID:     [null, [ Validators.required ]],
    correo:    ['', [ Validators.required, Validators.email ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]],
    confirm_contraseña: ['', [Validators.required]]}
  );


  tipoDoc: [
    {
      name: string
    },
    {
      name: string
    }
  ] ;

  
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: ServiceService ) { 

                this.tipoDoc = [
                  {name: 'T.I'},
                  {name: 'C.C'}
              ];

              
              }
  
  ngOnInit(): void {
  }

}

