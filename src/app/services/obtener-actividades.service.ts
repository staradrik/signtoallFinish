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
          label: 'Sobre Nosotros',
          routerLink: ['actividades/sobreNosotros']
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
          label: 'Memorama',
          routerLink: ['actividades/memoLetras']
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
          label: 'Ahorcado',
          routerLink: ['actividades/ahorcado']
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
          label: 'Sobre Nosotros',
          routerLink: ['actividades/sobreNosotros']
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
          label: 'Sopa de numeros',
          routerLink: ['actividades/sopNumeros']
        },
        {
          label: 'Relacion de numeros'
        },
        {
          label: 'Memorama',
          routerLink: ['actividades/memoMate']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['actividades/rompeMate']
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
    if (curso<3){
      return this.actEspannol
    }else{
      return this.actMatematicas
    }
  }
}
