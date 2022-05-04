import { Component } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent  {

  constructor(public boardServiceService: BoardServiceService) { }


}
