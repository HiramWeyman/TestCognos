import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/interfaces/Login';
import { LoginService } from 'src/app/services/login.service';
import swal from 'sweetalert2';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private subscription!: Subscription;
  public log: Login = new Login();
/*   usuario: Login = new Login(); */

  constructor(private router: Router, private _log: LoginService, public nav: NavbarService) { }
  
  ngOnInit() {
    this.nav.show();
  }

  guardar(usuario: Login) {
    console.log(usuario)
  }

  login() {
    console.log(this.log);
     
  if(!this.log.cire_paterno){
    swal.fire({
      icon: 'info',
      title: 'Login',
      text: 'Ingrese apellido paterno',
      timer: 2000
    });
    return;
  }

  if(!this.log.cire_materno){
    swal.fire({
      icon: 'info',
      title: 'Login',
      text: 'Ingrese apellido materno',
      timer: 2000
    });
    return;
  }

  if(!this.log.cire_nombre){
    swal.fire({
      icon: 'info',
      title: 'Login',
      text: 'Ingrese nombre',
      timer: 2000
    });
    return;
  }


  if(!this.log.cire_celular){
    swal.fire({
      icon: 'info',
      title: 'Login',
      text: 'Ingrese celular',
      timer: 2000
    });
    return;
  }
    this.subscription = this._log.getLogin(this.log)
      .subscribe((data: any) => {
        console.log(data);

        if (typeof data !== 'undefined' && data.length > 0) {
          swal.fire({
            icon: 'success',
            title: 'Usuario Logeado',
            text: 'Bienvenido ' + data[0].cire_nombre,
            timer: 2000
          });
          sessionStorage['Login'] = this.log.cire_nombre.toString() + ' ' + this.log.cire_paterno.toString() + ' ' + this.log.cire_materno.toString();
          sessionStorage['usuID'] = data[0].cire_id.toString();

          this.router.navigate(['/resumenes']);
        } else {
          swal.fire({
            icon: 'error',
            title: 'Alguno de los datos ingresados es incorrecto'
          });
        }
      },
      error => {
        console.log(error);
        console.log(error.error.Message);
        swal.fire({
          title: 'ERROR!!!',
          text: error.error.Message,
          icon: 'error'});
      }
      );
  }
}
