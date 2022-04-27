import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { RutaBreadcrumService } from '../../../services/ruta-breadcrum.service';
import { EstudianteService } from '../../../services/estudiante.service';
import { ObtenerActividadesService } from '../../../services/obtener-actividades.service';
import { Actividades } from 'src/app/models/Actividades';


@Component({
  selector: 'app-vista-actividades',
  templateUrl: './vista-actividades.component.html',
  styleUrls: ['./vista-actividades.component.scss']
})
export class VistaActividadesComponent implements OnInit {

  activity: Actividades[]=[];
  sortOptions: SelectItem[] =[];
  sortOrder: number = 0;
  sortField: string = "";
  curso:number = 0;

  val: number = 0;

  constructor(private Estudiante: EstudianteService,
      private breadcrumbService: RutaBreadcrumService,
      private primengConfig: PrimeNGConfig,
      private actividadesService: ObtenerActividadesService) {
    this.primengConfig.ripple = true;
    
  }

  ngOnInit(): void {

    this.curso = this.Estudiante.obtenerCurso();
    
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}
    ]);
    this.sortOptions = [
      {label: 'Reciente', value: '!rating'},
        {label: 'Antigua', value: 'rating'}
      ];
    
    this.actividadesService.getActivity().then(data => this.activity = data);
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
