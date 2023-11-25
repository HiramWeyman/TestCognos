import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { Mesas } from 'src/app/interfaces/Mesas';
import { Tipo } from 'src/app/interfaces/Tipos';
import { Resumen } from 'src/app/interfaces/resumen';
import { LoginService } from 'src/app/services/login.service';
import { RegistrarService } from 'src/app/services/registrar.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import Swal from 'sweetalert2';
import { ViewChild } from '@angular/core';
import { PonenciasService } from 'src/app/services/ponencias.service';
import { PonenciaLista } from 'src/app/interfaces/PonenciaLista';
import { NavbarService } from 'src/app/services/navbar.service';
import { ResumenLista } from 'src/app/interfaces/resumenLista';


@Component({
  selector: 'app-ponencias',
  templateUrl: './ponencias.component.html',
  styleUrls: ['./ponencias.component.css']
})
export class PonenciasComponent {
  @BlockUI()
  blockUI!: NgBlockUI;
  username: any;
  userId: any;
  nombreDocPortada: any;
  nombreDocextenso: any;
  res: Resumen = new Resumen();
  mesa!: Mesas[];
  portadaSeleccionada!: File;
  extensoSeleccionada!: File;
  resumen_list!: ResumenLista[];
  ponencia_id!: number;
  @Input()
  requiredFileType!: string;
  @ViewChild('myInputportada')
  myInputportada!: ElementRef;
  @ViewChild('myInputextenso')
  myInputextenso!: ElementRef;
  fileName = '';
  uploadProgress!: number;
  uploadSub!: Subscription;
  constructor(private _reg: PonenciasService, private _log: LoginService, public nav: NavbarService ,
    public router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.nav.show();
    if (sessionStorage['Login'] == null) {
      this.router.navigate(['/']);
    }
    if (sessionStorage['usuID'] == null) {
      this.router.navigate(['/']);
    }

    this.username = sessionStorage['Login'].toLocaleUpperCase();
    this.userId = sessionStorage['usuID'];
    this.cargarPonencias();


  }

  resetInput() {
    console.log(this.myInputportada.nativeElement.files);
    this.myInputportada.nativeElement.value = "";
    console.log(this.myInputportada.nativeElement.files);

    console.log(this.myInputextenso.nativeElement.files);
    this.myInputextenso.nativeElement.value = "";
    console.log(this.myInputextenso.nativeElement.files);
  }

/*   onFileSelected(event: Event) {



    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    console.log(files);

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
         
          this.uploadProgress = Math.round(100 * (event.loaded || 1) / (event.total || 1));

        }
      })
    }
  } */

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    /* this.uploadSub = null; */
  }

  public seleccionarPortada(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    console.log(files);
    this.portadaSeleccionada = file;
    console.info(this.portadaSeleccionada);
  }

  public seleccionarExtenso(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    console.log(files);
    this.extensoSeleccionada = file;
    console.info(this.extensoSeleccionada);
  }


  guardar() {
    this.blockUI.start('Guardando...');
  console.log(this.ponencia_id);
    if (this.portadaSeleccionada == null) {
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Seleccione el archivo de su portada',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    if (this.extensoSeleccionada == null) {
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Seleccione el archivo de su extenso',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    if(this.ponencia_id===undefined){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Seleccione una ponencia',
        icon: 'info',
        timer: 2000
      });
      return;
    }

    if(  this.ponencia_id==null){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Seleccione una ponencia',
        icon: 'info',
        timer: 2000
      });
      return;
    }


  
    console.info(this.portadaSeleccionada.name); 
    var splittedPortada = this.portadaSeleccionada.name.toString().split("."); 
    console.log(splittedPortada[0]);
    console.log(splittedPortada[1]);
    if(splittedPortada[1]!='docx'){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Su archivo  de portada debe ser word',
        icon: 'info',
        timer: 2000
      });

      return;
    }
      console.info(this.portadaSeleccionada);
      console.info(this.portadaSeleccionada.name); 


    console.info(this.extensoSeleccionada.name); 

const strExt = this.extensoSeleccionada.name;
 const n = 4;
 var extension:string=strExt.substring(strExt.length - n);
console.log('prueba docx '+strExt.substring(strExt.length - n));
    var splittedExtenso = this.extensoSeleccionada.name.toString().split("."); 
    console.log(splittedExtenso[0]);
    console.log(splittedExtenso[1]);
    if(splittedExtenso[1]!='docx'){
      this.blockUI.stop();
      Swal.fire({
        title: 'Info!!!',
        text: 'Su archivo  de su extenso debe ser word',
        icon: 'info',
        timer: 2000
      });

      return;
    }
  
 


/* 
    this.nombreDocPortada = this.portadaSeleccionada.name;

    reumen.cirr_name_file = this.nombreDocPortada;
    reumen.cirr_id_ponente = this.userId; */
    console.log(this.ponencia_id);
     this._reg.editarReg(this.ponencia_id,this.portadaSeleccionada,this.extensoSeleccionada).subscribe(usr => {
   
        if(usr){
          this.blockUI.stop();
          Swal.fire('Archivos subidos', `Sus archivos se subieron con éxito!`, 'success');
          this.ponencia_id=0;
          this.resetInput();

        }

    },
      error => {
        console.log(error);
        this.blockUI.stop();
        Swal.fire({
          title: 'ERROR!!!',
          text: error.error.message,
          icon: 'error'
        });

      }); 


  }

  cerrarSesion() {
    this._log.logout();
  }

  cargarPonencias() {
    this._reg.GetResumeneslist(this.userId).subscribe(
      res => {
        this.resumen_list = res;
        console.log(this.resumen_list);
    
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }
}
