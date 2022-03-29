import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styles: [
  ]
})
export class FormProfesorComponent {

  tipoDoc: [{name: string}];
  
  miFormulario: FormGroup = this.fb.group({
    nombre:     ['', [ Validators.required ]],
    apellido:     ['', [ Validators.required ]],
    numeroID:     [null, [ Validators.required ]],
    correo:    ['', [ Validators.required, Validators.email ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]],
    confirm_contraseña: ['', [Validators.required]]}
  );

  constructor(private router: Router,
    private fb: FormBuilder) { 
      this.tipoDoc = [{name: 'C.C'}];
    }

}
