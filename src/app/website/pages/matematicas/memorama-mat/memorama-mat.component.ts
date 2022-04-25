import { Component, OnInit } from '@angular/core';
import { RootObject, Image } from '../../../../models/Actividades';
import { MatematicasService } from '../../../../services/matematicas.service';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memorama-mat',
  templateUrl: './memorama-mat.component.html',
  styles: [`
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
  img{
    border-radius: 15px;
    width: 100%;
    object-position: 0px;
    margin-top: 1%;
    margin-bottom: -4px;
  }`
  ]
})
export class MemoramaMatComponent implements OnInit {

myRootObject?: RootObject;
public rows:number[] = [1,2,3,4];
public cols:number[] = [1,2,3];
public _randArr:number[] = [];
public disableFuncFlag:boolean = false;
public secFlag:boolean = false;
public showImg:boolean = false;
public firstImg:Image ={} as Image;
public secImg:Image ={} as Image;
public steps:number = 0;
public pairs:number = 0;
public _timer: number = 0;
public interval:any; //buu
public timerFlag:boolean = false;

  constructor(private memoService:MatematicasService,
              private breadcrumbService: RutaBreadcrumService,
              private messageService: MessageService,
              private router: Router) {

   }

  ngOnInit(): void {  
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'Memorama' }
    ]);
    this.newGame();
  }

  public newGame():void{
   this.pauseTimer();
   this.memoService.getImaMemo(); 
   this._randArr = [];
   this._randArr = this.randArr;
   this.steps = 0;
   this._timer = 0;
   this.pairs = 0;
   this.timerFlag = false;
   this.disableFuncFlag = false;
 }
 
 
   public get photosArr():Image[]{
     return this.memoService.firstImages;
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
 
     if(!this.timerFlag)
     {
       this.timerFlag = true;
       this.startTimer();
     }
 
     if(!this.disableFuncFlag){
 
       //si no se hizo clic en ninguna foto
       if(this.firstImg === undefined || !this.firstImg.clicked){
         this.firstImg = image;
         this.firstImg.id = image.id;
         this.firstImg.clicked = true;
       }
       
       //si ya se hizo clic en la primera foto
       else  if(this.firstImg !== undefined && this.firstImg.clicked && this.firstImg.serialNumber !== image.serialNumber)
       {      
         this.secImg = image;
         this.secImg.id = image.id;
         this.secImg.clicked = true;
         this.disableFuncFlag = true;     
         this.steps +=1;
         setTimeout(()=>{this.checkEquality(this.firstImg,this.secImg);},1000);
       }
 
     }
     return;
   
   }
   public checkEquality(first:Image,sec:Image):void{   
     if(first.id === sec.id){
       first.paired = true;
       sec.paired = true;
       this.pairs++;
       if(this.pairs === 6){
         this.pauseTimer();
         this.messageService.add({severity:'success', summary: 'Bien hecho', detail: 'Actividad realizada'});
      setTimeout( ()=> { this.router.navigate(['/actividades'])}, 3000);

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
 
   pauseTimer() {//detener el tiempo
     clearInterval(this.interval);    
   }

   public get timer():number{
     return this._timer;
   }
  }