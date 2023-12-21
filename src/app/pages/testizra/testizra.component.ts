import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RespTest } from 'src/app/interfaces/RespTest';
import { scidService } from 'src/app/services/scid.service';
import { TestcreenciasService } from 'src/app/services/testcreencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testizra',
  templateUrl: './testizra.component.html',
  styleUrls: ['./testizra.component.css']
})
export class TestizraComponent {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  preguntas!: any[];
  public modelArray: RespTest[] = [];

  form!: FormGroup;
  form2!: FormGroup;
  form3!: FormGroup;
  isFormSubmitted = false;
  constructor(private route: ActivatedRoute, private _ini: scidService, private fb: FormBuilder) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.form = new FormGroup({

      //Test ISRA parte C
      pregunta_1c: new FormControl(1),
      res_1c_1: new FormControl('', Validators.required),
      res_1c_2: new FormControl('', Validators.required),
      res_1c_3: new FormControl('', Validators.required),
      res_1c_4: new FormControl('', Validators.required),
      res_1c_5: new FormControl('', Validators.required),
      res_1c_6: new FormControl('', Validators.required),
      res_1c_7: new FormControl('', Validators.required),
      obvs_1c: new FormControl(''),
      sum_res_1c: new FormControl(),

      pregunta_2c: new FormControl(2),
      res_2c_1: new FormControl('', Validators.required),
      res_2c_2: new FormControl('', Validators.required),
      res_2c_3: new FormControl('', Validators.required),
      res_2c_4: new FormControl('', Validators.required),
      res_2c_5: new FormControl('', Validators.required),
      res_2c_6: new FormControl('', Validators.required),
      res_2c_7: new FormControl('', Validators.required),
      obvs_2c: new FormControl(''),
      sum_res_2c: new FormControl(''),

      pregunta_3c: new FormControl(3),
      res_3c_1: new FormControl('', Validators.required),
      res_3c_2: new FormControl('', Validators.required),
      res_3c_3: new FormControl('', Validators.required),
      res_3c_4: new FormControl('', Validators.required),
      res_3c_5: new FormControl('', Validators.required),
      res_3c_6: new FormControl('', Validators.required),
      res_3c_7: new FormControl('', Validators.required),
      obvs_3c: new FormControl(''),
      sum_res_3c: new FormControl(''),

      pregunta_4c: new FormControl(4),
      res_4c_1: new FormControl('', Validators.required),
      res_4c_2: new FormControl('', Validators.required),
      res_4c_3: new FormControl('', Validators.required),
      res_4c_4: new FormControl('', Validators.required),
      res_4c_5: new FormControl('', Validators.required),
      res_4c_6: new FormControl('', Validators.required),
      res_4c_7: new FormControl('', Validators.required),
      obvs_4c: new FormControl(''),
      sum_res_4c: new FormControl(''),

      pregunta_5c: new FormControl(5),
      res_5c_1: new FormControl('', Validators.required),
      res_5c_2: new FormControl('', Validators.required),
      res_5c_3: new FormControl('', Validators.required),
      res_5c_4: new FormControl('', Validators.required),
      res_5c_5: new FormControl('', Validators.required),
      res_5c_6: new FormControl('', Validators.required),
      res_5c_7: new FormControl('', Validators.required),
      obvs_5c: new FormControl(''),
      sum_res_5c: new FormControl(''),

      pregunta_6c: new FormControl(6),
      res_6c_1: new FormControl('', Validators.required),
      res_6c_2: new FormControl('', Validators.required),
      res_6c_3: new FormControl('', Validators.required),
      res_6c_4: new FormControl('', Validators.required),
      res_6c_5: new FormControl('', Validators.required),
      res_6c_6: new FormControl('', Validators.required),
      res_6c_7: new FormControl('', Validators.required),
      obvs_6c: new FormControl(''),
      sum_res_6c: new FormControl(''),

      pregunta_7c: new FormControl(7),
      res_7c_1: new FormControl('', Validators.required),
      res_7c_2: new FormControl('', Validators.required),
      res_7c_3: new FormControl('', Validators.required),
      res_7c_4: new FormControl('', Validators.required),
      res_7c_5: new FormControl('', Validators.required),
      res_7c_6: new FormControl('', Validators.required),
      res_7c_7: new FormControl('', Validators.required),
      obvs_7c: new FormControl(''),
      sum_res_7c: new FormControl(''),

      pregunta_8c: new FormControl(8),
      res_8c_1: new FormControl('', Validators.required),
      res_8c_2: new FormControl('', Validators.required),
      res_8c_3: new FormControl('', Validators.required),
      res_8c_4: new FormControl('', Validators.required),
      res_8c_5: new FormControl('', Validators.required),
      res_8c_6: new FormControl('', Validators.required),
      res_8c_7: new FormControl('', Validators.required),
      obvs_8c: new FormControl(''),
      sum_res_8c: new FormControl(''),

      pregunta_9c: new FormControl(9),
      res_9c_1: new FormControl('', Validators.required),
      res_9c_2: new FormControl('', Validators.required),
      res_9c_3: new FormControl('', Validators.required),
      res_9c_4: new FormControl('', Validators.required),
      res_9c_5: new FormControl('', Validators.required),
      res_9c_6: new FormControl('', Validators.required),
      res_9c_7: new FormControl('', Validators.required),
      obvs_9c: new FormControl(''),
      sum_res_9c: new FormControl(''),

      pregunta_10c: new FormControl(10),
      res_10c_1: new FormControl('', Validators.required),
      res_10c_2: new FormControl('', Validators.required),
      res_10c_3: new FormControl('', Validators.required),
      res_10c_4: new FormControl('', Validators.required),
      res_10c_5: new FormControl('', Validators.required),
      res_10c_6: new FormControl('', Validators.required),
      res_10c_7: new FormControl('', Validators.required),
      obvs_10c: new FormControl(''),
      sum_res_10c: new FormControl(''),

      pregunta_11c: new FormControl(11),
      res_11c_1: new FormControl('', Validators.required),
      res_11c_2: new FormControl('', Validators.required),
      res_11c_3: new FormControl('', Validators.required),
      res_11c_4: new FormControl('', Validators.required),
      res_11c_5: new FormControl('', Validators.required),
      res_11c_6: new FormControl('', Validators.required),
      res_11c_7: new FormControl('', Validators.required),
      obvs_11c: new FormControl(''),
      sum_res_11c: new FormControl(''),

      pregunta_12c: new FormControl(12),
      res_12c_1: new FormControl('', Validators.required),
      res_12c_2: new FormControl('', Validators.required),
      res_12c_3: new FormControl('', Validators.required),
      res_12c_4: new FormControl('', Validators.required),
      res_12c_5: new FormControl('', Validators.required),
      res_12c_6: new FormControl('', Validators.required),
      res_12c_7: new FormControl('', Validators.required),
      obvs_12c: new FormControl(''),
      sum_res_12c: new FormControl(''),

      pregunta_13c: new FormControl(13),
      res_13c_1: new FormControl('', Validators.required),
      res_13c_2: new FormControl('', Validators.required),
      res_13c_3: new FormControl('', Validators.required),
      res_13c_4: new FormControl('', Validators.required),
      res_13c_5: new FormControl('', Validators.required),
      res_13c_6: new FormControl('', Validators.required),
      res_13c_7: new FormControl('', Validators.required),
      obvs_13c: new FormControl(''),
      sum_res_13c: new FormControl(''),

      pregunta_14c: new FormControl(14),
      res_14c_1: new FormControl('', Validators.required),
      res_14c_2: new FormControl('', Validators.required),
      res_14c_3: new FormControl('', Validators.required),
      res_14c_4: new FormControl('', Validators.required),
      res_14c_5: new FormControl('', Validators.required),
      res_14c_6: new FormControl('', Validators.required),
      res_14c_7: new FormControl('', Validators.required),
      obvs_14c: new FormControl(''),
      sum_res_14c: new FormControl(''),

      pregunta_15c: new FormControl(15),
      res_15c_1: new FormControl('', Validators.required),
      res_15c_2: new FormControl('', Validators.required),
      res_15c_3: new FormControl('', Validators.required),
      res_15c_4: new FormControl('', Validators.required),
      res_15c_5: new FormControl('', Validators.required),
      res_15c_6: new FormControl('', Validators.required),
      res_15c_7: new FormControl('', Validators.required),
      obvs_15c: new FormControl(''),
      sum_res_15c: new FormControl(''),

      pregunta_16c: new FormControl(16),
      res_16c_1: new FormControl('', Validators.required),
      res_16c_2: new FormControl('', Validators.required),
      res_16c_3: new FormControl('', Validators.required),
      res_16c_4: new FormControl('', Validators.required),
      res_16c_5: new FormControl('', Validators.required),
      res_16c_6: new FormControl('', Validators.required),
      res_16c_7: new FormControl('', Validators.required),
      obvs_16c: new FormControl(''),
      sum_res_16c: new FormControl(''),

      pregunta_17c: new FormControl(17),
      res_17c_1: new FormControl('', Validators.required),
      res_17c_2: new FormControl('', Validators.required),
      res_17c_3: new FormControl('', Validators.required),
      res_17c_4: new FormControl('', Validators.required),
      res_17c_5: new FormControl('', Validators.required),
      res_17c_6: new FormControl('', Validators.required),
      res_17c_7: new FormControl('', Validators.required),
      obvs_17c: new FormControl(''),
      sum_res_17c: new FormControl(''),

      pregunta_18c: new FormControl(18),
      res_18c_1: new FormControl('', Validators.required),
      res_18c_2: new FormControl('', Validators.required),
      res_18c_3: new FormControl('', Validators.required),
      res_18c_4: new FormControl('', Validators.required),
      res_18c_5: new FormControl('', Validators.required),
      res_18c_6: new FormControl('', Validators.required),
      res_18c_7: new FormControl('', Validators.required),
      obvs_18c: new FormControl(''),
      sum_res_18c: new FormControl(''),

      pregunta_19c: new FormControl(19),
      res_19c_1: new FormControl('', Validators.required),
      res_19c_2: new FormControl('', Validators.required),
      res_19c_3: new FormControl('', Validators.required),
      res_19c_4: new FormControl('', Validators.required),
      res_19c_5: new FormControl('', Validators.required),
      res_19c_6: new FormControl('', Validators.required),
      res_19c_7: new FormControl('', Validators.required),
      obvs_19c: new FormControl(''),
      sum_res_19c: new FormControl(''),

      pregunta_20c: new FormControl(20),
      res_20c_1: new FormControl('', Validators.required),
      res_20c_2: new FormControl('', Validators.required),
      res_20c_3: new FormControl('', Validators.required),
      res_20c_4: new FormControl('', Validators.required),
      res_20c_5: new FormControl('', Validators.required),
      res_20c_6: new FormControl('', Validators.required),
      res_20c_7: new FormControl('', Validators.required),
      obvs_20c: new FormControl(''),
      sum_res_20c: new FormControl(''),

      pregunta_21c: new FormControl(21),
      res_21c_1: new FormControl('', Validators.required),
      res_21c_2: new FormControl('', Validators.required),
      res_21c_3: new FormControl('', Validators.required),
      res_21c_4: new FormControl('', Validators.required),
      res_21c_5: new FormControl('', Validators.required),
      res_21c_6: new FormControl('', Validators.required),
      res_21c_7: new FormControl('', Validators.required),
      obvs_21c: new FormControl(''),
      sum_res_21c: new FormControl(''),

      pregunta_22c: new FormControl(22),
      res_22c_1: new FormControl('', Validators.required),
      res_22c_2: new FormControl('', Validators.required),
      res_22c_3: new FormControl('', Validators.required),
      res_22c_4: new FormControl('', Validators.required),
      res_22c_5: new FormControl('', Validators.required),
      res_22c_6: new FormControl('', Validators.required),
      res_22c_7: new FormControl('', Validators.required),
      obvs_22c: new FormControl(''),
      sum_res_22c: new FormControl(''),

      pregunta_23c: new FormControl(23),
      res_23c_1: new FormControl('', Validators.required),
      res_23c_2: new FormControl('', Validators.required),
      res_23c_3: new FormControl('', Validators.required),
      res_23c_4: new FormControl('', Validators.required),
      res_23c_5: new FormControl('', Validators.required),
      res_23c_6: new FormControl('', Validators.required),
      res_23c_7: new FormControl('', Validators.required),
      obvs_23c: new FormControl(''),
      sum_res_23c: new FormControl(''),

       //Test ISRA parte F

       pregunta_1f: new FormControl(1),
       res_1f_1: new FormControl('', Validators.required),
       res_1f_2: new FormControl('', Validators.required),
       res_1f_3: new FormControl('', Validators.required),
       res_1f_4: new FormControl('', Validators.required),
       res_1f_5: new FormControl('', Validators.required),
       res_1f_6: new FormControl('', Validators.required),
       res_1f_7: new FormControl('', Validators.required),
       res_1f_8: new FormControl('', Validators.required),
       res_1f_9: new FormControl('', Validators.required),
       res_1f_10: new FormControl('', Validators.required),
       obvs_1f: new FormControl(''),
       sum_res_1f: new FormControl(''),
 
      pregunta_2f: new FormControl(2),
       res_2f_1: new FormControl('', Validators.required),
       res_2f_2: new FormControl('', Validators.required),
       res_2f_3: new FormControl('', Validators.required),
       res_2f_4: new FormControl('', Validators.required),
       res_2f_5: new FormControl('', Validators.required),
       res_2f_6: new FormControl('', Validators.required),
       res_2f_7: new FormControl('', Validators.required),
       res_2f_8: new FormControl('', Validators.required),
       res_2f_9: new FormControl('', Validators.required),
       res_2f_10: new FormControl('', Validators.required),
       obvs_2f: new FormControl(''),
       sum_res_2f: new FormControl(''),
 
       pregunta_3f: new FormControl(3),
       res_3f_1: new FormControl('', Validators.required),
       res_3f_2: new FormControl('', Validators.required),
       res_3f_3: new FormControl('', Validators.required),
       res_3f_4: new FormControl('', Validators.required),
       res_3f_5: new FormControl('', Validators.required),
       res_3f_6: new FormControl('', Validators.required),
       res_3f_7: new FormControl('', Validators.required),
       res_3f_8: new FormControl('', Validators.required),
       res_3f_9: new FormControl('', Validators.required),
       res_3f_10: new FormControl('', Validators.required),
       obvs_3f: new FormControl(''),
       sum_res_3f: new FormControl(''),
 
       pregunta_4f: new FormControl(4),
       res_4f_1: new FormControl('', Validators.required),
       res_4f_2: new FormControl('', Validators.required),
       res_4f_3: new FormControl('', Validators.required),
       res_4f_4: new FormControl('', Validators.required),
       res_4f_5: new FormControl('', Validators.required),
       res_4f_6: new FormControl('', Validators.required),
       res_4f_7: new FormControl('', Validators.required),
       res_4f_8: new FormControl('', Validators.required),
       res_4f_9: new FormControl('', Validators.required),
       res_4f_10: new FormControl('', Validators.required),
       obvs_4f: new FormControl(''),
       sum_res_4f: new FormControl(''),
 
       pregunta_5f: new FormControl(5),
       res_5f_1: new FormControl('', Validators.required),
       res_5f_2: new FormControl('', Validators.required),
       res_5f_3: new FormControl('', Validators.required),
       res_5f_4: new FormControl('', Validators.required),
       res_5f_5: new FormControl('', Validators.required),
       res_5f_6: new FormControl('', Validators.required),
       res_5f_7: new FormControl('', Validators.required),
       res_5f_8: new FormControl('', Validators.required),
       res_5f_9: new FormControl('', Validators.required),
       res_5f_10: new FormControl('', Validators.required),
       obvs_5f: new FormControl(''),
       sum_res_5f: new FormControl(''),

      pregunta_6f: new FormControl(6),
       res_6f_1: new FormControl('', Validators.required),
       res_6f_2: new FormControl('', Validators.required),
       res_6f_3: new FormControl('', Validators.required),
       res_6f_4: new FormControl('', Validators.required),
       res_6f_5: new FormControl('', Validators.required),
       res_6f_6: new FormControl('', Validators.required),
       res_6f_7: new FormControl('', Validators.required),
       res_6f_8: new FormControl('', Validators.required),
       res_6f_9: new FormControl('', Validators.required),
       res_6f_10: new FormControl('', Validators.required),
       obvs_6f: new FormControl(''),
       sum_res_6f: new FormControl(''),
 
       pregunta_7f: new FormControl(7),
       res_7f_1: new FormControl('', Validators.required),
       res_7f_2: new FormControl('', Validators.required),
       res_7f_3: new FormControl('', Validators.required),
       res_7f_4: new FormControl('', Validators.required),
       res_7f_5: new FormControl('', Validators.required),
       res_7f_6: new FormControl('', Validators.required),
       res_7f_7: new FormControl('', Validators.required),
       res_7f_8: new FormControl('', Validators.required),
       res_7f_9: new FormControl('', Validators.required),
       res_7f_10: new FormControl('', Validators.required),
       obvs_7f: new FormControl(''),
       sum_res_7f: new FormControl(''),
 
       pregunta_8f: new FormControl(8),
       res_8f_1: new FormControl('', Validators.required),
       res_8f_2: new FormControl('', Validators.required),
       res_8f_3: new FormControl('', Validators.required),
       res_8f_4: new FormControl('', Validators.required),
       res_8f_5: new FormControl('', Validators.required),
       res_8f_6: new FormControl('', Validators.required),
       res_8f_7: new FormControl('', Validators.required),
       res_8f_8: new FormControl('', Validators.required),
       res_8f_9: new FormControl('', Validators.required),
       res_8f_10: new FormControl('', Validators.required),
       obvs_8f: new FormControl(''),
       sum_res_8f: new FormControl(''),
 
       pregunta_9f: new FormControl(9),
       res_9f_1: new FormControl('', Validators.required),
       res_9f_2: new FormControl('', Validators.required),
       res_9f_3: new FormControl('', Validators.required),
       res_9f_4: new FormControl('', Validators.required),
       res_9f_5: new FormControl('', Validators.required),
       res_9f_6: new FormControl('', Validators.required),
       res_9f_7: new FormControl('', Validators.required),
       res_9f_8: new FormControl('', Validators.required),
       res_9f_9: new FormControl('', Validators.required),
       res_9f_10: new FormControl('', Validators.required),
       obvs_9f: new FormControl(''),
       sum_res_9f: new FormControl(''),
 
       pregunta_10f: new FormControl(10),
       res_10f_1: new FormControl('', Validators.required),
       res_10f_2: new FormControl('', Validators.required),
       res_10f_3: new FormControl('', Validators.required),
       res_10f_4: new FormControl('', Validators.required),
       res_10f_5: new FormControl('', Validators.required),
       res_10f_6: new FormControl('', Validators.required),
       res_10f_7: new FormControl('', Validators.required),
       res_10f_8: new FormControl('', Validators.required),
       res_10f_9: new FormControl('', Validators.required),
       res_10f_10: new FormControl('', Validators.required),
       obvs_10f: new FormControl(''),
       sum_res_10f: new FormControl(''),
 
       pregunta_11f: new FormControl(11),
       res_11f_1: new FormControl('', Validators.required),
       res_11f_2: new FormControl('', Validators.required),
       res_11f_3: new FormControl('', Validators.required),
       res_11f_4: new FormControl('', Validators.required),
       res_11f_5: new FormControl('', Validators.required),
       res_11f_6: new FormControl('', Validators.required),
       res_11f_7: new FormControl('', Validators.required),
       res_11f_8: new FormControl('', Validators.required),
       res_11f_9: new FormControl('', Validators.required),
       res_11f_10: new FormControl('', Validators.required),
       obvs_11f: new FormControl(''),
       sum_res_11f: new FormControl(''),



  
 

       //Test ISRA parte M






      })

       
    
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

