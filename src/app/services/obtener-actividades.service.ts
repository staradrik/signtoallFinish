import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Actividades } from '../models/Actividades';
import { EstudianteService } from './estudiante.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerActividadesService {

  //español
  actEspannol: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-fw pi-home', 
      items: [
        {
          label: 'Sobre Nosotros',
          routerLink: ['sobreNosotros']
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
          routerLink: ['Español/memoLetras']
        },
        {
          label: 'Abecedario',
          routerLink: ['Español/abecedario']
        },
        {
          label: 'Vocabulario',
          routerLink: ['Español/vocabulario']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['Español/rompecabezas']
        },
        {
          label: 'Ahorcado',
          routerLink: ['Español/ahorcado']
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
          routerLink: ['sobreNosotros']
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
          label: 'Snake',
          routerLink: ['Matematicas/snake']
        },
        {
          label: 'Memorama',
          routerLink: ['Matematicas/memoMate']
        },
        {
          label: 'Rompecabezas',
          routerLink: ['Matematicas/rompeMate']
        },
        {
          label: 'Sudoku',
          routerLink: ['Matematicas/sudoku']
        },
        {
          label: 'Rompecabezas deslizantes',
          routerLink: ['Matematicas/slidin']
        },
      ]
    }
  ];
  cursoS: any = (localStorage.getItem("idCurso"));
  curso:  number = parseInt(this.cursoS)
  cursoList: 'ActEspannol' | 'ActMatematicas' = 'ActEspannol';

  constructor(private http: HttpClient,
    private Estudiante:EstudianteService) {
   // this.curso = this.Estudiante.obtenerCurso();
   }

  getActivity(){
    if (this.curso >2){
      this.cursoList = 'ActMatematicas';
    }else if(this.curso <= 2){
      this.cursoList = 'ActEspannol';
    }
    return this.http.get<any>(`assets/${this.cursoList}.json`)
    .toPromise().then(res => <Actividades[]>res.data)
    .then(data => {return data;});
  }

  

  getPanelMenu():any{
    if (this.curso < 3){
      return this.actEspannol
    }else{
      return this.actMatematicas
    }
  }
}
