import { Component } from '@angular/core';
import { RegistrarService } from './services/registrar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(public _registrar:RegistrarService ){
  
 }
}
