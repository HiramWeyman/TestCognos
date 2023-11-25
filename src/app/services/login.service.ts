import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/Login';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, public router: Router) { }

  public urlEndPoint = `${environment.rutaAPI}`;


  getLogin(login: Login) {
   
    console.log(login);
    login.cire_paterno=login.cire_paterno.toLocaleUpperCase().trim();
    login.cire_materno=login.cire_materno.toLocaleUpperCase().trim();
    login.cire_nombre=login.cire_nombre.toLocaleUpperCase().trim();
    login.cire_celular=login.cire_celular.trim();
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/login'}`, login).pipe(
      map((response: any) => {
        return response;
      })
    );

  }


  getLoginCount(login: Login) {
   
    console.log(login);
    login.cire_paterno=login.cire_paterno.toLocaleUpperCase().trim();
    login.cire_materno=login.cire_materno.toLocaleUpperCase().trim();
    login.cire_nombre=login.cire_nombre.toLocaleUpperCase().trim();
    login.cire_celular=login.cire_celular.trim();
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/loginCount'}`, login).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  logout() {
    sessionStorage.removeItem('Login');
/*     sessionStorage.removeItem('Tipo');
    sessionStorage.removeItem('shoppingCart'); */
    sessionStorage.removeItem('usuID');
/*     sessionStorage.removeItem('Ures');
    sessionStorage.removeItem('Persona'); */
    // sessionStorage.removeItem(_TOKEN);
    this.router.navigate(['/']);
  }

  estaLogueado() {
    if (sessionStorage.removeItem('Login') === null) {
      return false;
    } else {
      //return true;
      return (sessionStorage.getItem('Login'));
    }
  }
}
