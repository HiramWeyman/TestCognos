import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RespTest } from 'src/app/interfaces/RespTest';
import { scidService } from 'src/app/services/scid.service';
import { TestcreenciasService } from 'src/app/services/testcreencias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testscid',
  templateUrl: './testscid.component.html',
  styleUrls: ['./testscid.component.css']
})
export class TestscidComponent {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  preguntas!: any[];
  public modelArray: RespTest[] = [];

  form!: FormGroup;
  isFormSubmitted = false;
  constructor(private route: ActivatedRoute, private _ini: scidService, private fb: FormBuilder) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this._ini.GetPreguntas().subscribe(
      res => {
        this.preguntas = res;
        console.log(this.preguntas );
        for (let i = 0; i < this.preguntas.length; i++) {

          this.form = new FormGroup({

            pregunta_1: new FormControl(this.preguntas[0].scid_id),
            respuesta_1: new FormControl('', Validators.required),
            pregunta_2: new FormControl(this.preguntas[1].scid_id),
            respuesta_2: new FormControl('', Validators.required),
            pregunta_3: new FormControl(this.preguntas[2].scid_id),
            respuesta_3: new FormControl('', Validators.required),
            pregunta_4: new FormControl(this.preguntas[3].scid_id),
            respuesta_4: new FormControl('', Validators.required),
            pregunta_5: new FormControl(this.preguntas[4].scid_id),
            respuesta_5: new FormControl('', Validators.required),
            pregunta_6: new FormControl(this.preguntas[5].scid_id),
            respuesta_6: new FormControl('', Validators.required),
            pregunta_7: new FormControl(this.preguntas[6].scid_id),
            respuesta_7: new FormControl('', Validators.required),
            pregunta_8: new FormControl(this.preguntas[7].scid_id),
            respuesta_8: new FormControl('', Validators.required),
            pregunta_9: new FormControl(this.preguntas[8].scid_id),
            respuesta_9: new FormControl('', Validators.required),
            pregunta_10: new FormControl(this.preguntas[9].scid_id),
            respuesta_10: new FormControl('', Validators.required),
            pregunta_11: new FormControl(this.preguntas[10].scid_id),
            respuesta_11: new FormControl('', Validators.required),
            pregunta_12: new FormControl(this.preguntas[11].scid_id),
            respuesta_12: new FormControl('', Validators.required),
            pregunta_13: new FormControl(this.preguntas[12].scid_id),
            respuesta_13: new FormControl('', Validators.required),
            pregunta_14: new FormControl(this.preguntas[13].scid_id),
            respuesta_14: new FormControl('', Validators.required),
            pregunta_15: new FormControl(this.preguntas[14].scid_id),
            respuesta_15: new FormControl('', Validators.required),
            pregunta_16: new FormControl(this.preguntas[15].scid_id),
            respuesta_16: new FormControl('', Validators.required),
            pregunta_17: new FormControl(this.preguntas[16].scid_id),
            respuesta_17: new FormControl('', Validators.required),
            pregunta_18: new FormControl(this.preguntas[17].scid_id),
            respuesta_18: new FormControl('', Validators.required),
            pregunta_19: new FormControl(this.preguntas[18].scid_id),
            respuesta_19: new FormControl('', Validators.required),
            pregunta_20: new FormControl(this.preguntas[19].scid_id),
            respuesta_20: new FormControl('', Validators.required),
            pregunta_21: new FormControl(this.preguntas[20].scid_id),
            respuesta_21: new FormControl('', Validators.required),
            pregunta_22: new FormControl(this.preguntas[21].scid_id),
            respuesta_22: new FormControl('', Validators.required),
            pregunta_23: new FormControl(this.preguntas[22].scid_id),
            respuesta_23: new FormControl('', Validators.required),
            pregunta_24: new FormControl(this.preguntas[23].scid_id),
            respuesta_24: new FormControl('', Validators.required),
            pregunta_25: new FormControl(this.preguntas[24].scid_id),
            respuesta_25: new FormControl('', Validators.required),
            pregunta_26: new FormControl(this.preguntas[25].scid_id),
            respuesta_26: new FormControl('', Validators.required),
            pregunta_27: new FormControl(this.preguntas[26].scid_id),
            respuesta_27: new FormControl('', Validators.required),
            pregunta_28: new FormControl(this.preguntas[27].scid_id),
            respuesta_28: new FormControl('', Validators.required),
            pregunta_29: new FormControl(this.preguntas[28].scid_id),
            respuesta_29: new FormControl('', Validators.required),
            pregunta_30: new FormControl(this.preguntas[29].scid_id),
            respuesta_30: new FormControl('', Validators.required),
            pregunta_31: new FormControl(this.preguntas[30].scid_id),
            respuesta_31: new FormControl('', Validators.required),
            pregunta_32: new FormControl(this.preguntas[31].scid_id),
            respuesta_32: new FormControl('', Validators.required),
            pregunta_33: new FormControl(this.preguntas[32].scid_id),
            respuesta_33: new FormControl('', Validators.required),
            pregunta_34: new FormControl(this.preguntas[33].scid_id),
            respuesta_34: new FormControl('', Validators.required),
            pregunta_35: new FormControl(this.preguntas[34].scid_id),
            respuesta_35: new FormControl('', Validators.required),
            pregunta_36: new FormControl(this.preguntas[35].scid_id),
            respuesta_36: new FormControl('', Validators.required),
            pregunta_37: new FormControl(this.preguntas[36].scid_id),
            respuesta_37: new FormControl('', Validators.required),
            pregunta_38: new FormControl(this.preguntas[37].scid_id),
            respuesta_38: new FormControl('', Validators.required),
            pregunta_39: new FormControl(this.preguntas[38].scid_id),
            respuesta_39: new FormControl('', Validators.required),
            pregunta_40: new FormControl(this.preguntas[39].scid_id),
            respuesta_40: new FormControl('', Validators.required),
            pregunta_41: new FormControl(this.preguntas[40].scid_id),
            respuesta_41: new FormControl('', Validators.required),
            pregunta_42: new FormControl(this.preguntas[41].scid_id),
            respuesta_42: new FormControl('', Validators.required),
            pregunta_43: new FormControl(this.preguntas[42].scid_id),
            respuesta_43: new FormControl('', Validators.required),
            pregunta_44: new FormControl(this.preguntas[43].scid_id),
            respuesta_44: new FormControl('', Validators.required),
            pregunta_45: new FormControl(this.preguntas[44].scid_id),
            respuesta_45: new FormControl('', Validators.required),
            pregunta_46: new FormControl(this.preguntas[45].scid_id),
            respuesta_46: new FormControl('', Validators.required),
            pregunta_47: new FormControl(this.preguntas[46].scid_id),
            respuesta_47: new FormControl('', Validators.required),
            pregunta_48: new FormControl(this.preguntas[47].scid_id),
            respuesta_48: new FormControl('', Validators.required),
            pregunta_49: new FormControl(this.preguntas[48].scid_id),
            respuesta_49: new FormControl('', Validators.required),
            pregunta_50: new FormControl(this.preguntas[49].scid_id),
            respuesta_50: new FormControl('', Validators.required),
            pregunta_51: new FormControl(this.preguntas[50].scid_id),
            respuesta_51: new FormControl('', Validators.required),
            pregunta_52: new FormControl(this.preguntas[51].scid_id),
            respuesta_52: new FormControl('', Validators.required),
            pregunta_53: new FormControl(this.preguntas[52].scid_id),
            respuesta_53: new FormControl('', Validators.required),
            pregunta_54: new FormControl(this.preguntas[53].scid_id),
            respuesta_54: new FormControl('', Validators.required),
            pregunta_55: new FormControl(this.preguntas[54].scid_id),
            respuesta_55: new FormControl('', Validators.required),
            pregunta_56: new FormControl(this.preguntas[55].scid_id),
            respuesta_56: new FormControl('', Validators.required),
            pregunta_57: new FormControl(this.preguntas[56].scid_id),
            respuesta_57: new FormControl('', Validators.required),
            pregunta_58: new FormControl(this.preguntas[57].scid_id),
            respuesta_58: new FormControl('', Validators.required),
            pregunta_59: new FormControl(this.preguntas[58].scid_id),
            respuesta_59: new FormControl('', Validators.required),
            pregunta_60: new FormControl(this.preguntas[59].scid_id),
            respuesta_60: new FormControl('', Validators.required),
            pregunta_61: new FormControl(this.preguntas[60].scid_id),
            respuesta_61: new FormControl('', Validators.required),
            pregunta_62: new FormControl(this.preguntas[61].scid_id),
            respuesta_62: new FormControl('', Validators.required),
            pregunta_63: new FormControl(this.preguntas[62].scid_id),
            respuesta_63: new FormControl('', Validators.required),
            pregunta_64: new FormControl(this.preguntas[63].scid_id),
            respuesta_64: new FormControl('', Validators.required),
            pregunta_65: new FormControl(this.preguntas[64].scid_id),
            respuesta_65: new FormControl('', Validators.required),
            pregunta_66: new FormControl(this.preguntas[65].scid_id),
            respuesta_66: new FormControl('', Validators.required),
            pregunta_67: new FormControl(this.preguntas[66].scid_id),
            respuesta_67: new FormControl('', Validators.required),
            pregunta_68: new FormControl(this.preguntas[67].scid_id),
            respuesta_68: new FormControl('', Validators.required),
            pregunta_69: new FormControl(this.preguntas[68].scid_id),
            respuesta_69: new FormControl('', Validators.required),
            pregunta_70: new FormControl(this.preguntas[69].scid_id),
            respuesta_70: new FormControl('', Validators.required),
            pregunta_71: new FormControl(this.preguntas[70].scid_id),
            respuesta_71: new FormControl('', Validators.required),
            pregunta_72: new FormControl(this.preguntas[71].scid_id),
            respuesta_72: new FormControl('', Validators.required),
            pregunta_73: new FormControl(this.preguntas[72].scid_id),
            respuesta_73: new FormControl('', Validators.required),
            pregunta_74: new FormControl(this.preguntas[73].scid_id),
            respuesta_74: new FormControl('', Validators.required),
            pregunta_75: new FormControl(this.preguntas[74].scid_id),
            respuesta_75: new FormControl('', Validators.required),
            pregunta_76: new FormControl(this.preguntas[75].scid_id),
            respuesta_76: new FormControl('', Validators.required),
            pregunta_77: new FormControl(this.preguntas[76].scid_id),
            respuesta_77: new FormControl('', Validators.required),
            pregunta_78: new FormControl(this.preguntas[77].scid_id),
            respuesta_78: new FormControl('', Validators.required),
            pregunta_79: new FormControl(this.preguntas[78].scid_id),
            respuesta_79: new FormControl('', Validators.required),
            pregunta_80: new FormControl(this.preguntas[79].scid_id),
            respuesta_80: new FormControl('', Validators.required),
            pregunta_81: new FormControl(this.preguntas[80].scid_id),
            respuesta_81: new FormControl('', Validators.required),
            pregunta_82: new FormControl(this.preguntas[81].scid_id),
            respuesta_82: new FormControl('', Validators.required),
            pregunta_83: new FormControl(this.preguntas[82].scid_id),
            respuesta_83: new FormControl('', Validators.required),
            pregunta_84: new FormControl(this.preguntas[83].scid_id),
            respuesta_84: new FormControl('', Validators.required),
            pregunta_85: new FormControl(this.preguntas[84].scid_id),
            respuesta_85: new FormControl('', Validators.required),
            pregunta_86: new FormControl(this.preguntas[85].scid_id),
            respuesta_86: new FormControl('', Validators.required),
            pregunta_87: new FormControl(this.preguntas[86].scid_id),
            respuesta_87: new FormControl('', Validators.required),
            pregunta_88: new FormControl(this.preguntas[87].scid_id),
            respuesta_88: new FormControl('', Validators.required),
            pregunta_89: new FormControl(this.preguntas[88].scid_id),
            respuesta_89: new FormControl('', Validators.required),
            pregunta_90: new FormControl(this.preguntas[89].scid_id),
            respuesta_90: new FormControl('', Validators.required),
            pregunta_91: new FormControl(this.preguntas[90].scid_id),
            respuesta_91: new FormControl('', Validators.required),
            pregunta_92: new FormControl(this.preguntas[91].scid_id),
            respuesta_92: new FormControl('', Validators.required),
            pregunta_93: new FormControl(this.preguntas[92].scid_id),
            respuesta_93: new FormControl('', Validators.required),
            pregunta_94: new FormControl(this.preguntas[93].scid_id),
            respuesta_94: new FormControl('', Validators.required),
            pregunta_95: new FormControl(this.preguntas[94].scid_id),
            respuesta_95: new FormControl('', Validators.required),
            pregunta_96: new FormControl(this.preguntas[95].scid_id),
            respuesta_96: new FormControl('', Validators.required),
            pregunta_97: new FormControl(this.preguntas[96].scid_id),
            respuesta_97: new FormControl('', Validators.required),
            pregunta_98: new FormControl(this.preguntas[97].scid_id),
            respuesta_98: new FormControl('', Validators.required),
            pregunta_99: new FormControl(this.preguntas[98].scid_id),
            respuesta_99: new FormControl('', Validators.required),
            pregunta_100: new FormControl(this.preguntas[99].scid_id),
            respuesta_100: new FormControl('', Validators.required),
            pregunta_101: new FormControl(this.preguntas[100].scid_id),
            respuesta_101: new FormControl('', Validators.required),
            pregunta_102: new FormControl(this.preguntas[101].scid_id),
            respuesta_102: new FormControl('', Validators.required),
            pregunta_103: new FormControl(this.preguntas[102].scid_id),
            respuesta_103: new FormControl('', Validators.required),
            pregunta_104: new FormControl(this.preguntas[103].scid_id),
            respuesta_104: new FormControl('', Validators.required),
            pregunta_105: new FormControl(this.preguntas[104].scid_id),
            respuesta_105: new FormControl('', Validators.required),
            pregunta_106: new FormControl(this.preguntas[105].scid_id),
            respuesta_106: new FormControl('', Validators.required),
            pregunta_107: new FormControl(this.preguntas[106].scid_id),
            respuesta_107: new FormControl('', Validators.required),
            pregunta_108: new FormControl(this.preguntas[107].scid_id),
            respuesta_108: new FormControl('', Validators.required),
            pregunta_109: new FormControl(this.preguntas[108].scid_id),
            respuesta_109: new FormControl('', Validators.required),
            pregunta_110: new FormControl(this.preguntas[109].scid_id),
            respuesta_110: new FormControl('', Validators.required),
            pregunta_111: new FormControl(this.preguntas[110].scid_id),
            respuesta_111: new FormControl('', Validators.required),
            pregunta_112: new FormControl(this.preguntas[111].scid_id),
            respuesta_112: new FormControl('', Validators.required),
            pregunta_113: new FormControl(this.preguntas[112].scid_id),
            respuesta_113: new FormControl('', Validators.required),
            pregunta_114: new FormControl(this.preguntas[113].scid_id),
            respuesta_114: new FormControl('', Validators.required),
            pregunta_115: new FormControl(this.preguntas[114].scid_id),
            respuesta_115: new FormControl('', Validators.required),
            pregunta_116: new FormControl(this.preguntas[115].scid_id),
            respuesta_116: new FormControl('', Validators.required),
            pregunta_117: new FormControl(this.preguntas[116].scid_id),
            respuesta_117: new FormControl('', Validators.required),
            pregunta_118: new FormControl(this.preguntas[117].scid_id),
            respuesta_118: new FormControl('', Validators.required),
            pregunta_119: new FormControl(this.preguntas[118].scid_id),
            respuesta_119: new FormControl('', Validators.required),
            

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
