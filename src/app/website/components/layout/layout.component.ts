import { AuthService } from '../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ObtenerActividadesService } from 'src/app/services/obtener-actividades.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    `.home{
    margin-top: -60px;
    margin-right: -60px;
    margin-left: -60px;
    }
    #content {
        position: relative;
    }
    #content img {
        position: absolute;
        top: -29px;
        right: -29px;
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

}
