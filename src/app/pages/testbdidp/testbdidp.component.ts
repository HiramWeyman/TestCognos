import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RespTest } from 'src/app/interfaces/RespTest';
import { RespTestBDI } from 'src/app/interfaces/RespTestBDI';
import { InicioService } from 'src/app/services/inicio.service';
import { TestbaianService } from 'src/app/services/testbaian.service';
import { TestbdidpService } from 'src/app/services/testbdidp.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-testbdidp',
  templateUrl: './testbdidp.component.html',
  styleUrls: ['./testbdidp.component.css']
})
export class TestbdidpComponent {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  preguntas!: any[];
  public modelArray: RespTestBDI[] = [];
  form!: FormGroup;
  isFormSubmitted = false;
  constructor(private route: ActivatedRoute, private _ini: TestbdidpService, private fb: FormBuilder) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = new FormGroup({

      pregunta_1: new FormControl(1),
      respuesta_1: new FormControl('', Validators.required),
      pregunta_2: new FormControl(2),
      respuesta_2: new FormControl('', Validators.required),
      pregunta_3: new FormControl(3),
      respuesta_3: new FormControl('', Validators.required),
      pregunta_4: new FormControl(4),
      respuesta_4: new FormControl('', Validators.required),
      pregunta_5: new FormControl(5),
      respuesta_5: new FormControl('', Validators.required),
      pregunta_6: new FormControl(6),
      respuesta_6: new FormControl('', Validators.required),
      pregunta_7: new FormControl(7),
      respuesta_7: new FormControl('', Validators.required),
      pregunta_8: new FormControl(8),
      respuesta_8: new FormControl('', Validators.required),
      pregunta_9: new FormControl(9),
      respuesta_9: new FormControl('', Validators.required),
      pregunta_10: new FormControl(10),
      respuesta_10: new FormControl('', Validators.required),
      pregunta_11: new FormControl(11),
      respuesta_11: new FormControl('', Validators.required),
      pregunta_12: new FormControl(12),
      respuesta_12: new FormControl('', Validators.required),
      pregunta_13: new FormControl(13),
      respuesta_13: new FormControl('', Validators.required),
      pregunta_14: new FormControl(14),
      respuesta_14: new FormControl('', Validators.required),
      pregunta_15: new FormControl(15),
      respuesta_15: new FormControl('', Validators.required),
      pregunta_16: new FormControl(16),
      respuesta_16: new FormControl('', Validators.required),
      pregunta_17: new FormControl(17),
      respuesta_17: new FormControl('', Validators.required),
      pregunta_18: new FormControl(18),
      respuesta_18: new FormControl('', Validators.required),
      pregunta_19: new FormControl(19),
      respuesta_19: new FormControl('', Validators.required),
      pregunta_20: new FormControl(20),
      respuesta_20: new FormControl('', Validators.required),
      pregunta_21: new FormControl(21),
      respuesta_21: new FormControl('', Validators.required),


    });
  }
  get f() {
    return this.form.controls;
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    /*  console.log(value, valid); */
    this.blockUI.start('Guardando...');
    this.isFormSubmitted = true;
    console.log(valid);
    if (!valid) {
      console.log('Favor de contestar todas las preguntas!');
      //this.submittedValue = undefined;
    } else {

      this.modelArray.push({

        res_pregunta: value.pregunta_1,
        res_respuesta: value.respuesta_1,
        res_id_paciente: this.id,
      });

      this.modelArray.push({
        res_pregunta: value.pregunta_2,
        res_respuesta: value.respuesta_2,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_3,
        res_respuesta: value.respuesta_3,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_4,
        res_respuesta: value.respuesta_4,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_5,
        res_respuesta: value.respuesta_5,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_6,
        res_respuesta: value.respuesta_7,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_8,
        res_respuesta: value.respuesta_8,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_9,
        res_respuesta: value.respuesta_9,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_10,
        res_respuesta: value.respuesta_10,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_11,
        res_respuesta: value.respuesta_11,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_11,
        res_respuesta: value.respuesta_11,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_12,
        res_respuesta: value.respuesta_12,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_13,
        res_respuesta: value.respuesta_13,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_14,
        res_respuesta: (value.respuesta_14),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_15,
        res_respuesta: value.respuesta_15,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_16,
        res_respuesta: value.respuesta_16,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_17,
        res_respuesta: value.respuesta_17,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_18,
        res_respuesta: value.respuesta_18,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_19,
        res_respuesta: value.respuesta_19,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_20,
        res_respuesta: value.respuesta_20,
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_21,
        res_respuesta: value.respuesta_21,
        res_id_paciente: this.id,
      });

      this._ini.DeleteResp(this.id).subscribe(del => {
        if (del) {
          this._ini.EnviarResp(this.modelArray).subscribe(usr => {
   
            if(usr){
              this.blockUI.stop();
              console.log(usr);
              Swal.fire('Respuestas Guardadas', `${usr.descripcion}!`, 'success');
          
              const btn = document.getElementById('btn') as HTMLButtonElement | null;
              btn?.setAttribute('disabled', '');
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
      },error=>{
        console.log(error);
        this.blockUI.stop();
        Swal.fire({
          title: 'ERROR!!!',
          text: error.error.message,
          icon: 'error'
        });
      });

      const btn = document.getElementById('btn') as HTMLButtonElement | null;
      btn?.setAttribute('disabled', '');

      console.log(this.modelArray);
    }

  }
}
