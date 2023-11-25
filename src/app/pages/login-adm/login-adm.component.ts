import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { logAdm } from 'src/app/interfaces/logAdm';
import { NavbarService } from 'src/app/services/navbar.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-login-adm',
  templateUrl: './login-adm.component.html',
  styleUrls: ['./login-adm.component.css']
})
export class LoginAdmComponent {
  @ViewChild(HeaderComponent)
  hijo!: HeaderComponent;

log:logAdm=new logAdm();
  constructor( public router: Router, public nav: NavbarService ) { }

  ngOnInit() {
    this.nav.show();
  }

  login(log:logAdm){
    if(log.usuario=='ciia2023@ujed.mx' && log.password=='congreso2023'){
      //grabar en el session la variable ADMIN:'S'
      this.router.navigate(['/inicioadm']);

    }
  }

}
