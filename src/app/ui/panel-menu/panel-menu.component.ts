import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {PanelMenuModule} from 'primeng/panelmenu';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrls: ['./panel-menu.component.css']
})
export class PanelMenuComponent implements OnInit {

  items: MenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.items = [
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
          },
          {
            label: 'Otros'
          },
        ]
      }
    ];
  }

}
