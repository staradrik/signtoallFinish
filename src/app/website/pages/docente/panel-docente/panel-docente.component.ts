import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DocenteServiceService } from '../docente-service.service';

@Component({
  selector: 'app-panel-docente',
  templateUrl: './panel-docente.component.html',
  styleUrls: ['./panel-docente.component.css']
})
export class PanelDocenteComponent implements OnInit {

  items: MenuItem[] = [];
  constructor(private docente:DocenteServiceService) { }

  ngOnInit(): void {
    this.items = this.docente.getPanelMenu();
  }

}
