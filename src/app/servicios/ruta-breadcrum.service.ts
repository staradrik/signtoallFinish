import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class RutaBreadcrumService {
  title = 'sign';
  ruta: MenuItem[] = [
    {label:'Inicio'},
    {label:'Actividades'}
  ] //ruta para el breadcrumb

  obtener():any{
    return this.ruta;
  }
}
