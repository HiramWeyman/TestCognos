import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detreg } from 'src/app/interfaces/Detreg';
import { Estados } from 'src/app/interfaces/Estados';
import { Localidades } from 'src/app/interfaces/Localidades';
import { Municipios } from 'src/app/interfaces/Municipios';
import { Registro } from 'src/app/interfaces/Registro';
import { Tipo } from 'src/app/interfaces/Tipos';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{


  usuario:Registro= new Registro();
  detreg:Detreg= new Detreg();
  tipo!: Tipo[];
  estados!: Estados[];
  municipios!:Municipios[];
  localidades!:Localidades[];
  nombre!: string;
  paterno!: string;
  materno!: string;
  celular!: string;
  email!: string;

  constructor( private _reg: RegistrarService,
    public router: Router, public nav: NavbarService ) { }

    ngOnInit(): void {
      this.nav.show();
      this._reg.getTipos().subscribe(
        (tipo) => {
          this.tipo = tipo;
          console.log(this.tipo);
        }
      ) 

      this._reg.getEstados().subscribe(
        (estado) => {
          this.estados = estado;
        /*   console.log(this.estados); */
        }
      )
      
    }

    CargaMunicipio(cve_edo:any) {
      let claveEdo = cve_edo.value;
      console.log(claveEdo);
      this._reg.getMunicipios(claveEdo).subscribe(
        (mun) => {
          this.municipios = mun;
        /*   console.log(this.estados); */
        }
      )
    }

    CargaLocalidad(cve_mun:any) {
      let claveMun = cve_mun.value;
      console.log('localidad');
      console.log(claveMun);
      this._reg.getLocalidades(claveMun).subscribe(
        (loc) => {
          this.localidades = loc;
        /*   console.log(this.estados); */
        }
      )
    }
    
 
    guardar(usuario:Registro) {
      
      if(usuario.cire_paterno==""||usuario.cire_paterno==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar apellido paterno',
          icon: 'info',
          timer:2000});
          return;
      }

      if(usuario.cire_materno==""||usuario.cire_materno==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar apellido materno',
          icon: 'info',
          timer:2000});
          return;
      }

      if(usuario.cire_nombre==""||usuario.cire_nombre==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar nombre',
          icon: 'info',
          timer:2000});
          return;
      }

      if(!this.detreg.cidr_id_tipo){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar tipo',
          icon: 'info',
          timer:2000});
          return;
      }

      if(usuario.cire_email==""||usuario.cire_email==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar email',
          icon: 'info',
          timer:2000});
          return;
      }

      if(usuario.cire_celular==""||usuario.cire_celular==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar celular',
          icon: 'info',
          timer:2000});
          return;
      }

      if(usuario.cire_institucion==""||usuario.cire_institucion==null){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe ingresar institución',
          icon: 'info',
          timer:2000});
          return;
      }

      if(!usuario.cire_estado){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe seleccionar un estado',
          icon: 'info',
          timer:2000});
          return;
      }

      if(!usuario.cire_municipio){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe seleccionar un municipio',
          icon: 'info',
          timer:2000});
          return;
      }

      if(!usuario.cire_localidad){
        Swal.fire({
          title: 'Info!!!',
          text: 'Debe seleccionar una localidad',
          icon: 'info',
          timer:2000});
          return;
      }
        this._reg.getUser(usuario)
          .subscribe((data: any) => {
            console.log(data);
    
            if (typeof data !== 'undefined' && data.length > 0) {
              Swal.fire({
                icon: 'info',
                title: 'Registro Usuario',
                text: 'El Usuario ' + data[0].cire_nombre+' '+data[0].cire_paterno+' '+data[0].cire_materno+' ya existe',
                timer: 2000
              });

         
          
            } else {
              this._reg.create(usuario).subscribe(usr => {
                this.router.navigate(['registro']);
                  Swal.fire('Nuevo Ponente registrado', `Sus datos de acceso se enviarón al correo ${usr.cire_email}  con éxito!`, 'success');
                  console.log(this.detreg);
                  this.detreg.cidr_id=usr.cire_id;
                  this._reg.DetRegcreate(this.detreg).subscribe(det=>{
                    console.log(det);
                  });
                   this.nombre=usr.cire_nombre
                   this.paterno=usr.cire_paterno
                   this.materno=usr.cire_materno; 
                   this.celular=usr.cire_celular;
                   this.email=usr.cire_email;
                  console.log(this.nombre);
                  console.log(this.email);
    
                  this._reg.enviarMail(this.paterno,this.materno,this.nombre,this.celular,this.email).subscribe(
                    res => {
                     console.log(res);
                    }, error => {
                      console.log(error);
                      //Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
                    }
                  )
                  usuario.cire_paterno='';
                  usuario.cire_materno='';
                  usuario.cire_nombre='';
                  usuario.cire_titulo='';
                  usuario.cire_email='';
                  usuario.cire_ldi='';
                  usuario.cire_ldn='';
                  usuario.cire_celular='';
                  usuario.cire_institucion='';
                  usuario.cire_estado='';
                  usuario.cire_municipio='';
                  usuario.cire_localidad='';
                  //this.cargarUsers();
              },
              error => {
                console.log(error);
        
                Swal.fire({
                  title: 'ERROR!!!',
                  text: error.error.message,
                  icon: 'error'});
                
              });
            }
          },
          error => {
            console.log(error);
            console.log(error.error.Message);
            Swal.fire({
              title: 'ERROR!!!',
              text: error.error.Message,
              icon: 'error'});
          }
          );
      }
}