      this.modelArray.push({

        res_pregunta: value.pregunta_22,
        res_respuesta: Number(value.respuesta_22),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_23,
        res_respuesta: Number(value.respuesta_23),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_24,
        res_respuesta: Number(value.respuesta_24),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_25,
        res_respuesta: Number(value.respuesta_25),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_26,
        res_respuesta: Number(value.respuesta_26),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_27,
        res_respuesta: Number(value.respuesta_27),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_28,
        res_respuesta: Number(value.respuesta_28),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_29,
        res_respuesta: Number(value.respuesta_29),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_30,
        res_respuesta: Number(value.respuesta_30),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_31,
        res_respuesta: Number(value.respuesta_31),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_32,
        res_respuesta: Number(value.respuesta_32),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_33,
        res_respuesta: Number(value.respuesta_33),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_34,
        res_respuesta: Number(value.respuesta_34),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_35,
        res_respuesta: Number(value.respuesta_35),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_36,
        res_respuesta: Number(value.respuesta_36),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_37,
        res_respuesta: Number(value.respuesta_37),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_38,
        res_respuesta: Number(value.respuesta_38),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_39,
        res_respuesta: Number(value.respuesta_39),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_40,
        res_respuesta: Number(value.respuesta_40),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_41,
        res_respuesta: Number(value.respuesta_41),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_42,
        res_respuesta: Number(value.respuesta_42),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_43,
        res_respuesta: Number(value.respuesta_43),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_44,
        res_respuesta: Number(value.respuesta_44),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_45,
        res_respuesta: Number(value.respuesta_45),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_46,
        res_respuesta: Number(value.respuesta_46),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_47,
        res_respuesta: Number(value.respuesta_47),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_48,
        res_respuesta: Number(value.respuesta_48),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_49,
        res_respuesta: Number(value.respuesta_49),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_50,
        res_respuesta: Number(value.respuesta_50),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_51,
        res_respuesta: Number(value.respuesta_51),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_52,
        res_respuesta: Number(value.respuesta_52),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_53,
        res_respuesta: Number(value.respuesta_53),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_54,
        res_respuesta: Number(value.respuesta_54),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_55,
        res_respuesta: Number(value.respuesta_55),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_56,
        res_respuesta: Number(value.respuesta_56),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_57,
        res_respuesta: Number(value.respuesta_57),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_58,
        res_respuesta: Number(value.respuesta_58),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_59,
        res_respuesta: Number(value.respuesta_59),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_60,
        res_respuesta: Number(value.respuesta_60),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_61,
        res_respuesta: Number(value.respuesta_61),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_62,
        res_respuesta: Number(value.respuesta_62),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_63,
        res_respuesta: Number(value.respuesta_63),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_64,
        res_respuesta: Number(value.respuesta_64),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_65,
        res_respuesta: Number(value.respuesta_65),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_66,
        res_respuesta: Number(value.respuesta_66),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_67,
        res_respuesta: Number(value.respuesta_67),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_68,
        res_respuesta: Number(value.respuesta_68),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_69,
        res_respuesta: Number(value.respuesta_69),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_70,
        res_respuesta: Number(value.respuesta_70),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_71,
        res_respuesta: Number(value.respuesta_71),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_72,
        res_respuesta: Number(value.respuesta_72),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_73,
        res_respuesta: Number(value.respuesta_73),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_74,
        res_respuesta: Number(value.respuesta_74),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_75,
        res_respuesta: Number(value.respuesta_75),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_76,
        res_respuesta: Number(value.respuesta_76),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_77,
        res_respuesta: Number(value.respuesta_77),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_78,
        res_respuesta: Number(value.respuesta_78),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_79,
        res_respuesta: Number(value.respuesta_79),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_80,
        res_respuesta: Number(value.respuesta_80),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_81,
        res_respuesta: Number(value.respuesta_81),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_82,
        res_respuesta: Number(value.respuesta_82),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_83,
        res_respuesta: Number(value.respuesta_83),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_84,
        res_respuesta: Number(value.respuesta_84),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_85,
        res_respuesta: Number(value.respuesta_85),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_86,
        res_respuesta: Number(value.respuesta_86),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_87,
        res_respuesta: Number(value.respuesta_87),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_88,
        res_respuesta: Number(value.respuesta_88),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_89,
        res_respuesta: Number(value.respuesta_89),
        res_id_paciente: this.id,
      });


