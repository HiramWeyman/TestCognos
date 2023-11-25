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

@Component({
  selector: 'app-resumenes',
  templateUrl: './resumenes.component.html',
  styleUrls: ['./resumenes.component.css']
})
export class ResumenesComponent implements OnInit {
  @BlockUI()
  blockUI!: NgBlockUI;
  username: any;
  userId: any;
  nombreDoc: any;
  res: Resumen = new Resumen();
  mesa!: Mesas[];
  fotoSeleccionada!: File;
  @Input()
  requiredFileType!: string;
  @ViewChild('myInput')
  myInputVariable!: ElementRef;
  fileName = '';
  uploadProgress!: number;
  uploadSub!: Subscription;
  constructor(private _reg: RegistrarService, private _log: LoginService,
    public router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    if (sessionStorage['Login'] == null) {
      this.router.navigate(['/']);
    }
    if (sessionStorage['usuID'] == null) {
      this.router.navigate(['/']);
    }

    this.username = sessionStorage['Login'].toLocaleUpperCase();
    this.userId = sessionStorage['usuID'];


    this._reg.getMesas().subscribe(
      (mesa) => {
        this.mesa = mesa;
        console.log(this.mesa);
      }
    )

  }

  resetInput() {
    console.log(this.myInputVariable.nativeElement.files);
    this.myInputVariable.nativeElement.value = "";
    console.log(this.myInputVariable.nativeElement.files);
  }

  onFileSelected(event: Event) {


    /* const file:File = event.target.files[0]; */
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
          /*   this.uploadProgress = Math.round(100 * (event.loaded / event.total)); */
          this.uploadProgress = Math.round(100 * (event.loaded || 1) / (event.total || 1));

        }
      })
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    /* this.uploadSub = null; */
  }

  public seleccionarFoto(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    const file = files[0];
    console.log(files);
    this.fotoSeleccionada = file;
    console.info(this.fotoSeleccionada);
  }


  guardar(reumen: Resumen) {
    this.blockUI.start('Guardando...');
    console.log(reumen);
    if (this.fotoSeleccionada == null) {
      this.blockUI.stop();
      Swal.fire({
        title: 'ERROR!!!',
        text: 'Seleccione un Archivo',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    /*   console.info(this.fotoSeleccionada);
      console.info(this.fotoSeleccionada.name); */
    if (reumen.cirr_nom_ponencia == "" || reumen.cirr_nom_ponencia == null) {
      this.blockUI.stop();
      Swal.fire({
        title: 'ERROR!!!',
        text: 'El nombre de la ponencia es obligatorio',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    if (!reumen.cirr_id_mesa) {
      this.blockUI.stop();
      Swal.fire({
        title: 'ERROR!!!',
        text: 'La mesa es obligatoria',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    if (reumen.cirr_mail_contacto == "" || reumen.cirr_mail_contacto == null) {
      this.blockUI.stop();
      Swal.fire({
        title: 'ERROR!!!',
        text: 'El email es obligatorio',
        icon: 'info',
        timer: 2000
      });

      return;
    }

    this.nombreDoc = this.fotoSeleccionada.name;

    reumen.cirr_name_file = this.nombreDoc;
    reumen.cirr_id_ponente = this.userId;
    this._reg.editarConFoto(reumen).subscribe(usr => {
      this._reg.editarReg(usr.cirr_id, this.fotoSeleccionada).subscribe(ed => {
        console.log(ed);
        this.blockUI.stop();
        Swal.fire('Nuevo Resumen', `Resumen ${ed.cirr_name_file} registrado con éxito!`, 'success');
        this.res = new Resumen();
        this.resetInput();
      });
      //this.router.navigate(['registro']);
      /*    Swal.fire('Nuevo Ponente', `Usuario ${usr.cirr_mail_contacto} creado con éxito!`, 'success'); */
      console.log(usr.cirr_id);
      /*   this.editarFoto(); */
      //this.cargarUsers();
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

}
