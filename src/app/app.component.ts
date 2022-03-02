import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sign';
  ruta: MenuItem[] = [] //ruta para el breadcrumb
  ngOnInit(): void {
    this.ruta = [ //ruta para el breadcrumb
      {label:'Inicio'},
      {label:'Actividades'}
    ];
  }
}
