import {Component} from '@angular/core';
//import { ProductService } from './productservice';
import { Product } from '../interfaces/product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-modulo-matematicas',
  templateUrl: './modulo-matematicas.component.html',
  styleUrls: [] 
})
export class ModuloMatematicasComponent {

  products: Product[]=[];

  sortOptions: SelectItem[] =[];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(private productService: ServicioService, private primengConfig: PrimeNGConfig) { }

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
}
