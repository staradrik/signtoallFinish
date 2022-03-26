import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from '../../../services/ruta-breadcrum.service';
import { ServicioService } from '../../../services/servicio.service';


@Component({
  selector: 'app-vista-actividades',
  templateUrl: './vista-actividades.component.html',
  styles: [
  ]
})
export class VistaActividadesComponent implements OnInit {

  constructor(private Estudiante: ServicioService,
    private breadcrumbService: RutaBreadcrumService) {
     this.breadcrumbService.setItems([
        { label: 'Actividades'}
      ]);
    }
  curso:number = 0;
  ngOnInit(): void {
    this.curso = this.Estudiante.obtenerCurso();
  }
}