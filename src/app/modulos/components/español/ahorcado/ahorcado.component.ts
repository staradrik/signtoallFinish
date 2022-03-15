import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from 'src/app/servicios/ruta-breadcrum.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  palabra:string = 'AGUACATE';
  palabraOculta:string = '';
  intentos:number = 0;
  gano:boolean = false;
  perdio:boolean = false;
  letra:string = "";

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
           'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
           'V', 'W', 'X', 'Y', 'Z'];

  constructor(private breadcrumbService: RutaBreadcrumService) {
    this.breadcrumbService.setItems([
      { label: "Inicio" },
      { label: 'Actividades',
      routerLink: ['']
      },
      { label: 'ahorcado' }
    ]);
   }

  ngOnInit(): void {
    this.palabraOculta = '___ '.repeat(this.palabra.length);
  }

  existeLetra( letra:string ) {
    if ((!(this.palabra.indexOf( letra ) >= 0))) {
      this.intentos++;
    }
  }

  verificaGanar() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if ( palabraEvaluar === this.palabra ) {
      this.gano = true;
    }
    if ( this.intentos >= 9 ){
      this.perdio = true;
    }
  }

  comprobar( letra:string ) {
    this.existeLetra(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if ( this.palabra[i] === letra ) {
        palabraOcultaArr[i] = letra;
      }
      this.palabraOculta = palabraOcultaArr.join(' ');
      this.verificaGanar();
    }
  }

}
