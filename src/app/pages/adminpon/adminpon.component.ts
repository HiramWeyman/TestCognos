import { AfterViewInit, Component, ElementRef, OnInit, ViewChild,Inject } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableDataSourcePaginator, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { PonenciasService } from 'src/app/services/ponencias.service';
import { Resumen } from 'src/app/interfaces/resumen';
import Swal from 'sweetalert2';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResumenLista } from 'src/app/interfaces/resumenLista';
import { NavbarService } from 'src/app/services/navbar.service';
import * as XLSX from 'xlsx';
import { PonenciaLista } from 'src/app/interfaces/PonenciaLista';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RevisoresList } from 'src/app/interfaces/RevisoresList';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Revisor } from 'src/app/interfaces/Revisor';
import { BlockUI, NgBlockUI, BlockUIModule, BlockUIService } from 'ng-block-ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminpon',
  templateUrl: './adminpon.component.html',
  styleUrls: ['./adminpon.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatButtonModule,MatMenuModule,MatDialogModule,BlockUIModule],
})
export class AdminponComponent implements OnInit {
  public urlEndPoint = `${environment.rutaAPI}`;
  resumenes!: Resumen[];
  ponencia_list!: PonenciaLista[];
  fec: any;
  @ViewChild('TABLE')
  table!: ElementRef;
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  @ViewChild('menuTrigger2')
  menuTrigger2!: MatMenuTrigger;

  @BlockUI()
  blockUI!: NgBlockUI;

  constructor(private router: Router, private paginator: MatPaginatorIntl, private _res: PonenciasService, private http: HttpClient, public nav: NavbarService,public dialog: MatDialog) {
    this.paginator.itemsPerPageLabel = "Registros por página";
  }
  ngOnInit(): void {

    this.nav.hide();
    this.cargarPonencias();
  }



  displayedColumns: string[] = ['vcrp_id_ponencia', 'vcrp_ponencia_desc', 'vcrp_mesa_desc', 'vcrp_mail_contacto', 'vcrp_ponente1', 'vcrp_ponente2', 'vcrp_ponente3', 'portada','ponencia','carta_cesion','presentacion','vcrp_revisor1','vcrp_revisor2','vcrp_revisor3','estatus', 'acciones'];
  displayedColumns2: string[] = ['vcrp_id_ponencia', 'vcrp_ponencia_desc', 'vcrp_mesa_desc', 'vcrp_mail_contacto', 'vcrp_ponente1', 'vcrp_ponente2', 'vcrp_ponente3', 'portada','ponencia','carta_cesion','presentacion','vcrp_revisor1','vcrp_revisor2','vcrp_revisor3','estatus', ];

  dataSource!: MatTableDataSource<PonenciaLista, MatTableDataSourcePaginator>;
  dataSource2!: MatTableDataSource<PonenciaLista, MatTableDataSourcePaginator>;
  @ViewChild('paginatorFirst')
  paginatorFirst!: MatPaginator;

