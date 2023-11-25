import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public nav: NavbarService ) {}

}
