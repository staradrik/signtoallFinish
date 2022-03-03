import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';
import { ObtenerActividadesService } from 'src/app/servicios/obtener-actividades.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {
  
  constructor(private listaActividades:ObtenerActividadesService, private Estudiante:ServicioService) { }
  items: MenuItem[] = [];
  ngOnInit(): void {
    this.items = this.listaActividades.obtener(this.Estudiante.obtenerCurso());
  }

}
