import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class RecuperaService {
  
constructor(private http: HttpClient) { }
public editarPass(correo: string, password: string): Observable<any> {
    console.log(correo);
   return this.http.patch<any>(`${environment.rutaAPI + '/RecuperaPass/UpdPass?email='+correo+'&password='+password}`,"").pipe(
    map((response: any) => {
      return response;
      })
  );
  }
}