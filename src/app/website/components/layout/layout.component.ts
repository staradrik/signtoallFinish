import { Component, OnInit } from '@angular/core';
import { ObtenerActividadesService } from 'src/app/services/obtener-actividades.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    `.home{
    margin-top: -60px;
    margin-right: -60px;
    margin-left: -60px;
    }`
  ]
})
export class LayoutComponent implements OnInit {

  esPro: string = "";

  constructor(public authService:AuthService, private actividadesService: ObtenerActividadesService) { }
  
  ngOnInit(): void {
    this.esPro = this.actividadesService.esProfe;
  }

  logout(){}

}
