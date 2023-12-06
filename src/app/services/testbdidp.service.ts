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
import { RespTestBDI } from '../interfaces/RespTestBDI';


@Injectable({
  providedIn: 'root'
})
export class TestbdidpService {

  constructor(private http: HttpClient) { }

  public urlEndPoint = `${environment.rutaAPI}`;
   public valor:any;
/*   RegistroPacientes(paciente: Pacientes): Observable<Pacientes> {
    return this.http.post<Pacientes>(`${environment.rutaAPI}` + '/Pacientes', paciente);
  } */

 /*  GetPreguntas(): Observable<any[]> {
    return this.http.get(`${environment.rutaAPI}` + '/baiAn/testBAIan').pipe(
      map(response => response as any[])
    );
  } */


  EnviarResp(resp: RespTestBDI[]) {
   
    console.log(resp);

    //return this.http.post<Usuarios>(this.urlEndPoint + '/tusuarios/'+login.user+'/'+login.password, login).pipe(
    return this.http.post(`${environment.rutaAPI + '/bdiDp/testBDIdpResp'}`, resp).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  DeleteResp(id:number) {
  
    return this.http.delete(`${environment.rutaAPI + '/bdiDp/deleteBDIdpResp/'+id}`).pipe(
      map((response: any) => {
        return response;
      })
    );

  }

  















}