      this.modelArray.push({

        res_pregunta: value.pregunta_90,
        res_respuesta: Number(value.respuesta_90),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_91,
        res_respuesta: Number(value.respuesta_91),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_92,
        res_respuesta: Number(value.respuesta_92),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_93,
        res_respuesta: Number(value.respuesta_93),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_94,
        res_respuesta: Number(value.respuesta_94),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_95,
        res_respuesta: Number(value.respuesta_95),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_96,
        res_respuesta: Number(value.respuesta_96),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_97,
        res_respuesta: Number(value.respuesta_97),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_98,
        res_respuesta: Number(value.respuesta_98),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_99,
        res_respuesta: Number(value.respuesta_99),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_100,
        res_respuesta: Number(value.respuesta_100),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_101,
        res_respuesta: Number(value.respuesta_101),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_102,
        res_respuesta: Number(value.respuesta_102),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_103,
        res_respuesta: Number(value.respuesta_103),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_104,
        res_respuesta: Number(value.respuesta_104),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_105,
        res_respuesta: Number(value.respuesta_105),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_106,
        res_respuesta: Number(value.respuesta_106),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_107,
        res_respuesta: Number(value.respuesta_107),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_108,
        res_respuesta: Number(value.respuesta_108),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_109,
        res_respuesta: Number(value.respuesta_109),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_110,
        res_respuesta: Number(value.respuesta_110),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_111,
        res_respuesta: Number(value.respuesta_111),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_112,
        res_respuesta: Number(value.respuesta_112),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_113,
        res_respuesta: Number(value.respuesta_113),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_114,
        res_respuesta: Number(value.respuesta_114),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_115,
        res_respuesta: Number(value.respuesta_115),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_116,
        res_respuesta: Number(value.respuesta_116),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_117,
        res_respuesta: Number(value.respuesta_117),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_118,
        res_respuesta: Number(value.respuesta_118),
        res_id_paciente: this.id,
      });

      this.modelArray.push({

        res_pregunta: value.pregunta_119,
        res_respuesta: Number(value.respuesta_119),
        res_id_paciente: this.id,
      });

      this._ini.DeleteResp(this.id).subscribe(del=>{
        if(del){
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
