import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ObtenerActividadesService } from '../../../services/obtener-actividades.service';
import { ServicioService } from '../../../services/servicio.service';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styles: [
  ]
})
export class PanelMenuComponent implements OnInit {

  constructor(private listaActividades:ObtenerActividadesService, 
              private Estudiante:ServicioService) { }

  items: MenuItem[] = [];
  
  ngOnInit(): void {
    this.items = this.listaActividades.obtener(this.Estudiante.obtenerCurso());
  }

}
