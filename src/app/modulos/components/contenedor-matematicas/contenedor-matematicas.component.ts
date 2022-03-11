import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Actividades } from 'src/app/interfaces/Actividades';
import { MatematicasService } from 'src/app/servicios/matematicas.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-contenedor-matematicas',
  templateUrl: './contenedor-matematicas.component.html',
  styleUrls: ['./contenedor-actividades.component.css']
})
export class ContenedorMatematicasComponent implements OnInit {


  activity: Actividades[]=[];

  sortOptions: SelectItem[] =[];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(private primengConfig: PrimeNGConfig,
              private router: Router,
              private matematicasServices: MatematicasService) { }

  ngOnInit() {
      this.matematicasServices.getActivity().then(data => this.activity = data);
      this.sortOptions = [
        {label: 'Reciente', value: '!rating'},
        {label: 'Antigua', value: 'rating'}
    ];

    this.primengConfig.ripple = true;
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

  IrSopNum(){
    this.router.navigate(['/actividades/sopNumeros']);
  }

  IrMemoLet(){
    this.router.navigate(['/actividades/memoLetras']);
  }
 }
