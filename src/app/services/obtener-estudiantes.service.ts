import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ObtenerEstudiantesService {

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
      label: 'Cursos', 
      icon: 'pi pi-search',
      items: [
        {
          label: 'Primero',      
        },
        {
          label: 'Segundo'
        },
        {
          label: 'Tercero'
        },
        {
          label: 'Cuarto'
        },
        {
          label: 'Quinto'        }
      ]
    }
  ];
}
