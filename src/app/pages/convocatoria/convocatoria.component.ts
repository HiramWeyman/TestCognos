import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css']
})
export class ConvocatoriaComponent {

  constructor( public nav: NavbarService ) { }

  ngOnInit() {
    this.nav.show();
  }

}
