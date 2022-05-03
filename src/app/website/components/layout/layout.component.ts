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
    }
    .colegio{
    margin-top: -110px;
    margin-bottom: -95px;
    margin-right: -40px;
    }
    img{
      box-shadow: 0px 0px 10.5px transparent;
      background-color: #e7e5e5;
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
