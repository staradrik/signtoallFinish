import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from '../../../servicios/ruta-breadcrum.service';
import { ServicioService } from '../../../servicios/servicio.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-vista-actividades',
  templateUrl: './vista-actividades.component.html',
  styles: [
  ]
})
export class VistaActividadesComponent implements OnInit {

  constructor(private rutaS:RutaBreadcrumService, 
              private Estudiante: ServicioService) { }
              
  ruta:MenuItem[] = [];

  curso:number = 0;

  ngOnInit(): void {
    
    this.ruta = this.rutaS.obtener();
    /*if (this.Estudiante.obtenerCurso()==1){
      this.curso = true;
    }else{
      this.curso = false
    }*/
    this.curso = this.Estudiante.obtenerCurso();
    
  }

}