  @ViewChild('paginatorSecond')
  paginatorSecond!: MatPaginator;


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /*    applyFilter(event: Event) {
       const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter = filterValue.trim().toLowerCase();
     }
  */
  cargarPonencias() {
    this._res.GetPonencias().subscribe(
      res => {
        this.ponencia_list = res;
        console.log(this.ponencia_list);
        this.dataSource = new MatTableDataSource(this.ponencia_list);
        this.dataSource2 = new MatTableDataSource(this.ponencia_list);
        // this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator = this.paginatorFirst;
        this.dataSource2.paginator = this.paginatorSecond;
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }

  exportAsExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Tabla_Ponencias.xlsx');

  }


  MandarCartaAceptacion(id:number){
    this.blockUI.start('Enviando...');
    this._res.CorreoCartaAceptacion(id).subscribe(
      pon => {
      if(pon){
        this.blockUI.stop();
        Swal.fire({ title: 'Carta aceptación', text: 'La carta de aceptación se envió correctamente', icon: 'success' });

      }
        
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }


  getImageFromService(url: any, nom: string,tipo:string) {
    console.log(url);
    console.log(nom);
    /*       this.blockUI.start('Abriendo imagen...'); */
    this.printImage(url).subscribe((response: BlobPart) => {
      const file = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const fileURL = URL.createObjectURL(file);
      var link = document.createElement('a');
      const filename = tipo+nom;
      link.href = fileURL;
      /* link.style = "display: none"; */
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      /*  window.open(link); */
      /*     this.blockUI.stop(); */
    },
      (error: { error: { Message: any; }; }) => {
        console.log(error);
        console.log(error.error.Message);
        Swal.fire({
          title: 'ERROR!!!',
          text: error.error.Message,
          icon: 'error'
        });
      });

  }

  printImage(url: any): any {
    const httpOptions = {
      responseType: 'arraybuffer' as 'json'
    };
    return this.http.get<any>(url, httpOptions);
  }


  editarEstatusPon(id: number, estatus: string) {
    console.log(id);
    console.log(estatus);
    this.blockUI.start('Guardando...');
    this._res.editarEstatusPon(id, estatus).subscribe(
      pon => {
        console.log(pon);
        console.log(pon.cirp_estatus);
      /*   this.router.navigate(['/adminpon']); */
        if (pon.cirp_estatus == 'A') {
          
          this._res.CorreoCartaAceptacion(id).subscribe(
            pon => {
            if(pon){
             
              Swal.fire({ title: 'Carta Aceptación', text: 'La carta de Aceptación se envió correctamente', icon: 'success' });
              this.blockUI.stop();
            }
              
      
            }, error => {
              //console.log(error);
              Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
            }
          )

       /*    this.ngOnInit(); */
         /*  Swal.fire({ title: 'Estatus', text: 'Ponencia Aprobado', icon: 'success' }); */

        } 
        
      /*   else if (pon.cirp_estatus == 'O') {
          this.ngOnInit();
          Swal.fire({ title: 'Estatus', text: 'Ponencia Aprobada con observaciones', icon: 'info' });

        }  */
        
        else {
          this.ngOnInit();
          Swal.fire({ title: 'Estatus', text: 'Ponencia Rechazada', icon: 'info' });

        }
        

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
    this.cargarPonencias();
    this.ngOnInit();
  
  }

  openDialog(revisor:number,id_ponencia:number,nom_ponencia:string) {
  /*   console.log(num); */
  /* console.log(id_ponencia); */

    let dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {
      height: '300px',
      width: '600px',
      data: {
        revisor: revisor,
        idponencia:id_ponencia,
        nombre_ponencia:nom_ponencia
      },
      
    });
   /*  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false}); */

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  openDialog2(revisor:number,id_ponencia:number,nom_ponencia:string) {
    /*   console.log(num); */
    /* console.log(id_ponencia); */
  
      let dialogRef2 = this.dialog.open(DialogFromMenuExampleDialogObserv, {
        height: '400px',
        width: '600px',
        data: {
          idponencia:id_ponencia,
          revisor
        },
        
      });
     /*  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {restoreFocus: false}); */
  
      // Manually restore focus to the menu trigger since the element that
      // opens the dialog won't be in the DOM any more when the dialog closes.
      dialogRef2.afterClosed().subscribe(() => this.menuTrigger.focus());
    }


}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatDialogModule,MatSelectModule,CommonModule,BlockUIModule],
})
export class DialogFromMenuExampleDialog implements OnInit{
  revisores_list!: RevisoresList[];
  rev:Revisor=new Revisor();
  revisor!:number;
  idx_ponencia!:number;
  @BlockUI()
  blockUI!: NgBlockUI;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _res: PonenciasService,private router: Router,private blockUIService: BlockUIService) {


  }
  ngOnInit(): void {
    this.cargarRevisores();
  }

  cargarRevisores() {
    this._res.GetRevisores().subscribe(
      res => {
        this.revisores_list = res;
        console.log(this.revisores_list);
    
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }

  onSelected(value:string): void {
		console.log(value);
    var splitted = value.split(",");
    var id_rev= splitted[0];
    var rev_mail= splitted[1];
    var rev_nom= splitted[2];

    this.rev.rev_id_revisor=Number(id_rev);
    this.rev.rev_email=rev_mail;
    this.rev.rev_id_ponencia=this.data.idponencia;
    this.rev.rev_num_revisor=this.data.revisor;
    this.rev.rev_nom_ponencia=this.data.nombre_ponencia;
    this.rev.rev_nom_revisor=rev_nom;

    console.log(this.rev);
	}


  editarRevisorPon() {
    this.blockUIService.start('Guardando...');
   /*  this.blockUI.start('Guardando...'); */
    console.log(this.rev);
    this._res.UpdateRevisores(this.rev).subscribe(
      pon => {
      if(pon){
        this.blockUIService.stop;
        Swal.fire({ title: 'Revisores', text: 'Revisor Asignado correctamente', icon: 'success' });
      
        this.rev=new Revisor();
        this.refresh();
      }
        

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
   
    this.ngOnInit();
  }

  refresh(): void {
    window.location.reload();
  }

}




@Component({
  selector: 'dialogObserv',
  templateUrl: 'dialogObserv.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatDialogModule,MatSelectModule,CommonModule,BlockUIModule,FormsModule],
})
export class DialogFromMenuExampleDialogObserv implements OnInit{
  revisores_list!: RevisoresList[];
  rev:Revisor=new Revisor();
  revisor!:number;
  idx_ponencia!:number;
  observacion!:string;

  pon:PonenciaLista=new PonenciaLista();
  

  ponencia_list: PonenciaLista=new PonenciaLista();
  @BlockUI()
  blockUI!: NgBlockUI;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _res: PonenciasService,private router: Router,private blockUIService: BlockUIService) {


  }
  ngOnInit(): void {
 console.log('Segundo Modal');
 console.log(this.data.idponencia);
 console.log(this.data.revisor);
 this.cargarPonencias();
  }


  RegistrarObs(id:number,num_rev:number,observacion:string){
    console.log(id);
    console.log(num_rev);
    console.log(observacion);

    this._res.editarObservacionPon(id,num_rev,observacion).subscribe(
      pon => {
      if(pon){
        this.blockUIService.stop;
        Swal.fire({ title: 'Observaciones', text: 'Observacion registrada correctamente', icon: 'success' });
      
      /*   this.rev=new Revisor(); */
        this.refresh();
      }
        

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )

  }
 
/*   ActualizarObs(id:number,num_rev:number,observacion:string){
    console.log(id);
    console.log(num_rev);
    console.log(observacion);
  } */

  cargarPonencias() {
    this._res.GetPonenciasUpObservacion(this.data.idponencia).subscribe(
      res => {
        this.ponencia_list = res;
        console.log('Carga la ponencia');
        console.log(this.ponencia_list);

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }

  editarObservacionPon() {
    this.blockUIService.start('Guardando...');
   /*  this.blockUI.start('Guardando...'); */
    console.log(this.rev);
    this._res.UpdateRevisores(this.rev).subscribe(
      pon => {
      if(pon){
        this.blockUIService.stop;
        Swal.fire({ title: 'Revisores', text: 'Revisor Asignado correctamente', icon: 'success' });
      
        this.rev=new Revisor();
        this.refresh();
      }
        

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
   
    this.ngOnInit();
  }


  CartaAceptacion(id:number) {
    this.blockUIService.start('Guardando...');
   /*  this.blockUI.start('Guardando...'); */
    console.log(this.rev);
    this._res.CorreoCartaAceptacion(id).subscribe(
      pon => {
      if(pon){
        this.blockUIService.stop;
        Swal.fire({ title: 'Revisores', text: 'Revisor Asignado correctamente', icon: 'success' });
      
        this.rev=new Revisor();
        this.refresh();
      }
        

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
   
    this.ngOnInit();
  }



  refresh(): void {
    window.location.reload();
  }

}
