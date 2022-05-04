import { Component, HostListener, OnInit } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';
//import { fromEvent} from 'rxjs';
import { keyToDirection} from './defs';
import { RutaBreadcrumService } from 'src/app/services/ruta-breadcrum.service';

@Component({
  selector: 'app-sliding-puzzle',
  templateUrl: './sliding-puzzle.component.html',
  styleUrls: ['./sliding-puzzle.component.scss']
})
export class SlidingPuzzleComponent implements OnInit {

  video: string = "https://www.youtube.com/embed/060K-WoP5gU";
  indicaciones: string[]= ["Ver el vídeo tutorial", "Poner atención","Siguiendo el paso a paso, oprime la casilla a mover para organizar la secuencia de números.","Enviar tu intento"];
  title = 'Fifteen Game';

  constructor(
    public boardService: BoardServiceService,
    private breadcrumbService: RutaBreadcrumService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Rompecabezas' }
    ]);
    this.boardService.initGame();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.boardService.isInProgress()) {
      switch (event.key) {
        case 'r':
          this.boardService.initGame();
          return;
      }

      const direction = this.tecla(event.key);
      
      if (direction) {
        this.boardService.move(direction);
      }
    } else {
      switch (event.key) {
        case 's':
          this.boardService.startGame();
          break;
        case 'S':
          this.boardService.startGame([
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            13, 14, 15
          ]);
          break;
      }
    }
  }
  tecla(key:string):string{
    switch(key){
      case 'ArrowUp': return keyToDirection['ArrowUp'];
        case 'ArrowDown': return keyToDirection['ArrowDown'];
        case 'ArrowLeft': return keyToDirection['ArrowLeft'];
        case 'ArrowRight': return keyToDirection['ArrowRight'];
      default: 
          return "up";
  }
  }
}


