import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-indicaciones',
  templateUrl: './indicaciones.component.html',
  styleUrls: ['./indicaciones.component.css']
})
export class IndicacionesComponent implements OnInit {

  @Input() video: string = "";
  @Input() indicaciones: string[]= [];

  urlSafe :SafeResourceUrl ="";

  constructor(public sanitizer: DomSanitizer) {   }

  ngOnInit(){
    this.urlSafe =  this.sanitizer.bypassSecurityTrustResourceUrl(this.video);
  }
}
