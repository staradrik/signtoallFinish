import { actividadEstudiante } from 'src/app/models/Actividades';
import { ActividadPutService } from 'src/app/services/actividad-put.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from '../game-engine/food';
import { MessageService } from 'primeng/api';
import { outsideGrid } from '../game-engine/gameboard-grid.util';
import { Router } from '@angular/router';
import { RutaBreadcrumService } from '../../../../../services/ruta-breadcrum.service';
import {Snake} from '../game-engine/snake';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit, AfterViewInit {

  video: string = "https://www.youtube.com/embed/esxgDsxrfog";
  indicaciones: string[]= ["Ver el vídeo tutorial", "Poner atención","Comer sin chocar con las paredes."];
  lastRenderTime = 0
  gameOver = false;
  gameWinner = false;
  gameBoard: any;
  SNAKE_SPEED = 1;
  snake = new Snake();
  food = new Food(this.snake);

  constructor(private breadcrumbService: RutaBreadcrumService,
              private messageService: MessageService, private router: Router, private actividadPut: ActividadPutService) { }

  ngOnInit(): void {
    this.snake.listenToInputs();

    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Snake' }
    ]);
  }

  ngAfterViewInit(){
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }

  start(currentTime: any) {  
    const score = this.food.currentScore;
    let existeCurso: any = localStorage.getItem("idCurso");
    if(score === 20){
      if(existeCurso != null || undefined){
        let idE: any = localStorage.getItem("idEst");
        let idA : string ="6";
        this.gameWinner = true
        let actividadHecha: actividadEstudiante = {
          actividad_realizada:1,
          nota:5
        }
        this.actividadPut.editActivity(idE, idA ,actividadHecha ).subscribe(edit =>{
          console.log(edit)
          actividadHecha = edit
          this.actividadPut.actRealizada = true;
          this.actividadPut.actNota = 5;
          this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
          setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);
        });
      }else if (existeCurso == null || undefined){
        this.gameWinner = true
        this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      }
      
    }

    if(this.gameOver || this.gameWinner) return  console.log('juego finalizado')
    
    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) return;
    this.lastRenderTime = currentTime;
    // console.log("rendering");
    this.update();
    this.draw();
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if(score < 10) return 4;
    if(score > 10 &&  score < 15 ) return 5;
    if(score > 15 && score < 20 ) return 6;
    return 7;
  }


  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if(!this.gameOver) return;
    this.gameBoard.classList.add("blur");
  }

  restart() {
    window.location.reload();
  }


}
