import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ObtenerActividadesService {

  constructor() { }
  //español
  actEspannol: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home', 
      items: [
        {
          label: 'Bienvenida'
        },
        {
          label: 'Salir'
        }
      ]
    },
    {
      label: 'Actividades', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Memorama'
        },
        {
          label: 'Sopa de letras'
        },
        {
          label: 'Vocabulario'
        },
        {
          label: 'Rompecabezas'
        },
        {
          label: 'Ahorcado'
        }
      ]
    }
  ];
  //matematicas
  actMatematicas: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home', 
      items: [
        {
          label: 'Bienvenida'
        },
        {
          label: 'Salir'
        }
      ]
    },
    {
      label: 'Actividades', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Sopa de numeros'
        },
        {
          label: 'Relacion de numeros'
        },
        {
          label: 'Memorama'
        },
        {
          label: 'Rompecabezas'
        },
        {
          label: 'Sumas y restas'
        },
        {
          label: 'Multiplicacion y división'
        },
      ]
    }
  ];
  obtener(curso:number):any{
    if (curso==1){
      return this.actEspannol
    }else{
      return this.actMatematicas
    }
  }
}
