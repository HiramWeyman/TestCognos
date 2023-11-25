import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tipo } from '../interfaces/Tipos';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Registro } from '../interfaces/Registro';
import { Estados } from '../interfaces/Estados';
import { Municipios } from '../interfaces/Municipios';
import { Localidades } from '../interfaces/Localidades';
import { Resumen } from '../interfaces/resumen';
import { Mesas } from '../interfaces/Mesas';
import { Detreg } from '../interfaces/Detreg';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { 

  }

  getTipos(): Observable<Tipo[]> {
    return this.http.get(`${environment.rutaAPI}` + '/tipos').pipe(
      map(response => response as Tipo[])
    );
  }

  
  getMesas(): Observable<Mesas[]> {
    return this.http.get(`${environment.rutaAPI}` + '/mesas').pipe(
      map(response => response as Mesas[])
    );
  }

  getEstados(): Observable<Estados[]> {
    return this.http.get(`${environment.rutaAPI}` + '/estados').pipe(
      map(response => response as Estados[])
    );
  }

  getMunicipios(cve_edo:string): Observable<Municipios[]> {
    return this.http.get(`${environment.rutaAPI}/municipios/${cve_edo}`).pipe(
      map(response => response as Municipios[])
    );
    //return this.http.get<Programas>(`${environment.rutaAPI}/tvprogramas/${id}`);
  }

  getLocalidades(cve_mun:string): Observable<Localidades[]> {
    return this.http.get(`${environment.rutaAPI}/localidades/${cve_mun}`).pipe(
      map(response => response as Localidades[])
    );
    //return this.http.get<Programas>(`${environment.rutaAPI}/tvprogramas/${id}`);
  }

  getUser(reg: Registro) {
   
    console.log(reg);
    reg.cire_paterno=reg.cire_paterno.toLocaleUpperCase();
    reg.cire_materno=reg.cire_materno.toLocaleUpperCase();
    reg.cire_nombre=reg.cire_nombre.toLocaleUpperCase();
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/getUser'}`, reg).pipe(
      map((response: any) => {
        return response;
      })
    );

  }


  create(usuario: Registro): Observable<Registro> {
    //const user = sessionStorage.Login;
    if(usuario.cire_paterno){
      usuario.cire_paterno=usuario.cire_paterno.toLocaleUpperCase().trim();
    }
    if(usuario.cire_materno){
      usuario.cire_materno=usuario.cire_materno.toLocaleUpperCase().trim();
    }
    if(usuario.cire_nombre){
        usuario.cire_nombre=usuario.cire_nombre.toLocaleUpperCase().trim();
    }
    if(usuario.cire_titulo){
      usuario.cire_titulo=usuario.cire_titulo.toLocaleUpperCase().trim();
    }
    if(usuario.cire_institucion){
      usuario.cire_institucion=usuario.cire_institucion.toLocaleUpperCase().trim();
    }
    usuario.cire_celular=usuario.cire_celular.trim();
    return this.http.post<Registro>(`${environment.rutaAPI + '/registro'}`, usuario);
  }

/*   public enviarMail(nombre: String, email: String) {
    console.log(nombre);
    console.log(email);
   return this.http.get(`${environment.rutaAPI + '/EnviarMail?nombre='+nombre+'&email='+email}`).pipe(
    map((response: any) => {
      //console.log(response);
      return response;
      })
  );
  } */

  enviarMail(paterno: string,materno:string,nombre:string,celular:string, email: string): Observable<string> {
    console.log(paterno);
    console.log(materno);
    console.log(nombre);
    console.log(celular);
    console.log(email);
    return this.http.get(`${environment.rutaAPI}` + '/EnviarMail?paterno='+paterno+'&materno='+materno+'&nombre='+nombre+'&celular='+celular+'&email='+email).pipe(
      map(response => response as string)
    );
  }

  enviarMailRevisor(paterno: string,materno:string,nombre:string,celular:string, email: string): Observable<string> {
    console.log(paterno);
    console.log(materno);
    console.log(nombre);
    console.log(celular);
    console.log(email);
    return this.http.get(`${environment.rutaAPI}` + '/EnviarMailRevisor?paterno='+paterno+'&materno='+materno+'&nombre='+nombre+'&celular='+celular+'&email='+email).pipe(
      map(response => response as string)
    );
  }

  DetRegcreate(detreg: Detreg): Observable<Detreg> {
    return this.http.post<Detreg>(`${environment.rutaAPI + '/Detreg'}`, detreg);
  }


  public editarConFoto(res: Resumen): Observable<Resumen> {
    console.log(res);
    return this.http.post(`${environment.rutaAPI + '/GuardaX'}`, res).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public editarReg(id: number, archivo: File): Observable<Resumen> {
    const formData = new FormData();
    formData.append('archivo', archivo)
    return this.http.put<Resumen>(`${environment.rutaAPI}/Upd/${id}`, formData)
  }
}
