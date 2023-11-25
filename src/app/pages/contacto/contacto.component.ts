import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  constructor(public nav: NavbarService) { }
  
  ngOnInit() {
    this.nav.show();
  }
  
}
