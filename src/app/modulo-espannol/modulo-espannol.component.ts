import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from '../interfaces/product';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-modulo-espannol',
  templateUrl: './modulo-espannol.component.html',
  styles: [
  ]
})
export class ModuloEspannolComponent implements OnInit {

  products: Product[]=[];

  sortOptions: SelectItem[] =[];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(private productService: ServicioService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
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

}
