import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso-profesor',
  templateUrl: './ingreso-profesor.component.html',
  styles: [
  ]
})
export class IngresoProfesorComponent implements OnInit {


  
  miFormulario: FormGroup = this.fb.group({
    numeroID:     [null, [ Validators.required ]],
    contraseña: ['', [ Validators.required, Validators.minLength(6) ]]}
  );

  constructor(private router: Router,
    private fb: FormBuilder) { 
    }

  ngOnInit(): void {
  }

}
