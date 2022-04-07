import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  name = "Sudoku";
difficultyCells = 35;

setDifficulty(difficulty:any):any{

  console.log("from parent:"+difficulty)
  switch (difficulty)
  {
    case "easy":
      this.difficultyCells = 42;
        break;
    case "medium":
      this.difficultyCells = 35;
        break;
    case "advanced": 
      this.difficultyCells = 20;
        break;
  }
}

constructor(updates: SwUpdate) {
  updates.available.subscribe(event => {
    updates.activateUpdate().then(() => document.location.reload());
  })
}
  ngOnInit(): void {
    this.setDifficulty
  }




}
