import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/interfaces/product';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-contenedor-matematicas',
  templateUrl: './contenedor-matematicas.component.html',
  styles: [
  ]
})
export class ContenedorMatematicasComponent implements OnInit {


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

  IrMemoLet(){
    this.router.navigate(['/actividades/memoLetras']);
  }
}
