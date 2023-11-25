import { Injectable } from '@angular/core';
import { Resumen } from '../interfaces/resumen';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { ResumenLista } from '../interfaces/resumenLista';
import { PonenciaLista } from '../interfaces/PonenciaLista';
import { Ponencia } from '../interfaces/ponencia';
import { RevisoresList } from '../interfaces/RevisoresList';
import { Revisor } from '../interfaces/Revisor';


@Injectable({
  providedIn: 'root'
})
export class PonenciasService {

  constructor(private http: HttpClient) { }

  public urlEndPoint = `${environment.rutaAPI}`;
public valor:any;
/*   RegistroPacientes(paciente: Pacientes): Observable<Pacientes> {
    return this.http.post<Pacientes>(`${environment.rutaAPI}` + '/Pacientes', paciente);
  } */

  GetResumenes(): Observable<ResumenLista[]> {
    return this.http.get(`${environment.rutaAPI}` + '/lista_resumen').pipe(
      map(response => response as ResumenLista[])
    );
  }

  GetPonencias(): Observable<PonenciaLista[]> {
    return this.http.get(`${environment.rutaAPI}` + '/lista_ponencias').pipe(
      map(response => response as PonenciaLista[])
    );
  }

  GetPonenciasUpObservacion(id:number): Observable<PonenciaLista> {
    return this.http.get(`${environment.rutaAPI}` + '/get_ponenciaporId/'+id).pipe(
      map(response => response as PonenciaLista)
    );
  }

  GetPonenciaslist(id:any): Observable<PonenciaLista[]> {
    return this.http.get(`${environment.rutaAPI}` + '/lista_ponenciasUsr/'+id).pipe(
      map(response => response as PonenciaLista[])
    );
  }

  GetResumeneslist(id:any): Observable<ResumenLista[]> {
    return this.http.get(`${environment.rutaAPI}` + '/lista_resumenUsr/'+id).pipe(
      map(response => response as ResumenLista[])
    );
  }

  GetRevisores(): Observable<RevisoresList[]> {
    return this.http.get(`${environment.rutaAPI}` + '/lista_revisores').pipe(
      map(response => response as RevisoresList[])
    );
  }


  public editarEstatus(id: number, estatus: String): Observable<Resumen> {

    //return this.http.put<Resumen>(`${environment.rutaAPI}/updRes/${id}`, estatus)
   /*  return this.http.put<Resumen>(`${environment.rutaAPI + '/updRes?id='+id+'&estatus='+estatus}`, estatus) */
   return this.http.put<Resumen>(`${environment.rutaAPI + '/updRes/'+id+'/'+estatus}`,"").pipe(
    map((response: any) => {
      //console.log(response);
      return response;
      })
  );
  }

  public editarEstatusPon(id: number, estatus: String): Observable<Ponencia> {

    //return this.http.put<Resumen>(`${environment.rutaAPI}/updRes/${id}`, estatus)
   /*  return this.http.put<Resumen>(`${environment.rutaAPI + '/updRes?id='+id+'&estatus='+estatus}`, estatus) */
   return this.http.patch<Ponencia>(`${environment.rutaAPI + '/updPon/'+id+'/'+estatus}`,"").pipe(
    map((response: any) => {
      //console.log(response);
      return response;
      })
  );
  }


  public editarObservacionPon(id: number,num_rev:number, observacion: String): Observable<Ponencia> {

    //return this.http.put<Resumen>(`${environment.rutaAPI}/updRes/${id}`, estatus)
   /*  return this.http.put<Resumen>(`${environment.rutaAPI + '/updRes?id='+id+'&estatus='+estatus}`, estatus) */
   return this.http.patch<Ponencia>(`${environment.rutaAPI + '/updObsvPon/'+id+'/'+num_rev+'/'+observacion}`,"").pipe(
    map((response: any) => {
      //console.log(response);
      return response;
      })
  );
  }

  public editarReg(id: number, archivoportada: File,archivoextenso: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivoPortada', archivoportada)
    formData.append('archivoextenso', archivoextenso)
    console.log(formData);
    return this.http.put<Resumen>(`${environment.rutaAPI}/UpdArchivos/${id}`, formData)
  }


  UpdateRevisores(reg: Revisor) {
   
    console.log(reg);

    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/UpdateRevisor'}`, reg).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  CorreoCartaAceptacion(id:number) {
  
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.get(`${environment.rutaAPI + '/mandarMail/'+id}`).pipe(
      map((response: any) => {
        return response;
      })
    );

  }
}
