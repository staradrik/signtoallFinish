import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from './services/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = 'sign';
 curso:number = 0;
 constructor(private router: Router, 
              private Estudiante: ServicioService) { }

 IrActividad(){
  this.router.navigate(['/actividades/vistaAct']);
  }

ngOnInit(): void {
  
  this.curso = this.Estudiante.obtenerCurso();
}
}
