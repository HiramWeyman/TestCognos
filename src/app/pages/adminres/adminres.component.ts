import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-adminres',
  templateUrl: './adminres.component.html',
  styleUrls: ['./adminres.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatButtonModule],
})
export class AdminresComponent implements OnInit {
  public urlEndPoint = `${environment.rutaAPI}`;
  resumenes!: Resumen[];
  resumen_list!: ResumenLista[];
  fec: any;
  @ViewChild('TABLE')
  table!: ElementRef;
  constructor(private router: Router, private paginator: MatPaginatorIntl, private _res: PonenciasService, private http: HttpClient,public nav: NavbarService) {
    this.paginator.itemsPerPageLabel = "Registros por página";
  }
  ngOnInit(): void {
  
    this.nav.hide();
    this.cargarResumenes();
  }

  displayedColumns: string[] = ['vcrr_id_pon', 'vcrr_ponencia', 'vcrr_nombre', 'vcrr_mail','vcrr_mesa','vcrr_f_recepcion','vcrr_file_name','vcrr_descrip', 'descarga', 'acciones'];
  displayedColumns2: string[] = ['vcrr_id_pon', 'vcrr_ponencia', 'vcrr_nombre', 'vcrr_mail','vcrr_mesa','vcrr_f_recepcion','vcrr_file_name','vcrr_descrip'];

  dataSource!: MatTableDataSource<ResumenLista, MatTableDataSourcePaginator>;
  dataSource2!: MatTableDataSource<ResumenLista, MatTableDataSourcePaginator>;
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
  cargarResumenes() {
    this._res.GetResumenes().subscribe(
      res => {
        this.resumen_list = res;
        console.log(this.resumen_list);
        this.dataSource = new MatTableDataSource(this.resumen_list);
        this.dataSource2 = new MatTableDataSource(this.resumen_list);
        // this.dataSource.paginator = this.paginator; 
        this.dataSource.paginator = this.paginatorFirst;
        this.dataSource2.paginator = this.paginatorSecond;
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
  }

  exportAsExcel()
  {
    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);//converts a DOM TABLE element to a worksheet
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'Tabla_Resumenes.xlsx');

  }

  getImageFromService(url: any, nom: string) {
    console.log(url);
    console.log(nom);
    /*       this.blockUI.start('Abriendo imagen...'); */
    this.printImage(url).subscribe((response: BlobPart) => {
      const file = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const fileURL = URL.createObjectURL(file);
      var link = document.createElement('a');
      const filename = nom;
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


  EditEstatus(id: number, estatus: string) {
    console.log(id);
    console.log(estatus);
    this._res.editarEstatus(id,estatus).subscribe(
      res => {
        console.log(res);
        console.log(res.cirr_estatus);
        this.router.navigate(['/adminres']);
      if(res.cirr_estatus=='A'){
        this.ngOnInit();
        Swal.fire({ title: 'Estatus', text: 'Resumen Aprobado', icon: 'success' });
        
      }else{
        this.ngOnInit();
        Swal.fire({ title: 'Estatus', text: 'Resumen Rechazado', icon: 'info' });
        
      }
  
      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
    this.cargarResumenes();
    this.ngOnInit();
  }

}
