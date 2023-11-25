import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-fechasimp',
  templateUrl: './fechasimp.component.html',
  styleUrls: ['./fechasimp.component.css']
})
export class FechasimpComponent {

  constructor(public nav: NavbarService) { }
  
  ngOnInit() {
    this.nav.show();
  }

}
