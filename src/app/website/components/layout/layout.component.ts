import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
    `.home{
    margin-top: -60px;
    margin-right: -60px;
    margin-left: -60px;
    }`
  ]
})
export class LayoutComponent {

  constructor(public authService:AuthService) { }

  logout(){}

}
