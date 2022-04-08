import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent  {

  constructor(
    public boardServiceService: BoardServiceService,
    ) { }

  

}
