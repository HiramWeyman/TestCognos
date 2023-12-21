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
import {  RespTest } from '../interfaces/RespTest';
import { RespTestC } from '../interfaces/RespTestC';
import { RespTestF } from '../interfaces/RespTestF';
import { RespTestM } from '../interfaces/RespTestM';


@Injectable({
  providedIn: 'root'
})
export class TestIsraService {

  constructor(private http: HttpClient) { }

  public urlEndPoint = `${environment.rutaAPI}`;
   public valor:any;
/*   RegistroPacientes(paciente: Pacientes): Observable<Pacientes> {
    return this.http.post<Pacientes>(`${environment.rutaAPI}` + '/Pacientes', paciente);
  } */

 

  EnviarRespC(resp: RespTestC[]) {
    console.log(resp);
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/isra/TestISRARespC'}`, resp).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  EnviarRespF(resp: RespTestF[]) {
    console.log(resp);
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/isra/TestISRARespF'}`, resp).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  EnviarRespM(resp: RespTestM[]) {
    console.log(resp);
    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/isra/TestISRARespM'}`, resp).pipe(
      map((response: any) => {
        return response;
      })
    );

  }


  DeleteResp(id:number) {
  
    return this.http.delete(`${environment.rutaAPI + '/isra/deleteIsraResp/'+id}`).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  















}
