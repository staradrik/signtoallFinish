import { Component, OnInit } from '@angular/core';
import { RootObject, Image } from '../../../../models/Actividades';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';
import { EspannolService } from '../../../../services/espannol.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styles: [`
  h2{
    margin-top: -15px;
    margin-bottom: -15px;
  }
  .container{
    width:100%;
    border-radius: 15px;
    background: #f0eeee;
  }
  .container-div{
    margin-top:15px;
    margin-bottom:15px;
    margin-left:15px;
    margin-right:15px;
  }
  .container-img{
    margin-top:10px;
    margin-bottom:10px;
    margin-left:10px;
    margin-right:10px;
  }
  .boton{
    display: flex;
    justify-content: center;
    align-items: center; 
    margin-bottom: 10px;
  }
  img{
    border-radius: 15px;
    width: 100%;
    object-position: 0px;
    margin-top: 1%;
    margin-bottom: -4px;
  }`
  ]
})
export class MemoramaComponent implements OnInit {

  myRootObject?: RootObject;
  rows:number[] = [1,2,3];
  cols:number[] = [1,2,3,4];
  _randArr:number[] = [];
  disableFuncFlag:boolean = false;
  secFlag:boolean = false;
  showImg:boolean = false;
  firstImg:Image ={} as Image;
  secImg:Image ={} as Image;
  steps:number = 0;
  pairs:number = 0;
  _timer: number = 0;
  interval:any; 
  timerFlag:boolean = false;
  nameShow:boolean = false;

  constructor(
    private breadcrumbService: RutaBreadcrumService,
    private españolService: EspannolService,
    private messageService: MessageService,
    private router: Router
    ) {   }

  ngOnInit(): void {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']},
      { label: 'memorama' }
    ]);
    this.newGame();
  }

  public newGame():void{
    this.pauseTimer();
    this.españolService.getImaMemo(); 
    this._randArr = [];
    this._randArr = this.randArr;
    this.steps = 0;
    this._timer = 0;
    this.pairs = 0;
    this.timerFlag = false;
    this.disableFuncFlag = false;
    this.nameShow = false;
  }
  
  pauseTimer() {//detener el tiempo
    clearInterval(this.interval);    
  }

  public get photosArr():Image[]{
    return this.españolService.firstImages;
  }  
    
  public get randArr():number[]{
    while(this._randArr.length < 12){
      let randNum = Math.floor(Math.random() * 12) ; 
      if(!(this._randArr.includes(randNum))){
        this._randArr.push(randNum); 
      }  
    }
    return this._randArr;
  }
    
  public imageClicked(image:Image):void{
    
    this.nameShow = !this.nameShow;
    if(!this.timerFlag)
    {
      this.timerFlag = true;
      this.startTimer();
    }
    if(!this.disableFuncFlag){
      //si no se hizo clic en ninguna foto
      if(this.firstImg === undefined || !this.firstImg.clicked){
        console.log("primera imagen acaba de hacer clic "+ image.serialNumber);
        this.firstImg = image;
        this.firstImg.id = image.id;
        this.firstImg.clicked = true;
      }
      
      //si ya se hizo clic en la primera foto
      else  if(this.firstImg !== undefined && this.firstImg.clicked && this.firstImg.serialNumber !== image.serialNumber)
      {
        console.log("segunda imagen acaba de hacer clic "+ image.serialNumber);
        this.secImg = image;
        this.secImg.id = image.id;
        this.secImg.clicked = true;
        this.disableFuncFlag = true;
        console.log("id primera img "+this.firstImg.id);
        console.log("id segunda img "+this.secImg.id);
        this.steps +=1;
        setTimeout(()=>{this.checkEquality(this.firstImg,this.secImg);},1000);
      }
    }
    return;
  }

  public checkEquality(first:Image,sec:Image):void{
    console.log("comprobar la igualdad() "+ first.id);
    if(first.id === sec.id){
      first.paired = true;
      sec.paired = true;
      this.pairs++;
      
      if(this.pairs === 6){
        this.pauseTimer();
        this.messageService.add({severity:'success', summary:'¡Excelente!', detail:'Has completado la actividad'});
        setTimeout( ()=> { this.router.navigate(['/actividades'])}, 2100);
      }  
    }
    first.clicked= false;
    sec.clicked = false;
    this.disableFuncFlag= false;
  }

  startTimer() {
    this.interval = setInterval(() => {
      this._timer++
    },1000)
  }

  public get timer():number{
    return this._timer;
  }

}
