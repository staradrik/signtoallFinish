
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actividades, ImgMemo, Image, RootObject } from '../models/Actividades';

@Injectable({
  providedIn: 'root'
})
export class MatematicasService {

  
  constructor(private http: HttpClient) { 
    this.getImaMemo();
  }

  getActivity(){
    return this.http.get<any>('assets/ActMatematicas.json')
    .toPromise().then(res => <Actividades[]>res.data)
    .then(data => {return data;});
  }

  //ACTIVIDAD MEMORAMA MATEMATICAS
  public _index = -1;
  public rootObject: RootObject = new RootObject();
  public _firstImages:string[] = [];
  public images:Image[] = [];

  public getImaMemo() {
    this.images = [];
      this.http.get<RootObject>('assets/memoMate.json').subscribe(res => {
        this.rootObject.data = res.data;
        for(let j = 0; j < 2; j++){
          for(let i = 0; i < res.data.length; i++){   
              let currImage:Image = {};
              this._firstImages.push(res.data[i].avatar);
              currImage.avatar = res.data[i].avatar;
              currImage.id = res.data[i].id;
              currImage.clicked = false;
              currImage.paired = false;
              currImage.serialNumber = (j+1) * (i+1);
              this.images.push(currImage);
          }
        }
      },err=>{console.log(err)})                      
  }

  public get firstImages():Image[]{
    return this.images;
  }

}
