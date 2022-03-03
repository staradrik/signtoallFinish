import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RutaBreadcrumService } from 'src/app/servicios/ruta-breadcrum.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(private rutaS:RutaBreadcrumService, private Estudiante: ServicioService) { }
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
