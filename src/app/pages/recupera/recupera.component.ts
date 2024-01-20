import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecuperaService } from 'src/app/services/recupera.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.component.html',
  styleUrls: ['./recupera.component.css']
})
export class RecuperaComponent {
  correo!: any;
  pass1!:string;
  pass2!:string;
  name!: string;
  private sub: any;
  constructor(private route: ActivatedRoute,private _rec: RecuperaService,) { }
  ngOnInit() {
    this.correo = this.route.snapshot.paramMap.get('correo')?.toString();
   console.log(this.correo);
   this.sub = this.route.params.subscribe(params => {
    this.name = params['value'];
  });
  console.log(this.name);
  }

  UpdatePass(){
    const btn = document.getElementById('btn') as HTMLButtonElement | null;
    if(this.pass1==null){
      Swal.fire('Cambiar Password', 'Capture un password nuevo', 'info');
      return;
    }
    if(this.pass1==""){
      Swal.fire('Cambiar Password', 'Capture un password nuevo', 'info');
      return;
    }
    if(!this.pass1){
      Swal.fire('Cambiar Password', 'Capture un password nuevo', 'info');
      return;
    }
    if(!this.pass2){
      Swal.fire('Cambiar Password', 'Falta capturar la confirmacion de password', 'info');
      return;
    }
    if(this.pass2==null){
      Swal.fire('Cambiar Password', 'Capture un password nuevo', 'info');
      return;
    }
    if(this.pass2==""){
      Swal.fire('Cambiar Password', 'Capture un password nuevo', 'info');
      return;
    }
    if(this.pass1==this.pass2){
      this._rec.editarPass(this.correo.toString(),this.pass1.toString()).subscribe(res=>{
         if(res){
              Swal.fire('Cambiar Password', `${res.descripcion}!`, 'success'); 
              btn?.setAttribute('disabled', '');
         }
      });
    
    }
    else{
      Swal.fire('Cambiar Password', 'Los password no coinciden', 'info');
    }
  }
}
