import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detreg } from 'src/app/interfaces/Detreg';
import { Registro } from 'src/app/interfaces/Registro';
import { Tipo } from 'src/app/interfaces/Tipos';
import { NavbarService } from 'src/app/services/navbar.service';
import { RegistrarService } from 'src/app/services/registrar.service';
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
@Component({
  selector: 'app-admrevisor',
  templateUrl: './admrevisor.component.html',
  styleUrls: ['./admrevisor.component.css']
})
export class AdmrevisorComponent implements OnInit{
  @BlockUI()
  blockUI!: NgBlockUI;
  usuario:Registro= new Registro();
  detreg:Detreg= new Detreg();
  tipo!: Tipo[];
  nombre!: string;
  paterno!: string;
  materno!: string;
  celular!: string;
  email!: string;
  constructor( private _reg: RegistrarService,
    public router: Router, public nav: NavbarService ) { }
  ngOnInit(): void {
    this.nav.hide();
    this._reg.getTipos().subscribe(
      (tipo) => {
        this.tipo = tipo;
        console.log(this.tipo);
      }
    ) 
    this.detreg.cidr_id_tipo=3;
  }

  guardar(usuario:Registro) {
    this.blockUI.start('Guardando...');
    if(usuario.cire_paterno==""||usuario.cire_paterno==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar apellido paterno',
        icon: 'info',
        timer:2000});
        return;
    }

    if(usuario.cire_materno==""||usuario.cire_materno==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar apellido materno',
        icon: 'info',
        timer:2000});
        return;
    }

    if(usuario.cire_nombre==""||usuario.cire_nombre==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar nombre',
        icon: 'info',
        timer:2000});
        return;
    }

    if(!this.detreg.cidr_id_tipo){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar tipo',
        icon: 'info',
        timer:2000});
        return;
    }

    if(usuario.cire_email==""||usuario.cire_email==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar email',
        icon: 'info',
        timer:2000});
        return;
    }

    if(usuario.cire_celular==""||usuario.cire_celular==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Debe ingresar celular',
        icon: 'info',
        timer:2000});
        return;
    }



 


      this._reg.getUser(usuario)
        .subscribe((data: any) => {
          console.log(data);
  
          if (typeof data !== 'undefined' && data.length > 0) {
            this.blockUI.stop();
            Swal.fire({
              icon: 'info',
              title: 'Registro Usuario',
              text: 'El Usuario ' + data[0].cire_nombre+' '+data[0].cire_paterno+' '+data[0].cire_materno+' ya existe',
              timer: 2000
            });

       
        
          } else {
            this._reg.create(usuario).subscribe(usr => {
              this.blockUI.stop();
              this.router.navigate(['/admrevisor']);
                Swal.fire('Nuevo Revisor registrado', `Se ha registrado como revisor con éxito!`, 'success');
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
  
                this._reg.enviarMailRevisor(this.paterno,this.materno,this.nombre,this.celular,this.email).subscribe(
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
              this.blockUI.stop();
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
