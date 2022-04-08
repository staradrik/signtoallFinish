import { Component, OnInit } from '@angular/core';
import { BoardServiceService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public boardServiceService: BoardServiceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
