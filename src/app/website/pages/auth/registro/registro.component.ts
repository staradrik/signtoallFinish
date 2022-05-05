
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //opciones del selecItem [estudiante e profesor]
  types: SelectItem[] = [];
  typeName: string = "Estudiante";


  constructor(private router: Router) {}

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
