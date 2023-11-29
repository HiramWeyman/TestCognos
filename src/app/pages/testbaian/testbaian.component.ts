import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RespTest } from 'src/app/interfaces/RespTest';
import { InicioService } from 'src/app/services/inicio.service';
import { TestbaianService } from 'src/app/services/testbaian.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-testbaian',
  templateUrl: './testbaian.component.html',
  styleUrls: ['./testbaian.component.css']
})
export class TestbaianComponent {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  preguntas!: any[];
  public modelArray: RespTest[] = [];
  items = [
    {  value: '0', dessc: 'Nada' },
    {  value: '1', dessc: 'Poco' },
    {  value: '2', dessc: 'Bastante' },
    {  value: '3', dessc: 'Mucho' },
  ];
  form!: FormGroup;
  isFormSubmitted = false;
  constructor(private route: ActivatedRoute, private _ini: TestbaianService, private fb: FormBuilder) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this._ini.GetPreguntas().subscribe(
      res => {
        this.preguntas = res;
        for (let i = 0; i < this.preguntas.length; i++) {

          this.form = new FormGroup({

            pregunta_1: new FormControl(this.preguntas[0].bai_id),
            respuesta_1: new FormControl('', Validators.required),
            pregunta_2: new FormControl(this.preguntas[1].bai_id),
            respuesta_2: new FormControl('', Validators.required),
            pregunta_3: new FormControl(this.preguntas[2].bai_id),
            respuesta_3: new FormControl('', Validators.required),
            pregunta_4: new FormControl(this.preguntas[3].bai_id),
            respuesta_4: new FormControl('', Validators.required),
            pregunta_5: new FormControl(this.preguntas[4].bai_id),
            respuesta_5: new FormControl('', Validators.required),
            pregunta_6: new FormControl(this.preguntas[5].bai_id),
            respuesta_6: new FormControl('', Validators.required),
            pregunta_7: new FormControl(this.preguntas[6].bai_id),
            respuesta_7: new FormControl('', Validators.required),
            pregunta_8: new FormControl(this.preguntas[7].bai_id),
            respuesta_8: new FormControl('', Validators.required),
            pregunta_9: new FormControl(this.preguntas[8].bai_id),
            respuesta_9: new FormControl('', Validators.required),
            pregunta_10: new FormControl(this.preguntas[9].bai_id),
            respuesta_10: new FormControl('', Validators.required),
            pregunta_11: new FormControl(this.preguntas[10].bai_id),
            respuesta_11: new FormControl('', Validators.required),
            pregunta_12: new FormControl(this.preguntas[11].bai_id),
            respuesta_12: new FormControl('', Validators.required),
            pregunta_13: new FormControl(this.preguntas[12].bai_id),
            respuesta_13: new FormControl('', Validators.required),
            pregunta_14: new FormControl(this.preguntas[13].bai_id),
            respuesta_14: new FormControl('', Validators.required),
            pregunta_15: new FormControl(this.preguntas[14].bai_id),
            respuesta_15: new FormControl('', Validators.required),
            pregunta_16: new FormControl(this.preguntas[15].bai_id),
            respuesta_16: new FormControl('', Validators.required),
            pregunta_17: new FormControl(this.preguntas[16].bai_id),
            respuesta_17: new FormControl('', Validators.required),
            pregunta_18: new FormControl(this.preguntas[17].bai_id),
            respuesta_18: new FormControl('', Validators.required),
            pregunta_19: new FormControl(this.preguntas[18].bai_id),
            respuesta_19: new FormControl('', Validators.required),
            pregunta_20: new FormControl(this.preguntas[19].bai_id),
            respuesta_20: new FormControl('', Validators.required),
            pregunta_21: new FormControl(this.preguntas[20].bai_id),
            respuesta_21: new FormControl('', Validators.required),
            

          });

        }

        //console.log(this.preguntas);

      }, error => {
        //console.log(error);
        Swal.fire({ title: 'ERROR!!!', text: error.message, icon: 'error' });
      }
    )
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
        res_respuesta: Number(value.respuesta_1),
        res_id_paciente: this.id,
      });

      this.modelArray.push({
        res_pregunta: value.pregunta_2,
        res_respuesta: Number(value.respuesta_2),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_3,
        res_respuesta: Number(value.respuesta_3),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_4,
        res_respuesta: Number(value.respuesta_4),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_5,
        res_respuesta: Number(value.respuesta_5),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_6,
        res_respuesta: Number(value.respuesta_7),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_8,
        res_respuesta: Number(value.respuesta_8),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_9,
        res_respuesta: Number(value.respuesta_9),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_10,
        res_respuesta: Number(value.respuesta_10),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_11,
        res_respuesta: Number(value.respuesta_11),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_11,
        res_respuesta: Number(value.respuesta_11),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_12,
        res_respuesta: Number(value.respuesta_12),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_13,
        res_respuesta: Number(value.respuesta_13),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_14,
        res_respuesta: Number(value.respuesta_14),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_15,
        res_respuesta: Number(value.respuesta_15),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_16,
        res_respuesta: Number(value.respuesta_16),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_17,
        res_respuesta: Number(value.respuesta_17),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_18,
        res_respuesta: Number(value.respuesta_18),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_19,
        res_respuesta: Number(value.respuesta_19),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_20,
        res_respuesta: Number(value.respuesta_20),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_21,
        res_respuesta: Number(value.respuesta_21),
        res_id_paciente: this.id,
      });


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

      const btn = document.getElementById('btn') as HTMLButtonElement | null;
      btn?.setAttribute('disabled', '');

      console.log(this.modelArray);
    }




  }


}
