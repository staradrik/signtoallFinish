import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  video: string = "https://www.youtube.com/embed/qPrpgEptzS0";
  indicaciones: string[]= ["Ver el vídeo tutorial", "Poner atención","Rellenar las casillas vacias con un número en cada de ellas, de forma de que en cada columna y fila esten los números 1-9 una sola vez.","Enviar tu intento"];
  name = "Sudoku";
difficultyCells = 35;

setDifficulty(difficulty:any):any{

  switch (difficulty)
  {
    case "easy":
      this.difficultyCells = 65;
        break;
    case "medium":
      this.difficultyCells = 50;
        break;
    case "advanced": 
      this.difficultyCells = 30;
        break;
  }
}

constructor(updates: SwUpdate, private breadcrumbService: RutaBreadcrumService) {
  updates.available.subscribe(event => {
    updates.activateUpdate().then(() => document.location.reload());
  });
  this.breadcrumbService.setItems([
    { label: 'Actividades', routerLink: ['/actividades']}, 
    { label: 'Sudoku' }
  ]);
}
  ngOnInit(): void {
    this.setDifficulty
  }

  




}
