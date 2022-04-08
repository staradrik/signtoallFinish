import { Component, HostListener, OnInit } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';
//import { fromEvent} from 'rxjs';
import { keyToDirection} from './defs';

@Component({
  selector: 'app-sliding-puzzle',
  templateUrl: './sliding-puzzle.component.html',
  styleUrls: ['./sliding-puzzle.component.scss']
})
export class SlidingPuzzleComponent implements OnInit {

  title = 'Fifteen Game';

  constructor(
    public boardService: BoardServiceService,
  ) {}

  ngOnInit() {
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

      const direction = keyToDirection[event.key];
      
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

}


