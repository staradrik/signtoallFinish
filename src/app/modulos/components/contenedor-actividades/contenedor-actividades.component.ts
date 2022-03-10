import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ServicioService } from '../../../servicios/servicio.service';
import { Router } from '@angular/router';
import { EspannolService } from 'src/app/servicios/espannol.service';
import { Actividades } from 'src/app/interfaces/Actividades';


@Component({
  selector: 'app-contenedor-actividades',
  templateUrl: './contenedor-actividades.component.html',
  styles: [
  ]
})
export class ContenedorActividadesComponent implements OnInit {


  activity: Actividades[]=[];

  sortOptions: SelectItem[] =[];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(private primengConfig: PrimeNGConfig,
              private router: Router,
              private EspannolServices: EspannolService) { }

  ngOnInit() {
      //this.productService.getProducts().then(data => this.products = data);
      this.EspannolServices.getActivity().then(data => this.activity = data);

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
