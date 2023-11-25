import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-header-adm',
  templateUrl: './header-adm.component.html',
  styleUrls: ['./header-adm.component.css']
})
export class HeaderAdmComponent {
  constructor( public nav: NavbarService ) {}
}
