
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //opciones del selecItem [estudiante e profesor]
  types: SelectItem[] = [];
  typeName: string = "";

  selectedValue: string = 'val1';

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
 
              }

  ngOnInit(): void {
    //Opciones del select item
    this.types = [
      {label: "Estudiante", value: "Estudiante", icon: "pi pi-palette" },
      {label: "Profesor", value: "Profesor", icon: "pi pi-book" },
    ];
  }

  //Eleccion de alguna opcion para formulario
  changeType(event: any){
    this.typeName = event.option.value
  }

  iraLogin(){
    this.router.navigate(['/login']);
  }

}
