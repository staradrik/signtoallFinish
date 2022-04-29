import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from './services/estudiante.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = 'sign';
 curso:number = 0;
 constructor(private router: Router, 
              private Estudiante: EstudianteService, private authService: AuthService) { }

 IrActividad(){
  this.router.navigate(['/actividades/vistaAct']);
  }

ngOnInit(): void {
  
  this.curso = this.Estudiante.obtenerCurso();
}
}
