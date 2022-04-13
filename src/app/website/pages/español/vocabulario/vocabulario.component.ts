import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';

@Component({
  selector: 'app-vocabulario',
  templateUrl: './vocabulario.component.html',
  styleUrls: ['./vocabulario.component.scss']
})
export class VocabularioComponent implements OnInit {

  constructor(
    public boardGame: EspannolService,
    private breadcrumbService: RutaBreadcrumService
  ) { }

  ngOnInit() {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Abecedario' }
    ]);
    this.boardGame.initGame();
  }
}
