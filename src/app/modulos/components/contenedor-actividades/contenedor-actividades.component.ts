import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ServicioService } from '../../../servicios/servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contenedor-actividades',
  templateUrl: './contenedor-actividades.component.html',
  styles: [
  ]
})
export class ContenedorActividadesComponent implements OnInit {

  products: Product[]=[];

  sortOptions: SelectItem[] =[];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(private productService: ServicioService, 
              private primengConfig: PrimeNGConfig,
              private router: Router) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

      this.sortOptions = [
          {label: 'Reciente', value: '!price'},
          {label: 'Antigua', value: 'price'}
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

}
