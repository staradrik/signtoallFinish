import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';

@Component({
  selector: 'app-abc-deslizante',
  templateUrl: './abc-deslizante.component.html',
  styleUrls: ['./abc-deslizante.component.scss']
})
export class AbcDeslizanteComponent implements OnInit {

  constructor(
    public boardGame: EspannolService,
    private breadcrumbService: RutaBreadcrumService
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Abecedario deslizante' }
    ]);
    this.boardGame.initGame();
  }

}
