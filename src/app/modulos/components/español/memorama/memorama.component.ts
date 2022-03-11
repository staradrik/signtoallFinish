import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/servicios/ruta-breadcrum.service';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styles: [
  ]
})
export class MemoramaComponent implements OnInit {

  constructor(private breadcrumbService: RutaBreadcrumService) {
    this.breadcrumbService.setItems([
      { label: "Inicio" },
      { label: 'Actividades',
      routerLink: ['']
      },
      { label: 'memorama' }
    ]);
   }

  ngOnInit(): void {
  }

}
