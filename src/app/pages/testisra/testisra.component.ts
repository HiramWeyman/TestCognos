import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { RespTestC } from 'src/app/interfaces/RespTestC';
import { RespTestF } from 'src/app/interfaces/RespTestF';
import { RespTestM } from 'src/app/interfaces/RespTestM';
import { TestIsraC } from 'src/app/interfaces/TestIsraC';
import { TestIsraF } from 'src/app/interfaces/TestIsraF';
import { TestIsraM } from 'src/app/interfaces/TestIsraM';
import { TestIsraService } from 'src/app/services/testisra.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-testisra',
  templateUrl: './testisra.component.html',
  styleUrls: ['./testisra.component.css']
})
export class TestisraComponent {

  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  preguntas!: any[];
  testC: TestIsraC=new TestIsraC();
  testF: TestIsraF=new TestIsraF();
  testM: TestIsraM=new TestIsraM(); 
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.testC.pregunta_1c=1;
    this.testC.pregunta_2c=2;
    this.testC.pregunta_3c=3;
    this.testC.pregunta_4c=4;
    this.testC.pregunta_5c=5;
    this.testC.pregunta_6c=6;
    this.testC.pregunta_7c=7;
    this.testC.pregunta_8c=8;
    this.testC.pregunta_9c=9;
    this.testC.pregunta_10c=10;
    this.testC.pregunta_11c=11;
    this.testC.pregunta_12c=12;
    this.testC.pregunta_13c=13;
    this.testC.pregunta_14c=14;
    this.testC.pregunta_15c=15;
    this.testC.pregunta_16c=16;
    this.testC.pregunta_17c=17;
    this.testC.pregunta_18c=18;
    this.testC.pregunta_19c=19;
    this.testC.pregunta_20c=20;
    this.testC.pregunta_21c=21;
    this.testC.pregunta_22c=22;
    this.testC.pregunta_23c=23;

 
  }

  sum_pregunta1(){

   if(this.testC.res_1c_1){
      this.testC.sum_res_1c=this.testC.res_1c_1;
    }

    if(this.testC.res_1c_2){
      this.testC.sum_res_1c=this.testC.res_1c_2;
    }
    if(this.testC.res_1c_3){
      this.testC.sum_res_1c=this.testC.res_1c_3;
    }
    if(this.testC.res_1c_4){
      this.testC.sum_res_1c=this.testC.res_1c_4;
    }
    if(this.testC.res_1c_5){
      this.testC.sum_res_1c=this.testC.res_1c_5;
    }
    if(this.testC.res_1c_6){
      this.testC.sum_res_1c=this.testC.res_1c_6;
    }
    if(this.testC.res_1c_7){
      this.testC.sum_res_1c=this.testC.res_1c_7;
    }
    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2);
      }
    }
    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3);
        }
      }
    }
    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3);
        }
      }
    }

    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_4){
            this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_4);
          }
        }
      }
    }

    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_4){
            if(this.testC.res_1c_5){
              this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_5);
            }
          }
        }
      }
    }
    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_4){
            if(this.testC.res_1c_5){
              if(this.testC.res_1c_6){
                this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_6);
              }
            }
          }
        }
      }
    }

    if(this.testC.res_1c_1){
      if(this.testC.res_1c_2){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_4){
            if(this.testC.res_1c_5){
              if(this.testC.res_1c_6){
                if(this.testC.res_1c_7){
                  this.testC.sum_res_1c=Number(this.testC.res_1c_1)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_7);
                }
              }
            }
          }
        }
      }
    }

//Reversa

if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6);
  }
}
if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    if(this.testC.res_1c_5){
      this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_5);
    }
  }
}


if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    if(this.testC.res_1c_5){
      if(this.testC.res_1c_4){
        this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_4);
      }
    }
  }
}

if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    if(this.testC.res_1c_5){
      if(this.testC.res_1c_4){
        if(this.testC.res_1c_3){
          this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_3);
        }
      }
    }
  }
}
if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    if(this.testC.res_1c_5){
      if(this.testC.res_1c_4){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_2){
            this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_2);
          }
        }
      }
    }
  }
}

if(this.testC.res_1c_7){
  if(this.testC.res_1c_6){
    if(this.testC.res_1c_5){
      if(this.testC.res_1c_4){
        if(this.testC.res_1c_3){
          if(this.testC.res_1c_2){
            if(this.testC.res_1c_1){
              this.testC.sum_res_1c=Number(this.testC.res_1c_7)+Number(this.testC.res_1c_6)+Number(this.testC.res_1c_5)+Number(this.testC.res_1c_4)+Number(this.testC.res_1c_3)+Number(this.testC.res_1c_2)+Number(this.testC.res_1c_1);
            }
          }
        }
      }
    }
  }
}


}

  sum_pregunta2(){
      if(this.testC.res_2c_1){
      this.testC.sum_res_2c=this.testC.res_2c_1;
    }

    if(this.testC.res_2c_2){
      this.testC.sum_res_2c=this.testC.res_2c_2;
    }
    if(this.testC.res_2c_3){
      this.testC.sum_res_2c=this.testC.res_2c_3;
    }
    if(this.testC.res_2c_4){
      this.testC.sum_res_2c=this.testC.res_2c_4;
    }
    if(this.testC.res_2c_5){
      this.testC.sum_res_2c=this.testC.res_2c_5;
    }
    if(this.testC.res_2c_6){
      this.testC.sum_res_2c=this.testC.res_2c_6;
    }
    if(this.testC.res_2c_7){
      this.testC.sum_res_2c=this.testC.res_2c_7;
    }
    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2);
      }
    }
    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3);
        }
      }
    }
    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3);
        }
      }
    }

    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_4){
            this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_4);
          }
        }
      }
    }

    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_4){
            if(this.testC.res_2c_5){
              this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_5);
            }
          }
        }
      }
    }
    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_4){
            if(this.testC.res_2c_5){
              if(this.testC.res_2c_6){
                this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_6);
              }
            }
          }
        }
      }
    }

    if(this.testC.res_2c_1){
      if(this.testC.res_2c_2){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_4){
            if(this.testC.res_2c_5){
              if(this.testC.res_2c_6){
                if(this.testC.res_2c_7){
                  this.testC.sum_res_2c=Number(this.testC.res_2c_1)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_7);
                }
              }
            }
          }
        }
      }
    }

//Reversa

if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6);
  }
}
if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    if(this.testC.res_2c_5){
      this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_5);
    }
  }
}


if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    if(this.testC.res_2c_5){
      if(this.testC.res_2c_4){
        this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_4);
      }
    }
  }
}

if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    if(this.testC.res_2c_5){
      if(this.testC.res_2c_4){
        if(this.testC.res_2c_3){
          this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_3);
        }
      }
    }
  }
}
if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    if(this.testC.res_2c_5){
      if(this.testC.res_2c_4){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_2){
            this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_2);
          }
        }
      }
    }
  }
}

if(this.testC.res_2c_7){
  if(this.testC.res_2c_6){
    if(this.testC.res_2c_5){
      if(this.testC.res_2c_4){
        if(this.testC.res_2c_3){
          if(this.testC.res_2c_2){
            if(this.testC.res_2c_1){
              this.testC.sum_res_2c=Number(this.testC.res_2c_7)+Number(this.testC.res_2c_6)+Number(this.testC.res_2c_5)+Number(this.testC.res_2c_4)+Number(this.testC.res_2c_3)+Number(this.testC.res_2c_2)+Number(this.testC.res_2c_1);
            }
          }
        }
      }
    }
  }
}


  }

  sum_pregunta3(){
    if(this.testC.res_3c_1){
      this.testC.sum_res_3c=this.testC.res_3c_1;
    }

    if(this.testC.res_3c_2){
      this.testC.sum_res_3c=this.testC.res_3c_2;
    }
    if(this.testC.res_3c_3){
      this.testC.sum_res_3c=this.testC.res_3c_3;
    }
    if(this.testC.res_3c_4){
      this.testC.sum_res_3c=this.testC.res_3c_4;
    }
    if(this.testC.res_3c_5){
      this.testC.sum_res_3c=this.testC.res_3c_5;
    }
    if(this.testC.res_3c_6){
      this.testC.sum_res_3c=this.testC.res_3c_6;
    }
    if(this.testC.res_3c_7){
      this.testC.sum_res_3c=this.testC.res_3c_7;
    }
    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2);
      }
    }
    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3);
        }
      }
    }
    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3);
        }
      }
    }

    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_4){
            this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_4);
          }
        }
      }
    }

    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_4){
            if(this.testC.res_3c_5){
              this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_5);
            }
          }
        }
      }
    }
    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_4){
            if(this.testC.res_3c_5){
              if(this.testC.res_3c_6){
                this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_6);
              }
            }
          }
        }
      }
    }

    if(this.testC.res_3c_1){
      if(this.testC.res_3c_2){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_4){
            if(this.testC.res_3c_5){
              if(this.testC.res_3c_6){
                if(this.testC.res_3c_7){
                  this.testC.sum_res_3c=Number(this.testC.res_3c_1)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_7);
                }
              }
            }
          }
        }
      }
    }

//Reversa

if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6);
  }
}
if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    if(this.testC.res_3c_5){
      this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_5);
    }
  }
}


if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    if(this.testC.res_3c_5){
      if(this.testC.res_3c_4){
        this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_4);
      }
    }
  }
}

if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    if(this.testC.res_3c_5){
      if(this.testC.res_3c_4){
        if(this.testC.res_3c_3){
          this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_3);
        }
      }
    }
  }
}
if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    if(this.testC.res_3c_5){
      if(this.testC.res_3c_4){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_2){
            this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_2);
          }
        }
      }
    }
  }
}

if(this.testC.res_3c_7){
  if(this.testC.res_3c_6){
    if(this.testC.res_3c_5){
      if(this.testC.res_3c_4){
        if(this.testC.res_3c_3){
          if(this.testC.res_3c_2){
            if(this.testC.res_3c_1){
              this.testC.sum_res_3c=Number(this.testC.res_3c_7)+Number(this.testC.res_3c_6)+Number(this.testC.res_3c_5)+Number(this.testC.res_3c_4)+Number(this.testC.res_3c_3)+Number(this.testC.res_3c_2)+Number(this.testC.res_3c_1);
            }
          }
        }
      }
    }
  }
}

  }

  sum_pregunta4(){

    if(this.testC.res_4c_1){
      this.testC.sum_res_4c=this.testC.res_4c_1;
    }

    if(this.testC.res_4c_2){
      this.testC.sum_res_4c=this.testC.res_4c_2;
    }
    if(this.testC.res_4c_3){
      this.testC.sum_res_4c=this.testC.res_4c_3;
    }
    if(this.testC.res_4c_4){
      this.testC.sum_res_4c=this.testC.res_4c_4;
    }
    if(this.testC.res_4c_5){
      this.testC.sum_res_4c=this.testC.res_4c_5;
    }
    if(this.testC.res_4c_6){
      this.testC.sum_res_4c=this.testC.res_4c_6;
    }
    if(this.testC.res_4c_7){
      this.testC.sum_res_4c=this.testC.res_4c_7;
    }
    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2);
      }
    }
    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3);
        }
      }
    }
    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3);
        }
      }
    }

    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_4){
            this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_4);
          }
        }
      }
    }

    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_4){
            if(this.testC.res_4c_5){
              this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_5);
            }
          }
        }
      }
    }
    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_4){
            if(this.testC.res_4c_5){
              if(this.testC.res_4c_6){
                this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_6);
              }
            }
          }
        }
      }
    }

    if(this.testC.res_4c_1){
      if(this.testC.res_4c_2){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_4){
            if(this.testC.res_4c_5){
              if(this.testC.res_4c_6){
                if(this.testC.res_4c_7){
                  this.testC.sum_res_4c=Number(this.testC.res_4c_1)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_7);
                }
              }
            }
          }
        }
      }
    }

//Reversa

if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6);
  }
}
if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    if(this.testC.res_4c_5){
      this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_5);
    }
  }
}


if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    if(this.testC.res_4c_5){
      if(this.testC.res_4c_4){
        this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_4);
      }
    }
  }
}

if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    if(this.testC.res_4c_5){
      if(this.testC.res_4c_4){
        if(this.testC.res_4c_3){
          this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_3);
        }
      }
    }
  }
}
if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    if(this.testC.res_4c_5){
      if(this.testC.res_4c_4){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_2){
            this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_2);
          }
        }
      }
    }
  }
}

if(this.testC.res_4c_7){
  if(this.testC.res_4c_6){
    if(this.testC.res_4c_5){
      if(this.testC.res_4c_4){
        if(this.testC.res_4c_3){
          if(this.testC.res_4c_2){
            if(this.testC.res_4c_1){
              this.testC.sum_res_4c=Number(this.testC.res_4c_7)+Number(this.testC.res_4c_6)+Number(this.testC.res_4c_5)+Number(this.testC.res_4c_4)+Number(this.testC.res_4c_3)+Number(this.testC.res_4c_2)+Number(this.testC.res_4c_1);
            }
          }
        }
      }
    }
  }
}

  }

  sum_pregunta5(){
        if(this.testC.res_5c_1){
      this.testC.sum_res_5c=this.testC.res_5c_1;
    }

    if(this.testC.res_5c_2){
      this.testC.sum_res_5c=this.testC.res_5c_2;
    }
    if(this.testC.res_5c_3){
      this.testC.sum_res_5c=this.testC.res_5c_3;
    }
    if(this.testC.res_5c_4){
      this.testC.sum_res_5c=this.testC.res_5c_4;
    }
    if(this.testC.res_5c_5){
      this.testC.sum_res_5c=this.testC.res_5c_5;
    }
    if(this.testC.res_5c_6){
      this.testC.sum_res_5c=this.testC.res_5c_6;
    }
    if(this.testC.res_5c_7){
      this.testC.sum_res_5c=this.testC.res_5c_7;
    }
    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2);
      }
    }
    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3);
        }
      }
    }
    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3);
        }
      }
    }

    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_4){
            this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_4);
          }
        }
      }
    }

    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_4){
            if(this.testC.res_5c_5){
              this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_5);
            }
          }
        }
      }
    }
    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_4){
            if(this.testC.res_5c_5){
              if(this.testC.res_5c_6){
                this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_6);
              }
            }
          }
        }
      }
    }

    if(this.testC.res_5c_1){
      if(this.testC.res_5c_2){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_4){
            if(this.testC.res_5c_5){
              if(this.testC.res_5c_6){
                if(this.testC.res_5c_7){
                  this.testC.sum_res_5c=Number(this.testC.res_5c_1)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_7);
                }
              }
            }
          }
        }
      }
    }

//Reversa

if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6);
  }
}
if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    if(this.testC.res_5c_5){
      this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_5);
    }
  }
}


if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    if(this.testC.res_5c_5){
      if(this.testC.res_5c_4){
        this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_4);
      }
    }
  }
}

if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    if(this.testC.res_5c_5){
      if(this.testC.res_5c_4){
        if(this.testC.res_5c_3){
          this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_3);
        }
      }
    }
  }
}
if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    if(this.testC.res_5c_5){
      if(this.testC.res_5c_4){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_2){
            this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_2);
          }
        }
      }
    }
  }
}

if(this.testC.res_5c_7){
  if(this.testC.res_5c_6){
    if(this.testC.res_5c_5){
      if(this.testC.res_5c_4){
        if(this.testC.res_5c_3){
          if(this.testC.res_5c_2){
            if(this.testC.res_5c_1){
              this.testC.sum_res_5c=Number(this.testC.res_5c_7)+Number(this.testC.res_5c_6)+Number(this.testC.res_5c_5)+Number(this.testC.res_5c_4)+Number(this.testC.res_5c_3)+Number(this.testC.res_5c_2)+Number(this.testC.res_5c_1);
            }
          }
        }
      }
    }
  }
}

  }

sum_pregunta6(){
    if(this.testC.res_6c_1){
  this.testC.sum_res_6c=this.testC.res_6c_1;
}

if(this.testC.res_6c_2){
  this.testC.sum_res_6c=this.testC.res_6c_2;
}
if(this.testC.res_6c_3){
  this.testC.sum_res_6c=this.testC.res_6c_3;
}
if(this.testC.res_6c_4){
  this.testC.sum_res_6c=this.testC.res_6c_4;
}
if(this.testC.res_6c_5){
  this.testC.sum_res_6c=this.testC.res_6c_5;
}
if(this.testC.res_6c_6){
  this.testC.sum_res_6c=this.testC.res_6c_6;
}
if(this.testC.res_6c_7){
  this.testC.sum_res_6c=this.testC.res_6c_7;
}
if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2);
  }
}
if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3);
    }
  }
}
if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3);
    }
  }
}

if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_4){
        this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_4);
      }
    }
  }
}

if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_4){
        if(this.testC.res_6c_5){
          this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_5);
        }
      }
    }
  }
}
if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_4){
        if(this.testC.res_6c_5){
          if(this.testC.res_6c_6){
            this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_6);
          }
        }
      }
    }
  }
}

if(this.testC.res_6c_1){
  if(this.testC.res_6c_2){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_4){
        if(this.testC.res_6c_5){
          if(this.testC.res_6c_6){
            if(this.testC.res_6c_7){
              this.testC.sum_res_6c=Number(this.testC.res_6c_1)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_7);
            }
          }
        }
      }
    }
  }
}

//Reversa

if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6);
}
}
if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
if(this.testC.res_6c_5){
  this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_5);
}
}
}


if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
if(this.testC.res_6c_5){
  if(this.testC.res_6c_4){
    this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_4);
  }
}
}
}

if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
if(this.testC.res_6c_5){
  if(this.testC.res_6c_4){
    if(this.testC.res_6c_3){
      this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_3);
    }
  }
}
}
}
if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
if(this.testC.res_6c_5){
  if(this.testC.res_6c_4){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_2){
        this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_2);
      }
    }
  }
}
}
}

if(this.testC.res_6c_7){
if(this.testC.res_6c_6){
if(this.testC.res_6c_5){
  if(this.testC.res_6c_4){
    if(this.testC.res_6c_3){
      if(this.testC.res_6c_2){
        if(this.testC.res_6c_1){
          this.testC.sum_res_6c=Number(this.testC.res_6c_7)+Number(this.testC.res_6c_6)+Number(this.testC.res_6c_5)+Number(this.testC.res_6c_4)+Number(this.testC.res_6c_3)+Number(this.testC.res_6c_2)+Number(this.testC.res_6c_1);
        }
      }
    }
  }
}
}
}
}//fin de metodo

sum_pregunta7(){
  if(this.testC.res_7c_1){
this.testC.sum_res_7c=this.testC.res_7c_1;
}

if(this.testC.res_7c_2){
this.testC.sum_res_7c=this.testC.res_7c_2;
}
if(this.testC.res_7c_3){
this.testC.sum_res_7c=this.testC.res_7c_3;
}
if(this.testC.res_7c_4){
this.testC.sum_res_7c=this.testC.res_7c_4;
}
if(this.testC.res_7c_5){
this.testC.sum_res_7c=this.testC.res_7c_5;
}
if(this.testC.res_7c_6){
this.testC.sum_res_7c=this.testC.res_7c_6;
}
if(this.testC.res_7c_7){
this.testC.sum_res_7c=this.testC.res_7c_7;
}
if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2);
}
}
if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3);
  }
}
}
if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3);
  }
}
}

if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_4){
      this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_4);
    }
  }
}
}

if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_4){
      if(this.testC.res_7c_5){
        this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_5);
      }
    }
  }
}
}
if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_4){
      if(this.testC.res_7c_5){
        if(this.testC.res_7c_6){
          this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_7c_1){
if(this.testC.res_7c_2){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_4){
      if(this.testC.res_7c_5){
        if(this.testC.res_7c_6){
          if(this.testC.res_7c_7){
            this.testC.sum_res_7c=Number(this.testC.res_7c_1)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6);
}
}
if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
if(this.testC.res_7c_5){
this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_5);
}
}
}


if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
if(this.testC.res_7c_5){
if(this.testC.res_7c_4){
  this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_4);
}
}
}
}

if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
if(this.testC.res_7c_5){
if(this.testC.res_7c_4){
  if(this.testC.res_7c_3){
    this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_3);
  }
}
}
}
}
if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
if(this.testC.res_7c_5){
if(this.testC.res_7c_4){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_2){
      this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_2);
    }
  }
}
}
}
}

if(this.testC.res_7c_7){
if(this.testC.res_7c_6){
if(this.testC.res_7c_5){
if(this.testC.res_7c_4){
  if(this.testC.res_7c_3){
    if(this.testC.res_7c_2){
      if(this.testC.res_7c_1){
        this.testC.sum_res_7c=Number(this.testC.res_7c_7)+Number(this.testC.res_7c_6)+Number(this.testC.res_7c_5)+Number(this.testC.res_7c_4)+Number(this.testC.res_7c_3)+Number(this.testC.res_7c_2)+Number(this.testC.res_7c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta8(){
  if(this.testC.res_8c_1){
this.testC.sum_res_8c=this.testC.res_8c_1;
}

if(this.testC.res_8c_2){
this.testC.sum_res_8c=this.testC.res_8c_2;
}
if(this.testC.res_8c_3){
this.testC.sum_res_8c=this.testC.res_8c_3;
}
if(this.testC.res_8c_4){
this.testC.sum_res_8c=this.testC.res_8c_4;
}
if(this.testC.res_8c_5){
this.testC.sum_res_8c=this.testC.res_8c_5;
}
if(this.testC.res_8c_6){
this.testC.sum_res_8c=this.testC.res_8c_6;
}
if(this.testC.res_8c_7){
this.testC.sum_res_8c=this.testC.res_8c_7;
}
if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2);
}
}
if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3);
  }
}
}
if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3);
  }
}
}

if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_4){
      this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_4);
    }
  }
}
}

if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_4){
      if(this.testC.res_8c_5){
        this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_5);
      }
    }
  }
}
}
if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_4){
      if(this.testC.res_8c_5){
        if(this.testC.res_8c_6){
          this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_8c_1){
if(this.testC.res_8c_2){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_4){
      if(this.testC.res_8c_5){
        if(this.testC.res_8c_6){
          if(this.testC.res_8c_7){
            this.testC.sum_res_8c=Number(this.testC.res_8c_1)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6);
}
}
if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
if(this.testC.res_8c_5){
this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_5);
}
}
}


if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
if(this.testC.res_8c_5){
if(this.testC.res_8c_4){
  this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_4);
}
}
}
}

if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
if(this.testC.res_8c_5){
if(this.testC.res_8c_4){
  if(this.testC.res_8c_3){
    this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_3);
  }
}
}
}
}
if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
if(this.testC.res_8c_5){
if(this.testC.res_8c_4){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_2){
      this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_2);
    }
  }
}
}
}
}

if(this.testC.res_8c_7){
if(this.testC.res_8c_6){
if(this.testC.res_8c_5){
if(this.testC.res_8c_4){
  if(this.testC.res_8c_3){
    if(this.testC.res_8c_2){
      if(this.testC.res_8c_1){
        this.testC.sum_res_8c=Number(this.testC.res_8c_7)+Number(this.testC.res_8c_6)+Number(this.testC.res_8c_5)+Number(this.testC.res_8c_4)+Number(this.testC.res_8c_3)+Number(this.testC.res_8c_2)+Number(this.testC.res_8c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta9(){
  if(this.testC.res_9c_1){
this.testC.sum_res_9c=this.testC.res_9c_1;
}

if(this.testC.res_9c_2){
this.testC.sum_res_9c=this.testC.res_9c_2;
}
if(this.testC.res_9c_3){
this.testC.sum_res_9c=this.testC.res_9c_3;
}
if(this.testC.res_9c_4){
this.testC.sum_res_9c=this.testC.res_9c_4;
}
if(this.testC.res_9c_5){
this.testC.sum_res_9c=this.testC.res_9c_5;
}
if(this.testC.res_9c_6){
this.testC.sum_res_9c=this.testC.res_9c_6;
}
if(this.testC.res_9c_7){
this.testC.sum_res_9c=this.testC.res_9c_7;
}
if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2);
}
}
if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3);
  }
}
}
if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3);
  }
}
}

if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_4){
      this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_4);
    }
  }
}
}

if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_4){
      if(this.testC.res_9c_5){
        this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_5);
      }
    }
  }
}
}
if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_4){
      if(this.testC.res_9c_5){
        if(this.testC.res_9c_6){
          this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_9c_1){
if(this.testC.res_9c_2){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_4){
      if(this.testC.res_9c_5){
        if(this.testC.res_9c_6){
          if(this.testC.res_9c_7){
            this.testC.sum_res_9c=Number(this.testC.res_9c_1)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6);
}
}
if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
if(this.testC.res_9c_5){
this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_5);
}
}
}


if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
if(this.testC.res_9c_5){
if(this.testC.res_9c_4){
  this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_4);
}
}
}
}

if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
if(this.testC.res_9c_5){
if(this.testC.res_9c_4){
  if(this.testC.res_9c_3){
    this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_3);
  }
}
}
}
}
if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
if(this.testC.res_9c_5){
if(this.testC.res_9c_4){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_2){
      this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_2);
    }
  }
}
}
}
}

if(this.testC.res_9c_7){
if(this.testC.res_9c_6){
if(this.testC.res_9c_5){
if(this.testC.res_9c_4){
  if(this.testC.res_9c_3){
    if(this.testC.res_9c_2){
      if(this.testC.res_9c_1){
        this.testC.sum_res_9c=Number(this.testC.res_9c_7)+Number(this.testC.res_9c_6)+Number(this.testC.res_9c_5)+Number(this.testC.res_9c_4)+Number(this.testC.res_9c_3)+Number(this.testC.res_9c_2)+Number(this.testC.res_9c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta10(){
  if(this.testC.res_10c_1){
this.testC.sum_res_10c=this.testC.res_10c_1;
}

if(this.testC.res_10c_2){
this.testC.sum_res_10c=this.testC.res_10c_2;
}
if(this.testC.res_10c_3){
this.testC.sum_res_10c=this.testC.res_10c_3;
}
if(this.testC.res_10c_4){
this.testC.sum_res_10c=this.testC.res_10c_4;
}
if(this.testC.res_10c_5){
this.testC.sum_res_10c=this.testC.res_10c_5;
}
if(this.testC.res_10c_6){
this.testC.sum_res_10c=this.testC.res_10c_6;
}
if(this.testC.res_10c_7){
this.testC.sum_res_10c=this.testC.res_10c_7;
}
if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2);
}
}
if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3);
  }
}
}
if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3);
  }
}
}

if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_4){
      this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_4);
    }
  }
}
}

if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_4){
      if(this.testC.res_10c_5){
        this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_5);
      }
    }
  }
}
}
if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_4){
      if(this.testC.res_10c_5){
        if(this.testC.res_10c_6){
          this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_10c_1){
if(this.testC.res_10c_2){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_4){
      if(this.testC.res_10c_5){
        if(this.testC.res_10c_6){
          if(this.testC.res_10c_7){
            this.testC.sum_res_10c=Number(this.testC.res_10c_1)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6);
}
}
if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
if(this.testC.res_10c_5){
this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_5);
}
}
}


if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
if(this.testC.res_10c_5){
if(this.testC.res_10c_4){
  this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_4);
}
}
}
}

if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
if(this.testC.res_10c_5){
if(this.testC.res_10c_4){
  if(this.testC.res_10c_3){
    this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_3);
  }
}
}
}
}
if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
if(this.testC.res_10c_5){
if(this.testC.res_10c_4){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_2){
      this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_2);
    }
  }
}
}
}
}

if(this.testC.res_10c_7){
if(this.testC.res_10c_6){
if(this.testC.res_10c_5){
if(this.testC.res_10c_4){
  if(this.testC.res_10c_3){
    if(this.testC.res_10c_2){
      if(this.testC.res_10c_1){
        this.testC.sum_res_10c=Number(this.testC.res_10c_7)+Number(this.testC.res_10c_6)+Number(this.testC.res_10c_5)+Number(this.testC.res_10c_4)+Number(this.testC.res_10c_3)+Number(this.testC.res_10c_2)+Number(this.testC.res_10c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta11(){
  if(this.testC.res_11c_1){
this.testC.sum_res_11c=this.testC.res_11c_1;
}

if(this.testC.res_11c_2){
this.testC.sum_res_11c=this.testC.res_11c_2;
}
if(this.testC.res_11c_3){
this.testC.sum_res_11c=this.testC.res_11c_3;
}
if(this.testC.res_11c_4){
this.testC.sum_res_11c=this.testC.res_11c_4;
}
if(this.testC.res_11c_5){
this.testC.sum_res_11c=this.testC.res_11c_5;
}
if(this.testC.res_11c_6){
this.testC.sum_res_11c=this.testC.res_11c_6;
}
if(this.testC.res_11c_7){
this.testC.sum_res_11c=this.testC.res_11c_7;
}
if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2);
}
}
if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3);
  }
}
}
if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3);
  }
}
}

if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_4){
      this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_4);
    }
  }
}
}

if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_4){
      if(this.testC.res_11c_5){
        this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_5);
      }
    }
  }
}
}
if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_4){
      if(this.testC.res_11c_5){
        if(this.testC.res_11c_6){
          this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_11c_1){
if(this.testC.res_11c_2){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_4){
      if(this.testC.res_11c_5){
        if(this.testC.res_11c_6){
          if(this.testC.res_11c_7){
            this.testC.sum_res_11c=Number(this.testC.res_11c_1)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6);
}
}
if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
if(this.testC.res_11c_5){
this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_5);
}
}
}


if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
if(this.testC.res_11c_5){
if(this.testC.res_11c_4){
  this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_4);
}
}
}
}

if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
if(this.testC.res_11c_5){
if(this.testC.res_11c_4){
  if(this.testC.res_11c_3){
    this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_3);
  }
}
}
}
}
if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
if(this.testC.res_11c_5){
if(this.testC.res_11c_4){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_2){
      this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_2);
    }
  }
}
}
}
}

if(this.testC.res_11c_7){
if(this.testC.res_11c_6){
if(this.testC.res_11c_5){
if(this.testC.res_11c_4){
  if(this.testC.res_11c_3){
    if(this.testC.res_11c_2){
      if(this.testC.res_11c_1){
        this.testC.sum_res_11c=Number(this.testC.res_11c_7)+Number(this.testC.res_11c_6)+Number(this.testC.res_11c_5)+Number(this.testC.res_11c_4)+Number(this.testC.res_11c_3)+Number(this.testC.res_11c_2)+Number(this.testC.res_11c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta12(){
  if(this.testC.res_12c_1){
this.testC.sum_res_12c=this.testC.res_12c_1;
}

if(this.testC.res_12c_2){
this.testC.sum_res_12c=this.testC.res_12c_2;
}
if(this.testC.res_12c_3){
this.testC.sum_res_12c=this.testC.res_12c_3;
}
if(this.testC.res_12c_4){
this.testC.sum_res_12c=this.testC.res_12c_4;
}
if(this.testC.res_12c_5){
this.testC.sum_res_12c=this.testC.res_12c_5;
}
if(this.testC.res_12c_6){
this.testC.sum_res_12c=this.testC.res_12c_6;
}
if(this.testC.res_12c_7){
this.testC.sum_res_12c=this.testC.res_12c_7;
}
if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2);
}
}
if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3);
  }
}
}
if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3);
  }
}
}

if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_4){
      this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_4);
    }
  }
}
}

if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_4){
      if(this.testC.res_12c_5){
        this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_5);
      }
    }
  }
}
}
if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_4){
      if(this.testC.res_12c_5){
        if(this.testC.res_12c_6){
          this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_12c_1){
if(this.testC.res_12c_2){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_4){
      if(this.testC.res_12c_5){
        if(this.testC.res_12c_6){
          if(this.testC.res_12c_7){
            this.testC.sum_res_12c=Number(this.testC.res_12c_1)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6);
}
}
if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
if(this.testC.res_12c_5){
this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_5);
}
}
}


if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
if(this.testC.res_12c_5){
if(this.testC.res_12c_4){
  this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_4);
}
}
}
}

if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
if(this.testC.res_12c_5){
if(this.testC.res_12c_4){
  if(this.testC.res_12c_3){
    this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_3);
  }
}
}
}
}
if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
if(this.testC.res_12c_5){
if(this.testC.res_12c_4){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_2){
      this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_2);
    }
  }
}
}
}
}

if(this.testC.res_12c_7){
if(this.testC.res_12c_6){
if(this.testC.res_12c_5){
if(this.testC.res_12c_4){
  if(this.testC.res_12c_3){
    if(this.testC.res_12c_2){
      if(this.testC.res_12c_1){
        this.testC.sum_res_12c=Number(this.testC.res_12c_7)+Number(this.testC.res_12c_6)+Number(this.testC.res_12c_5)+Number(this.testC.res_12c_4)+Number(this.testC.res_12c_3)+Number(this.testC.res_12c_2)+Number(this.testC.res_12c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta13(){
  if(this.testC.res_13c_1){
this.testC.sum_res_13c=this.testC.res_13c_1;
}

if(this.testC.res_13c_2){
this.testC.sum_res_13c=this.testC.res_13c_2;
}
if(this.testC.res_13c_3){
this.testC.sum_res_13c=this.testC.res_13c_3;
}
if(this.testC.res_13c_4){
this.testC.sum_res_13c=this.testC.res_13c_4;
}
if(this.testC.res_13c_5){
this.testC.sum_res_13c=this.testC.res_13c_5;
}
if(this.testC.res_13c_6){
this.testC.sum_res_13c=this.testC.res_13c_6;
}
if(this.testC.res_13c_7){
this.testC.sum_res_13c=this.testC.res_13c_7;
}
if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2);
}
}
if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3);
  }
}
}
if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3);
  }
}
}

if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_4){
      this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_4);
    }
  }
}
}

if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_4){
      if(this.testC.res_13c_5){
        this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_5);
      }
    }
  }
}
}
if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_4){
      if(this.testC.res_13c_5){
        if(this.testC.res_13c_6){
          this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_13c_1){
if(this.testC.res_13c_2){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_4){
      if(this.testC.res_13c_5){
        if(this.testC.res_13c_6){
          if(this.testC.res_13c_7){
            this.testC.sum_res_13c=Number(this.testC.res_13c_1)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6);
}
}
if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
if(this.testC.res_13c_5){
this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_5);
}
}
}


if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
if(this.testC.res_13c_5){
if(this.testC.res_13c_4){
  this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_4);
}
}
}
}

if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
if(this.testC.res_13c_5){
if(this.testC.res_13c_4){
  if(this.testC.res_13c_3){
    this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_3);
  }
}
}
}
}
if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
if(this.testC.res_13c_5){
if(this.testC.res_13c_4){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_2){
      this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_2);
    }
  }
}
}
}
}

if(this.testC.res_13c_7){
if(this.testC.res_13c_6){
if(this.testC.res_13c_5){
if(this.testC.res_13c_4){
  if(this.testC.res_13c_3){
    if(this.testC.res_13c_2){
      if(this.testC.res_13c_1){
        this.testC.sum_res_13c=Number(this.testC.res_13c_7)+Number(this.testC.res_13c_6)+Number(this.testC.res_13c_5)+Number(this.testC.res_13c_4)+Number(this.testC.res_13c_3)+Number(this.testC.res_13c_2)+Number(this.testC.res_13c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta14(){
  if(this.testC.res_14c_1){
this.testC.sum_res_14c=this.testC.res_14c_1;
}

if(this.testC.res_14c_2){
this.testC.sum_res_14c=this.testC.res_14c_2;
}
if(this.testC.res_14c_3){
this.testC.sum_res_14c=this.testC.res_14c_3;
}
if(this.testC.res_14c_4){
this.testC.sum_res_14c=this.testC.res_14c_4;
}
if(this.testC.res_14c_5){
this.testC.sum_res_14c=this.testC.res_14c_5;
}
if(this.testC.res_14c_6){
this.testC.sum_res_14c=this.testC.res_14c_6;
}
if(this.testC.res_14c_7){
this.testC.sum_res_14c=this.testC.res_14c_7;
}
if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2);
}
}
if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3);
  }
}
}
if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3);
  }
}
}

if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_4){
      this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_4);
    }
  }
}
}

if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_4){
      if(this.testC.res_14c_5){
        this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_5);
      }
    }
  }
}
}
if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_4){
      if(this.testC.res_14c_5){
        if(this.testC.res_14c_6){
          this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_14c_1){
if(this.testC.res_14c_2){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_4){
      if(this.testC.res_14c_5){
        if(this.testC.res_14c_6){
          if(this.testC.res_14c_7){
            this.testC.sum_res_14c=Number(this.testC.res_14c_1)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6);
}
}
if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
if(this.testC.res_14c_5){
this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_5);
}
}
}


if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
if(this.testC.res_14c_5){
if(this.testC.res_14c_4){
  this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_4);
}
}
}
}

if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
if(this.testC.res_14c_5){
if(this.testC.res_14c_4){
  if(this.testC.res_14c_3){
    this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_3);
  }
}
}
}
}
if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
if(this.testC.res_14c_5){
if(this.testC.res_14c_4){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_2){
      this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_2);
    }
  }
}
}
}
}

if(this.testC.res_14c_7){
if(this.testC.res_14c_6){
if(this.testC.res_14c_5){
if(this.testC.res_14c_4){
  if(this.testC.res_14c_3){
    if(this.testC.res_14c_2){
      if(this.testC.res_14c_1){
        this.testC.sum_res_14c=Number(this.testC.res_14c_7)+Number(this.testC.res_14c_6)+Number(this.testC.res_14c_5)+Number(this.testC.res_14c_4)+Number(this.testC.res_14c_3)+Number(this.testC.res_14c_2)+Number(this.testC.res_14c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta15(){
  if(this.testC.res_15c_1){
this.testC.sum_res_15c=this.testC.res_15c_1;
}

if(this.testC.res_15c_2){
this.testC.sum_res_15c=this.testC.res_15c_2;
}
if(this.testC.res_15c_3){
this.testC.sum_res_15c=this.testC.res_15c_3;
}
if(this.testC.res_15c_4){
this.testC.sum_res_15c=this.testC.res_15c_4;
}
if(this.testC.res_15c_5){
this.testC.sum_res_15c=this.testC.res_15c_5;
}
if(this.testC.res_15c_6){
this.testC.sum_res_15c=this.testC.res_15c_6;
}
if(this.testC.res_15c_7){
this.testC.sum_res_15c=this.testC.res_15c_7;
}
if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2);
}
}
if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3);
  }
}
}
if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3);
  }
}
}

if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_4){
      this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_4);
    }
  }
}
}

if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_4){
      if(this.testC.res_15c_5){
        this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_5);
      }
    }
  }
}
}
if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_4){
      if(this.testC.res_15c_5){
        if(this.testC.res_15c_6){
          this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_15c_1){
if(this.testC.res_15c_2){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_4){
      if(this.testC.res_15c_5){
        if(this.testC.res_15c_6){
          if(this.testC.res_15c_7){
            this.testC.sum_res_15c=Number(this.testC.res_15c_1)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6);
}
}
if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
if(this.testC.res_15c_5){
this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_5);
}
}
}


if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
if(this.testC.res_15c_5){
if(this.testC.res_15c_4){
  this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_4);
}
}
}
}

if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
if(this.testC.res_15c_5){
if(this.testC.res_15c_4){
  if(this.testC.res_15c_3){
    this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_3);
  }
}
}
}
}
if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
if(this.testC.res_15c_5){
if(this.testC.res_15c_4){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_2){
      this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_2);
    }
  }
}
}
}
}

if(this.testC.res_15c_7){
if(this.testC.res_15c_6){
if(this.testC.res_15c_5){
if(this.testC.res_15c_4){
  if(this.testC.res_15c_3){
    if(this.testC.res_15c_2){
      if(this.testC.res_15c_1){
        this.testC.sum_res_15c=Number(this.testC.res_15c_7)+Number(this.testC.res_15c_6)+Number(this.testC.res_15c_5)+Number(this.testC.res_15c_4)+Number(this.testC.res_15c_3)+Number(this.testC.res_15c_2)+Number(this.testC.res_15c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta16(){
  if(this.testC.res_16c_1){
this.testC.sum_res_16c=this.testC.res_16c_1;
}

if(this.testC.res_16c_2){
this.testC.sum_res_16c=this.testC.res_16c_2;
}
if(this.testC.res_16c_3){
this.testC.sum_res_16c=this.testC.res_16c_3;
}
if(this.testC.res_16c_4){
this.testC.sum_res_16c=this.testC.res_16c_4;
}
if(this.testC.res_16c_5){
this.testC.sum_res_16c=this.testC.res_16c_5;
}
if(this.testC.res_16c_6){
this.testC.sum_res_16c=this.testC.res_16c_6;
}
if(this.testC.res_16c_7){
this.testC.sum_res_16c=this.testC.res_16c_7;
}
if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2);
}
}
if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3);
  }
}
}
if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3);
  }
}
}

if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_4){
      this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_4);
    }
  }
}
}

if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_4){
      if(this.testC.res_16c_5){
        this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_5);
      }
    }
  }
}
}
if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_4){
      if(this.testC.res_16c_5){
        if(this.testC.res_16c_6){
          this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_16c_1){
if(this.testC.res_16c_2){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_4){
      if(this.testC.res_16c_5){
        if(this.testC.res_16c_6){
          if(this.testC.res_16c_7){
            this.testC.sum_res_16c=Number(this.testC.res_16c_1)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6);
}
}
if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
if(this.testC.res_16c_5){
this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_5);
}
}
}


if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
if(this.testC.res_16c_5){
if(this.testC.res_16c_4){
  this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_4);
}
}
}
}

if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
if(this.testC.res_16c_5){
if(this.testC.res_16c_4){
  if(this.testC.res_16c_3){
    this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_3);
  }
}
}
}
}
if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
if(this.testC.res_16c_5){
if(this.testC.res_16c_4){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_2){
      this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_2);
    }
  }
}
}
}
}

if(this.testC.res_16c_7){
if(this.testC.res_16c_6){
if(this.testC.res_16c_5){
if(this.testC.res_16c_4){
  if(this.testC.res_16c_3){
    if(this.testC.res_16c_2){
      if(this.testC.res_16c_1){
        this.testC.sum_res_16c=Number(this.testC.res_16c_7)+Number(this.testC.res_16c_6)+Number(this.testC.res_16c_5)+Number(this.testC.res_16c_4)+Number(this.testC.res_16c_3)+Number(this.testC.res_16c_2)+Number(this.testC.res_16c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta17(){
  if(this.testC.res_17c_1){
this.testC.sum_res_17c=this.testC.res_17c_1;
}

if(this.testC.res_17c_2){
this.testC.sum_res_17c=this.testC.res_17c_2;
}
if(this.testC.res_17c_3){
this.testC.sum_res_17c=this.testC.res_17c_3;
}
if(this.testC.res_17c_4){
this.testC.sum_res_17c=this.testC.res_17c_4;
}
if(this.testC.res_17c_5){
this.testC.sum_res_17c=this.testC.res_17c_5;
}
if(this.testC.res_17c_6){
this.testC.sum_res_17c=this.testC.res_17c_6;
}
if(this.testC.res_17c_7){
this.testC.sum_res_17c=this.testC.res_17c_7;
}
if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2);
}
}
if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3);
  }
}
}
if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3);
  }
}
}

if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_4){
      this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_4);
    }
  }
}
}

if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_4){
      if(this.testC.res_17c_5){
        this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_5);
      }
    }
  }
}
}
if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_4){
      if(this.testC.res_17c_5){
        if(this.testC.res_17c_6){
          this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_17c_1){
if(this.testC.res_17c_2){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_4){
      if(this.testC.res_17c_5){
        if(this.testC.res_17c_6){
          if(this.testC.res_17c_7){
            this.testC.sum_res_17c=Number(this.testC.res_17c_1)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6);
}
}
if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
if(this.testC.res_17c_5){
this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_5);
}
}
}


if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
if(this.testC.res_17c_5){
if(this.testC.res_17c_4){
  this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_4);
}
}
}
}

if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
if(this.testC.res_17c_5){
if(this.testC.res_17c_4){
  if(this.testC.res_17c_3){
    this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_3);
  }
}
}
}
}
if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
if(this.testC.res_17c_5){
if(this.testC.res_17c_4){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_2){
      this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_2);
    }
  }
}
}
}
}

if(this.testC.res_17c_7){
if(this.testC.res_17c_6){
if(this.testC.res_17c_5){
if(this.testC.res_17c_4){
  if(this.testC.res_17c_3){
    if(this.testC.res_17c_2){
      if(this.testC.res_17c_1){
        this.testC.sum_res_17c=Number(this.testC.res_17c_7)+Number(this.testC.res_17c_6)+Number(this.testC.res_17c_5)+Number(this.testC.res_17c_4)+Number(this.testC.res_17c_3)+Number(this.testC.res_17c_2)+Number(this.testC.res_17c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta18(){
  if(this.testC.res_18c_1){
this.testC.sum_res_18c=this.testC.res_18c_1;
}

if(this.testC.res_18c_2){
this.testC.sum_res_18c=this.testC.res_18c_2;
}
if(this.testC.res_18c_3){
this.testC.sum_res_18c=this.testC.res_18c_3;
}
if(this.testC.res_18c_4){
this.testC.sum_res_18c=this.testC.res_18c_4;
}
if(this.testC.res_18c_5){
this.testC.sum_res_18c=this.testC.res_18c_5;
}
if(this.testC.res_18c_6){
this.testC.sum_res_18c=this.testC.res_18c_6;
}
if(this.testC.res_18c_7){
this.testC.sum_res_18c=this.testC.res_18c_7;
}
if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2);
}
}
if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3);
  }
}
}
if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3);
  }
}
}

if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_4){
      this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_4);
    }
  }
}
}

if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_4){
      if(this.testC.res_18c_5){
        this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_5);
      }
    }
  }
}
}
if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_4){
      if(this.testC.res_18c_5){
        if(this.testC.res_18c_6){
          this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_18c_1){
if(this.testC.res_18c_2){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_4){
      if(this.testC.res_18c_5){
        if(this.testC.res_18c_6){
          if(this.testC.res_18c_7){
            this.testC.sum_res_18c=Number(this.testC.res_18c_1)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6);
}
}
if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
if(this.testC.res_18c_5){
this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_5);
}
}
}


if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
if(this.testC.res_18c_5){
if(this.testC.res_18c_4){
  this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_4);
}
}
}
}

if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
if(this.testC.res_18c_5){
if(this.testC.res_18c_4){
  if(this.testC.res_18c_3){
    this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_3);
  }
}
}
}
}
if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
if(this.testC.res_18c_5){
if(this.testC.res_18c_4){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_2){
      this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_2);
    }
  }
}
}
}
}

if(this.testC.res_18c_7){
if(this.testC.res_18c_6){
if(this.testC.res_18c_5){
if(this.testC.res_18c_4){
  if(this.testC.res_18c_3){
    if(this.testC.res_18c_2){
      if(this.testC.res_18c_1){
        this.testC.sum_res_18c=Number(this.testC.res_18c_7)+Number(this.testC.res_18c_6)+Number(this.testC.res_18c_5)+Number(this.testC.res_18c_4)+Number(this.testC.res_18c_3)+Number(this.testC.res_18c_2)+Number(this.testC.res_18c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta19(){
  if(this.testC.res_19c_1){
this.testC.sum_res_19c=this.testC.res_19c_1;
}

if(this.testC.res_19c_2){
this.testC.sum_res_19c=this.testC.res_19c_2;
}
if(this.testC.res_19c_3){
this.testC.sum_res_19c=this.testC.res_19c_3;
}
if(this.testC.res_19c_4){
this.testC.sum_res_19c=this.testC.res_19c_4;
}
if(this.testC.res_19c_5){
this.testC.sum_res_19c=this.testC.res_19c_5;
}
if(this.testC.res_19c_6){
this.testC.sum_res_19c=this.testC.res_19c_6;
}
if(this.testC.res_19c_7){
this.testC.sum_res_19c=this.testC.res_19c_7;
}
if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2);
}
}
if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3);
  }
}
}
if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3);
  }
}
}

if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_4){
      this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_4);
    }
  }
}
}

if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_4){
      if(this.testC.res_19c_5){
        this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_5);
      }
    }
  }
}
}
if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_4){
      if(this.testC.res_19c_5){
        if(this.testC.res_19c_6){
          this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_19c_1){
if(this.testC.res_19c_2){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_4){
      if(this.testC.res_19c_5){
        if(this.testC.res_19c_6){
          if(this.testC.res_19c_7){
            this.testC.sum_res_19c=Number(this.testC.res_19c_1)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6);
}
}
if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
if(this.testC.res_19c_5){
this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_5);
}
}
}


if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
if(this.testC.res_19c_5){
if(this.testC.res_19c_4){
  this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_4);
}
}
}
}

if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
if(this.testC.res_19c_5){
if(this.testC.res_19c_4){
  if(this.testC.res_19c_3){
    this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_3);
  }
}
}
}
}
if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
if(this.testC.res_19c_5){
if(this.testC.res_19c_4){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_2){
      this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_2);
    }
  }
}
}
}
}

if(this.testC.res_19c_7){
if(this.testC.res_19c_6){
if(this.testC.res_19c_5){
if(this.testC.res_19c_4){
  if(this.testC.res_19c_3){
    if(this.testC.res_19c_2){
      if(this.testC.res_19c_1){
        this.testC.sum_res_19c=Number(this.testC.res_19c_7)+Number(this.testC.res_19c_6)+Number(this.testC.res_19c_5)+Number(this.testC.res_19c_4)+Number(this.testC.res_19c_3)+Number(this.testC.res_19c_2)+Number(this.testC.res_19c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta20(){
  if(this.testC.res_20c_1){
this.testC.sum_res_20c=this.testC.res_20c_1;
}

if(this.testC.res_20c_2){
this.testC.sum_res_20c=this.testC.res_20c_2;
}
if(this.testC.res_20c_3){
this.testC.sum_res_20c=this.testC.res_20c_3;
}
if(this.testC.res_20c_4){
this.testC.sum_res_20c=this.testC.res_20c_4;
}
if(this.testC.res_20c_5){
this.testC.sum_res_20c=this.testC.res_20c_5;
}
if(this.testC.res_20c_6){
this.testC.sum_res_20c=this.testC.res_20c_6;
}
if(this.testC.res_20c_7){
this.testC.sum_res_20c=this.testC.res_20c_7;
}
if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2);
}
}
if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3);
  }
}
}
if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3);
  }
}
}

if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_4){
      this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_4);
    }
  }
}
}

if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_4){
      if(this.testC.res_20c_5){
        this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_5);
      }
    }
  }
}
}
if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_4){
      if(this.testC.res_20c_5){
        if(this.testC.res_20c_6){
          this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_20c_1){
if(this.testC.res_20c_2){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_4){
      if(this.testC.res_20c_5){
        if(this.testC.res_20c_6){
          if(this.testC.res_20c_7){
            this.testC.sum_res_20c=Number(this.testC.res_20c_1)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6);
}
}
if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
if(this.testC.res_20c_5){
this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_5);
}
}
}


if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
if(this.testC.res_20c_5){
if(this.testC.res_20c_4){
  this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_4);
}
}
}
}

if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
if(this.testC.res_20c_5){
if(this.testC.res_20c_4){
  if(this.testC.res_20c_3){
    this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_3);
  }
}
}
}
}
if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
if(this.testC.res_20c_5){
if(this.testC.res_20c_4){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_2){
      this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_2);
    }
  }
}
}
}
}

if(this.testC.res_20c_7){
if(this.testC.res_20c_6){
if(this.testC.res_20c_5){
if(this.testC.res_20c_4){
  if(this.testC.res_20c_3){
    if(this.testC.res_20c_2){
      if(this.testC.res_20c_1){
        this.testC.sum_res_20c=Number(this.testC.res_20c_7)+Number(this.testC.res_20c_6)+Number(this.testC.res_20c_5)+Number(this.testC.res_20c_4)+Number(this.testC.res_20c_3)+Number(this.testC.res_20c_2)+Number(this.testC.res_20c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta21(){
  if(this.testC.res_21c_1){
this.testC.sum_res_21c=this.testC.res_21c_1;
}

if(this.testC.res_21c_2){
this.testC.sum_res_21c=this.testC.res_21c_2;
}
if(this.testC.res_21c_3){
this.testC.sum_res_21c=this.testC.res_21c_3;
}
if(this.testC.res_21c_4){
this.testC.sum_res_21c=this.testC.res_21c_4;
}
if(this.testC.res_21c_5){
this.testC.sum_res_21c=this.testC.res_21c_5;
}
if(this.testC.res_21c_6){
this.testC.sum_res_21c=this.testC.res_21c_6;
}
if(this.testC.res_21c_7){
this.testC.sum_res_21c=this.testC.res_21c_7;
}
if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2);
}
}
if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3);
  }
}
}
if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3);
  }
}
}

if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_4){
      this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_4);
    }
  }
}
}

if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_4){
      if(this.testC.res_21c_5){
        this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_5);
      }
    }
  }
}
}
if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_4){
      if(this.testC.res_21c_5){
        if(this.testC.res_21c_6){
          this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_21c_1){
if(this.testC.res_21c_2){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_4){
      if(this.testC.res_21c_5){
        if(this.testC.res_21c_6){
          if(this.testC.res_21c_7){
            this.testC.sum_res_21c=Number(this.testC.res_21c_1)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6);
}
}
if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
if(this.testC.res_21c_5){
this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_5);
}
}
}


if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
if(this.testC.res_21c_5){
if(this.testC.res_21c_4){
  this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_4);
}
}
}
}

if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
if(this.testC.res_21c_5){
if(this.testC.res_21c_4){
  if(this.testC.res_21c_3){
    this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_3);
  }
}
}
}
}
if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
if(this.testC.res_21c_5){
if(this.testC.res_21c_4){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_2){
      this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_2);
    }
  }
}
}
}
}

if(this.testC.res_21c_7){
if(this.testC.res_21c_6){
if(this.testC.res_21c_5){
if(this.testC.res_21c_4){
  if(this.testC.res_21c_3){
    if(this.testC.res_21c_2){
      if(this.testC.res_21c_1){
        this.testC.sum_res_21c=Number(this.testC.res_21c_7)+Number(this.testC.res_21c_6)+Number(this.testC.res_21c_5)+Number(this.testC.res_21c_4)+Number(this.testC.res_21c_3)+Number(this.testC.res_21c_2)+Number(this.testC.res_21c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta22(){
  if(this.testC.res_22c_1){
this.testC.sum_res_22c=this.testC.res_22c_1;
}

if(this.testC.res_22c_2){
this.testC.sum_res_22c=this.testC.res_22c_2;
}
if(this.testC.res_22c_3){
this.testC.sum_res_22c=this.testC.res_22c_3;
}
if(this.testC.res_22c_4){
this.testC.sum_res_22c=this.testC.res_22c_4;
}
if(this.testC.res_22c_5){
this.testC.sum_res_22c=this.testC.res_22c_5;
}
if(this.testC.res_22c_6){
this.testC.sum_res_22c=this.testC.res_22c_6;
}
if(this.testC.res_22c_7){
this.testC.sum_res_22c=this.testC.res_22c_7;
}
if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2);
}
}
if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3);
  }
}
}
if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3);
  }
}
}

if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_4){
      this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_4);
    }
  }
}
}

if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_4){
      if(this.testC.res_22c_5){
        this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_5);
      }
    }
  }
}
}
if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_4){
      if(this.testC.res_22c_5){
        if(this.testC.res_22c_6){
          this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_22c_1){
if(this.testC.res_22c_2){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_4){
      if(this.testC.res_22c_5){
        if(this.testC.res_22c_6){
          if(this.testC.res_22c_7){
            this.testC.sum_res_22c=Number(this.testC.res_22c_1)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6);
}
}
if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
if(this.testC.res_22c_5){
this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_5);
}
}
}


if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
if(this.testC.res_22c_5){
if(this.testC.res_22c_4){
  this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_4);
}
}
}
}

if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
if(this.testC.res_22c_5){
if(this.testC.res_22c_4){
  if(this.testC.res_22c_3){
    this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_3);
  }
}
}
}
}
if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
if(this.testC.res_22c_5){
if(this.testC.res_22c_4){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_2){
      this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_2);
    }
  }
}
}
}
}

if(this.testC.res_22c_7){
if(this.testC.res_22c_6){
if(this.testC.res_22c_5){
if(this.testC.res_22c_4){
  if(this.testC.res_22c_3){
    if(this.testC.res_22c_2){
      if(this.testC.res_22c_1){
        this.testC.sum_res_22c=Number(this.testC.res_22c_7)+Number(this.testC.res_22c_6)+Number(this.testC.res_22c_5)+Number(this.testC.res_22c_4)+Number(this.testC.res_22c_3)+Number(this.testC.res_22c_2)+Number(this.testC.res_22c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

sum_pregunta23(){
  if(this.testC.res_23c_1){
this.testC.sum_res_23c=this.testC.res_23c_1;
}

if(this.testC.res_23c_2){
this.testC.sum_res_23c=this.testC.res_23c_2;
}
if(this.testC.res_23c_3){
this.testC.sum_res_23c=this.testC.res_23c_3;
}
if(this.testC.res_23c_4){
this.testC.sum_res_23c=this.testC.res_23c_4;
}
if(this.testC.res_23c_5){
this.testC.sum_res_23c=this.testC.res_23c_5;
}
if(this.testC.res_23c_6){
this.testC.sum_res_23c=this.testC.res_23c_6;
}
if(this.testC.res_23c_7){
this.testC.sum_res_23c=this.testC.res_23c_7;
}
if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2);
}
}
if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3);
  }
}
}
if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3);
  }
}
}

if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_4){
      this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_4);
    }
  }
}
}

if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_4){
      if(this.testC.res_23c_5){
        this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_5);
      }
    }
  }
}
}
if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_4){
      if(this.testC.res_23c_5){
        if(this.testC.res_23c_6){
          this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_6);
        }
      }
    }
  }
}
}

if(this.testC.res_23c_1){
if(this.testC.res_23c_2){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_4){
      if(this.testC.res_23c_5){
        if(this.testC.res_23c_6){
          if(this.testC.res_23c_7){
            this.testC.sum_res_23c=Number(this.testC.res_23c_1)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_7);
          }
        }
      }
    }
  }
}
}

//Reversa

if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6);
}
}
if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
if(this.testC.res_23c_5){
this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_5);
}
}
}


if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
if(this.testC.res_23c_5){
if(this.testC.res_23c_4){
  this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_4);
}
}
}
}

if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
if(this.testC.res_23c_5){
if(this.testC.res_23c_4){
  if(this.testC.res_23c_3){
    this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_3);
  }
}
}
}
}
if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
if(this.testC.res_23c_5){
if(this.testC.res_23c_4){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_2){
      this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_2);
    }
  }
}
}
}
}

if(this.testC.res_23c_7){
if(this.testC.res_23c_6){
if(this.testC.res_23c_5){
if(this.testC.res_23c_4){
  if(this.testC.res_23c_3){
    if(this.testC.res_23c_2){
      if(this.testC.res_23c_1){
        this.testC.sum_res_23c=Number(this.testC.res_23c_7)+Number(this.testC.res_23c_6)+Number(this.testC.res_23c_5)+Number(this.testC.res_23c_4)+Number(this.testC.res_23c_3)+Number(this.testC.res_23c_2)+Number(this.testC.res_23c_1);
      }
    }
  }
}
}
}
}
}//fin de metodo

}//Fin del componente

@Component({
  selector: 'TestIsr',
  templateUrl: './x.html',
  styleUrls: ['./testisra2.component.css']
/*   template: `
      <div>This is your component 2 </div>
      
  `, */
})
export class TestIsr {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  testF: TestIsraF=new TestIsraF();
  @Input() testCx!: TestIsraC;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.testF.pregunta_1f=1;
    this.testF.pregunta_2f=2;
    this.testF.pregunta_3f=3;
    this.testF.pregunta_4f=4;
    this.testF.pregunta_5f=5;
    this.testF.pregunta_6f=6;
    this.testF.pregunta_7f=7;
    this.testF.pregunta_8f=8;
    this.testF.pregunta_9f=9;
    this.testF.pregunta_10f=10;
    this.testF.pregunta_11f=11;
    this.testF.pregunta_12f=12;
    this.testF.pregunta_13f=13;
    this.testF.pregunta_14f=14;
    this.testF.pregunta_15f=15;
    this.testF.pregunta_16f=16;
    this.testF.pregunta_17f=17;
    this.testF.pregunta_18f=18;
    this.testF.pregunta_19f=19;
    this.testF.pregunta_20f=20;
    this.testF.pregunta_21f=21;
    this.testF.pregunta_22f=22;
    this.testF.pregunta_23f=23;
    console.log(this.testCx);
  }

  sum_pregunta1(){

    if(this.testF.res_1f_1){
       this.testF.sum_res_1f=this.testF.res_1f_1;
     }
  
     if(this.testF.res_1f_2){
       this.testF.sum_res_1f=this.testF.res_1f_2;
     }
     if(this.testF.res_1f_3){
       this.testF.sum_res_1f=this.testF.res_1f_3;
     }
     if(this.testF.res_1f_4){
       this.testF.sum_res_1f=this.testF.res_1f_4;
     }
     if(this.testF.res_1f_5){
       this.testF.sum_res_1f=this.testF.res_1f_5;
     }
     if(this.testF.res_1f_6){
       this.testF.sum_res_1f=this.testF.res_1f_6;
     }
     if(this.testF.res_1f_7){
       this.testF.sum_res_1f=this.testF.res_1f_7;
     }
     if(this.testF.res_1f_8){
      this.testF.sum_res_1f=this.testF.res_1f_8;
     }
     if(this.testF.res_1f_9){
      this.testF.sum_res_1f=this.testF.res_1f_9;
     }
     if(this.testF.res_1f_10){
      this.testF.sum_res_1f=this.testF.res_1f_10;
     }
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2);
       }
     }
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3);
         }
       }
     }
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3);
         }
       }
     }
  
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           if(this.testF.res_1f_4){
             this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4);
           }
         }
       }
     }
  
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           if(this.testF.res_1f_4){
             if(this.testF.res_1f_5){
               this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           if(this.testF.res_1f_4){
             if(this.testF.res_1f_5){
               if(this.testF.res_1f_6){
                 this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_1f_1){
       if(this.testF.res_1f_2){
         if(this.testF.res_1f_3){
           if(this.testF.res_1f_4){
             if(this.testF.res_1f_5){
               if(this.testF.res_1f_6){
                 if(this.testF.res_1f_7){
                   this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_1f_1){
      if(this.testF.res_1f_2){
        if(this.testF.res_1f_3){
          if(this.testF.res_1f_4){
            if(this.testF.res_1f_5){
              if(this.testF.res_1f_6){
                if(this.testF.res_1f_7){
                  if(this.testF.res_1f_8){
                    this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_1f_1){
      if(this.testF.res_1f_2){
        if(this.testF.res_1f_3){
          if(this.testF.res_1f_4){
            if(this.testF.res_1f_5){
              if(this.testF.res_1f_6){
                if(this.testF.res_1f_7){
                  if(this.testF.res_1f_8){
                    if(this.testF.res_1f_9){
                      this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_1f_1){
      if(this.testF.res_1f_2){
        if(this.testF.res_1f_3){
          if(this.testF.res_1f_4){
            if(this.testF.res_1f_5){
              if(this.testF.res_1f_6){
                if(this.testF.res_1f_7){
                  if(this.testF.res_1f_8){
                    if(this.testF.res_1f_9){
                      if(this.testF.res_1f_10){
                        this.testF.sum_res_1f=Number(this.testF.res_1f_1)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_1f_10){
  this.testF.sum_res_1f=Number(this.testF.res_1f_10);
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
    this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9);
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8);
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7);
      }
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          if(this.testF.res_1f_5){
            this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          if(this.testF.res_1f_5){
            if(this.testF.res_1f_4){
              this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          if(this.testF.res_1f_5){
            if(this.testF.res_1f_4){
              if(this.testF.res_1f_3){
                this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          if(this.testF.res_1f_5){
            if(this.testF.res_1f_4){
              if(this.testF.res_1f_3){
                if(this.testF.res_1f_2){
                  this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_1f_10){
  if(this.testF.res_1f_9){
     if(this.testF.res_1f_8){
      if(this.testF.res_1f_7){
        if(this.testF.res_1f_6){
          if(this.testF.res_1f_5){
            if(this.testF.res_1f_4){
              if(this.testF.res_1f_3){
                if(this.testF.res_1f_2){
                  if(this.testF.res_1f_1){
                    this.testF.sum_res_1f=Number(this.testF.res_1f_10)+Number(this.testF.res_1f_9)+Number(this.testF.res_1f_8)+Number(this.testF.res_1f_7)+Number(this.testF.res_1f_6)+Number(this.testF.res_1f_5)+Number(this.testF.res_1f_4)+Number(this.testF.res_1f_3)+Number(this.testF.res_1f_2)+Number(this.testF.res_1f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo


  sum_pregunta2(){

    if(this.testF.res_2f_1){
       this.testF.sum_res_2f=this.testF.res_2f_1;
     }
  
     if(this.testF.res_2f_2){
       this.testF.sum_res_2f=this.testF.res_2f_2;
     }
     if(this.testF.res_2f_3){
       this.testF.sum_res_2f=this.testF.res_2f_3;
     }
     if(this.testF.res_2f_4){
       this.testF.sum_res_2f=this.testF.res_2f_4;
     }
     if(this.testF.res_2f_5){
       this.testF.sum_res_2f=this.testF.res_2f_5;
     }
     if(this.testF.res_2f_6){
       this.testF.sum_res_2f=this.testF.res_2f_6;
     }
     if(this.testF.res_2f_7){
       this.testF.sum_res_2f=this.testF.res_2f_7;
     }
     if(this.testF.res_2f_8){
      this.testF.sum_res_2f=this.testF.res_2f_8;
     }
     if(this.testF.res_2f_9){
      this.testF.sum_res_2f=this.testF.res_2f_9;
     }
     if(this.testF.res_2f_10){
      this.testF.sum_res_2f=this.testF.res_2f_10;
     }
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2);
       }
     }
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3);
         }
       }
     }
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3);
         }
       }
     }
  
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           if(this.testF.res_2f_4){
             this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4);
           }
         }
       }
     }
  
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           if(this.testF.res_2f_4){
             if(this.testF.res_2f_5){
               this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           if(this.testF.res_2f_4){
             if(this.testF.res_2f_5){
               if(this.testF.res_2f_6){
                 this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_2f_1){
       if(this.testF.res_2f_2){
         if(this.testF.res_2f_3){
           if(this.testF.res_2f_4){
             if(this.testF.res_2f_5){
               if(this.testF.res_2f_6){
                 if(this.testF.res_2f_7){
                   this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_2f_1){
      if(this.testF.res_2f_2){
        if(this.testF.res_2f_3){
          if(this.testF.res_2f_4){
            if(this.testF.res_2f_5){
              if(this.testF.res_2f_6){
                if(this.testF.res_2f_7){
                  if(this.testF.res_2f_8){
                    this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_2f_1){
      if(this.testF.res_2f_2){
        if(this.testF.res_2f_3){
          if(this.testF.res_2f_4){
            if(this.testF.res_2f_5){
              if(this.testF.res_2f_6){
                if(this.testF.res_2f_7){
                  if(this.testF.res_2f_8){
                    if(this.testF.res_2f_9){
                      this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_2f_1){
      if(this.testF.res_2f_2){
        if(this.testF.res_2f_3){
          if(this.testF.res_2f_4){
            if(this.testF.res_2f_5){
              if(this.testF.res_2f_6){
                if(this.testF.res_2f_7){
                  if(this.testF.res_2f_8){
                    if(this.testF.res_2f_9){
                      if(this.testF.res_2f_10){
                        this.testF.sum_res_2f=Number(this.testF.res_2f_1)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_2f_10){
  this.testF.sum_res_2f=Number(this.testF.res_2f_10);
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
    this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9);
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8);
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7);
      }
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          if(this.testF.res_2f_5){
            this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          if(this.testF.res_2f_5){
            if(this.testF.res_2f_4){
              this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          if(this.testF.res_2f_5){
            if(this.testF.res_2f_4){
              if(this.testF.res_2f_3){
                this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          if(this.testF.res_2f_5){
            if(this.testF.res_2f_4){
              if(this.testF.res_2f_3){
                if(this.testF.res_2f_2){
                  this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_2f_10){
  if(this.testF.res_2f_9){
     if(this.testF.res_2f_8){
      if(this.testF.res_2f_7){
        if(this.testF.res_2f_6){
          if(this.testF.res_2f_5){
            if(this.testF.res_2f_4){
              if(this.testF.res_2f_3){
                if(this.testF.res_2f_2){
                  if(this.testF.res_2f_1){
                    this.testF.sum_res_2f=Number(this.testF.res_2f_10)+Number(this.testF.res_2f_9)+Number(this.testF.res_2f_8)+Number(this.testF.res_2f_7)+Number(this.testF.res_2f_6)+Number(this.testF.res_2f_5)+Number(this.testF.res_2f_4)+Number(this.testF.res_2f_3)+Number(this.testF.res_2f_2)+Number(this.testF.res_2f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta3(){

    if(this.testF.res_3f_1){
       this.testF.sum_res_3f=this.testF.res_3f_1;
     }
  
     if(this.testF.res_3f_2){
       this.testF.sum_res_3f=this.testF.res_3f_2;
     }
     if(this.testF.res_3f_3){
       this.testF.sum_res_3f=this.testF.res_3f_3;
     }
     if(this.testF.res_3f_4){
       this.testF.sum_res_3f=this.testF.res_3f_4;
     }
     if(this.testF.res_3f_5){
       this.testF.sum_res_3f=this.testF.res_3f_5;
     }
     if(this.testF.res_3f_6){
       this.testF.sum_res_3f=this.testF.res_3f_6;
     }
     if(this.testF.res_3f_7){
       this.testF.sum_res_3f=this.testF.res_3f_7;
     }
     if(this.testF.res_3f_8){
      this.testF.sum_res_3f=this.testF.res_3f_8;
     }
     if(this.testF.res_3f_9){
      this.testF.sum_res_3f=this.testF.res_3f_9;
     }
     if(this.testF.res_3f_10){
      this.testF.sum_res_3f=this.testF.res_3f_10;
     }
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2);
       }
     }
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3);
         }
       }
     }
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3);
         }
       }
     }
  
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           if(this.testF.res_3f_4){
             this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4);
           }
         }
       }
     }
  
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           if(this.testF.res_3f_4){
             if(this.testF.res_3f_5){
               this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           if(this.testF.res_3f_4){
             if(this.testF.res_3f_5){
               if(this.testF.res_3f_6){
                 this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_3f_1){
       if(this.testF.res_3f_2){
         if(this.testF.res_3f_3){
           if(this.testF.res_3f_4){
             if(this.testF.res_3f_5){
               if(this.testF.res_3f_6){
                 if(this.testF.res_3f_7){
                   this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_3f_1){
      if(this.testF.res_3f_2){
        if(this.testF.res_3f_3){
          if(this.testF.res_3f_4){
            if(this.testF.res_3f_5){
              if(this.testF.res_3f_6){
                if(this.testF.res_3f_7){
                  if(this.testF.res_3f_8){
                    this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_3f_1){
      if(this.testF.res_3f_2){
        if(this.testF.res_3f_3){
          if(this.testF.res_3f_4){
            if(this.testF.res_3f_5){
              if(this.testF.res_3f_6){
                if(this.testF.res_3f_7){
                  if(this.testF.res_3f_8){
                    if(this.testF.res_3f_9){
                      this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_3f_1){
      if(this.testF.res_3f_2){
        if(this.testF.res_3f_3){
          if(this.testF.res_3f_4){
            if(this.testF.res_3f_5){
              if(this.testF.res_3f_6){
                if(this.testF.res_3f_7){
                  if(this.testF.res_3f_8){
                    if(this.testF.res_3f_9){
                      if(this.testF.res_3f_10){
                        this.testF.sum_res_3f=Number(this.testF.res_3f_1)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_3f_10){
  this.testF.sum_res_3f=Number(this.testF.res_3f_10);
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
    this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9);
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8);
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7);
      }
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          if(this.testF.res_3f_5){
            this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          if(this.testF.res_3f_5){
            if(this.testF.res_3f_4){
              this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          if(this.testF.res_3f_5){
            if(this.testF.res_3f_4){
              if(this.testF.res_3f_3){
                this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          if(this.testF.res_3f_5){
            if(this.testF.res_3f_4){
              if(this.testF.res_3f_3){
                if(this.testF.res_3f_2){
                  this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_3f_10){
  if(this.testF.res_3f_9){
     if(this.testF.res_3f_8){
      if(this.testF.res_3f_7){
        if(this.testF.res_3f_6){
          if(this.testF.res_3f_5){
            if(this.testF.res_3f_4){
              if(this.testF.res_3f_3){
                if(this.testF.res_3f_2){
                  if(this.testF.res_3f_1){
                    this.testF.sum_res_3f=Number(this.testF.res_3f_10)+Number(this.testF.res_3f_9)+Number(this.testF.res_3f_8)+Number(this.testF.res_3f_7)+Number(this.testF.res_3f_6)+Number(this.testF.res_3f_5)+Number(this.testF.res_3f_4)+Number(this.testF.res_3f_3)+Number(this.testF.res_3f_2)+Number(this.testF.res_3f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta4(){

    if(this.testF.res_4f_1){
       this.testF.sum_res_4f=this.testF.res_4f_1;
     }
  
     if(this.testF.res_4f_2){
       this.testF.sum_res_4f=this.testF.res_4f_2;
     }
     if(this.testF.res_4f_3){
       this.testF.sum_res_4f=this.testF.res_4f_3;
     }
     if(this.testF.res_4f_4){
       this.testF.sum_res_4f=this.testF.res_4f_4;
     }
     if(this.testF.res_4f_5){
       this.testF.sum_res_4f=this.testF.res_4f_5;
     }
     if(this.testF.res_4f_6){
       this.testF.sum_res_4f=this.testF.res_4f_6;
     }
     if(this.testF.res_4f_7){
       this.testF.sum_res_4f=this.testF.res_4f_7;
     }
     if(this.testF.res_4f_8){
      this.testF.sum_res_4f=this.testF.res_4f_8;
     }
     if(this.testF.res_4f_9){
      this.testF.sum_res_4f=this.testF.res_4f_9;
     }
     if(this.testF.res_4f_10){
      this.testF.sum_res_4f=this.testF.res_4f_10;
     }
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2);
       }
     }
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3);
         }
       }
     }
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3);
         }
       }
     }
  
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           if(this.testF.res_4f_4){
             this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4);
           }
         }
       }
     }
  
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           if(this.testF.res_4f_4){
             if(this.testF.res_4f_5){
               this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           if(this.testF.res_4f_4){
             if(this.testF.res_4f_5){
               if(this.testF.res_4f_6){
                 this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_4f_1){
       if(this.testF.res_4f_2){
         if(this.testF.res_4f_3){
           if(this.testF.res_4f_4){
             if(this.testF.res_4f_5){
               if(this.testF.res_4f_6){
                 if(this.testF.res_4f_7){
                   this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_4f_1){
      if(this.testF.res_4f_2){
        if(this.testF.res_4f_3){
          if(this.testF.res_4f_4){
            if(this.testF.res_4f_5){
              if(this.testF.res_4f_6){
                if(this.testF.res_4f_7){
                  if(this.testF.res_4f_8){
                    this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_4f_1){
      if(this.testF.res_4f_2){
        if(this.testF.res_4f_3){
          if(this.testF.res_4f_4){
            if(this.testF.res_4f_5){
              if(this.testF.res_4f_6){
                if(this.testF.res_4f_7){
                  if(this.testF.res_4f_8){
                    if(this.testF.res_4f_9){
                      this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_4f_1){
      if(this.testF.res_4f_2){
        if(this.testF.res_4f_3){
          if(this.testF.res_4f_4){
            if(this.testF.res_4f_5){
              if(this.testF.res_4f_6){
                if(this.testF.res_4f_7){
                  if(this.testF.res_4f_8){
                    if(this.testF.res_4f_9){
                      if(this.testF.res_4f_10){
                        this.testF.sum_res_4f=Number(this.testF.res_4f_1)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_4f_10){
  this.testF.sum_res_4f=Number(this.testF.res_4f_10);
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
    this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9);
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8);
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7);
      }
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          if(this.testF.res_4f_5){
            this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          if(this.testF.res_4f_5){
            if(this.testF.res_4f_4){
              this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          if(this.testF.res_4f_5){
            if(this.testF.res_4f_4){
              if(this.testF.res_4f_3){
                this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          if(this.testF.res_4f_5){
            if(this.testF.res_4f_4){
              if(this.testF.res_4f_3){
                if(this.testF.res_4f_2){
                  this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_4f_10){
  if(this.testF.res_4f_9){
     if(this.testF.res_4f_8){
      if(this.testF.res_4f_7){
        if(this.testF.res_4f_6){
          if(this.testF.res_4f_5){
            if(this.testF.res_4f_4){
              if(this.testF.res_4f_3){
                if(this.testF.res_4f_2){
                  if(this.testF.res_4f_1){
                    this.testF.sum_res_4f=Number(this.testF.res_4f_10)+Number(this.testF.res_4f_9)+Number(this.testF.res_4f_8)+Number(this.testF.res_4f_7)+Number(this.testF.res_4f_6)+Number(this.testF.res_4f_5)+Number(this.testF.res_4f_4)+Number(this.testF.res_4f_3)+Number(this.testF.res_4f_2)+Number(this.testF.res_4f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta5(){

    if(this.testF.res_5f_1){
       this.testF.sum_res_5f=this.testF.res_5f_1;
     }
  
     if(this.testF.res_5f_2){
       this.testF.sum_res_5f=this.testF.res_5f_2;
     }
     if(this.testF.res_5f_3){
       this.testF.sum_res_5f=this.testF.res_5f_3;
     }
     if(this.testF.res_5f_4){
       this.testF.sum_res_5f=this.testF.res_5f_4;
     }
     if(this.testF.res_5f_5){
       this.testF.sum_res_5f=this.testF.res_5f_5;
     }
     if(this.testF.res_5f_6){
       this.testF.sum_res_5f=this.testF.res_5f_6;
     }
     if(this.testF.res_5f_7){
       this.testF.sum_res_5f=this.testF.res_5f_7;
     }
     if(this.testF.res_5f_8){
      this.testF.sum_res_5f=this.testF.res_5f_8;
     }
     if(this.testF.res_5f_9){
      this.testF.sum_res_5f=this.testF.res_5f_9;
     }
     if(this.testF.res_5f_10){
      this.testF.sum_res_5f=this.testF.res_5f_10;
     }
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2);
       }
     }
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3);
         }
       }
     }
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3);
         }
       }
     }
  
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           if(this.testF.res_5f_4){
             this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4);
           }
         }
       }
     }
  
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           if(this.testF.res_5f_4){
             if(this.testF.res_5f_5){
               this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           if(this.testF.res_5f_4){
             if(this.testF.res_5f_5){
               if(this.testF.res_5f_6){
                 this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_5f_1){
       if(this.testF.res_5f_2){
         if(this.testF.res_5f_3){
           if(this.testF.res_5f_4){
             if(this.testF.res_5f_5){
               if(this.testF.res_5f_6){
                 if(this.testF.res_5f_7){
                   this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_5f_1){
      if(this.testF.res_5f_2){
        if(this.testF.res_5f_3){
          if(this.testF.res_5f_4){
            if(this.testF.res_5f_5){
              if(this.testF.res_5f_6){
                if(this.testF.res_5f_7){
                  if(this.testF.res_5f_8){
                    this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_5f_1){
      if(this.testF.res_5f_2){
        if(this.testF.res_5f_3){
          if(this.testF.res_5f_4){
            if(this.testF.res_5f_5){
              if(this.testF.res_5f_6){
                if(this.testF.res_5f_7){
                  if(this.testF.res_5f_8){
                    if(this.testF.res_5f_9){
                      this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_5f_1){
      if(this.testF.res_5f_2){
        if(this.testF.res_5f_3){
          if(this.testF.res_5f_4){
            if(this.testF.res_5f_5){
              if(this.testF.res_5f_6){
                if(this.testF.res_5f_7){
                  if(this.testF.res_5f_8){
                    if(this.testF.res_5f_9){
                      if(this.testF.res_5f_10){
                        this.testF.sum_res_5f=Number(this.testF.res_5f_1)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_5f_10){
  this.testF.sum_res_5f=Number(this.testF.res_5f_10);
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
    this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9);
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8);
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7);
      }
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          if(this.testF.res_5f_5){
            this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          if(this.testF.res_5f_5){
            if(this.testF.res_5f_4){
              this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          if(this.testF.res_5f_5){
            if(this.testF.res_5f_4){
              if(this.testF.res_5f_3){
                this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          if(this.testF.res_5f_5){
            if(this.testF.res_5f_4){
              if(this.testF.res_5f_3){
                if(this.testF.res_5f_2){
                  this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_5f_10){
  if(this.testF.res_5f_9){
     if(this.testF.res_5f_8){
      if(this.testF.res_5f_7){
        if(this.testF.res_5f_6){
          if(this.testF.res_5f_5){
            if(this.testF.res_5f_4){
              if(this.testF.res_5f_3){
                if(this.testF.res_5f_2){
                  if(this.testF.res_5f_1){
                    this.testF.sum_res_5f=Number(this.testF.res_5f_10)+Number(this.testF.res_5f_9)+Number(this.testF.res_5f_8)+Number(this.testF.res_5f_7)+Number(this.testF.res_5f_6)+Number(this.testF.res_5f_5)+Number(this.testF.res_5f_4)+Number(this.testF.res_5f_3)+Number(this.testF.res_5f_2)+Number(this.testF.res_5f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta6(){

    if(this.testF.res_6f_1){
       this.testF.sum_res_6f=this.testF.res_6f_1;
     }
  
     if(this.testF.res_6f_2){
       this.testF.sum_res_6f=this.testF.res_6f_2;
     }
     if(this.testF.res_6f_3){
       this.testF.sum_res_6f=this.testF.res_6f_3;
     }
     if(this.testF.res_6f_4){
       this.testF.sum_res_6f=this.testF.res_6f_4;
     }
     if(this.testF.res_6f_5){
       this.testF.sum_res_6f=this.testF.res_6f_5;
     }
     if(this.testF.res_6f_6){
       this.testF.sum_res_6f=this.testF.res_6f_6;
     }
     if(this.testF.res_6f_7){
       this.testF.sum_res_6f=this.testF.res_6f_7;
     }
     if(this.testF.res_6f_8){
      this.testF.sum_res_6f=this.testF.res_6f_8;
     }
     if(this.testF.res_6f_9){
      this.testF.sum_res_6f=this.testF.res_6f_9;
     }
     if(this.testF.res_6f_10){
      this.testF.sum_res_6f=this.testF.res_6f_10;
     }
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2);
       }
     }
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3);
         }
       }
     }
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3);
         }
       }
     }
  
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           if(this.testF.res_6f_4){
             this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4);
           }
         }
       }
     }
  
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           if(this.testF.res_6f_4){
             if(this.testF.res_6f_5){
               this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           if(this.testF.res_6f_4){
             if(this.testF.res_6f_5){
               if(this.testF.res_6f_6){
                 this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_6f_1){
       if(this.testF.res_6f_2){
         if(this.testF.res_6f_3){
           if(this.testF.res_6f_4){
             if(this.testF.res_6f_5){
               if(this.testF.res_6f_6){
                 if(this.testF.res_6f_7){
                   this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_6f_1){
      if(this.testF.res_6f_2){
        if(this.testF.res_6f_3){
          if(this.testF.res_6f_4){
            if(this.testF.res_6f_5){
              if(this.testF.res_6f_6){
                if(this.testF.res_6f_7){
                  if(this.testF.res_6f_8){
                    this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_6f_1){
      if(this.testF.res_6f_2){
        if(this.testF.res_6f_3){
          if(this.testF.res_6f_4){
            if(this.testF.res_6f_5){
              if(this.testF.res_6f_6){
                if(this.testF.res_6f_7){
                  if(this.testF.res_6f_8){
                    if(this.testF.res_6f_9){
                      this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_6f_1){
      if(this.testF.res_6f_2){
        if(this.testF.res_6f_3){
          if(this.testF.res_6f_4){
            if(this.testF.res_6f_5){
              if(this.testF.res_6f_6){
                if(this.testF.res_6f_7){
                  if(this.testF.res_6f_8){
                    if(this.testF.res_6f_9){
                      if(this.testF.res_6f_10){
                        this.testF.sum_res_6f=Number(this.testF.res_6f_1)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_6f_10){
  this.testF.sum_res_6f=Number(this.testF.res_6f_10);
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
    this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9);
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8);
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7);
      }
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          if(this.testF.res_6f_5){
            this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          if(this.testF.res_6f_5){
            if(this.testF.res_6f_4){
              this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          if(this.testF.res_6f_5){
            if(this.testF.res_6f_4){
              if(this.testF.res_6f_3){
                this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          if(this.testF.res_6f_5){
            if(this.testF.res_6f_4){
              if(this.testF.res_6f_3){
                if(this.testF.res_6f_2){
                  this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_6f_10){
  if(this.testF.res_6f_9){
     if(this.testF.res_6f_8){
      if(this.testF.res_6f_7){
        if(this.testF.res_6f_6){
          if(this.testF.res_6f_5){
            if(this.testF.res_6f_4){
              if(this.testF.res_6f_3){
                if(this.testF.res_6f_2){
                  if(this.testF.res_6f_1){
                    this.testF.sum_res_6f=Number(this.testF.res_6f_10)+Number(this.testF.res_6f_9)+Number(this.testF.res_6f_8)+Number(this.testF.res_6f_7)+Number(this.testF.res_6f_6)+Number(this.testF.res_6f_5)+Number(this.testF.res_6f_4)+Number(this.testF.res_6f_3)+Number(this.testF.res_6f_2)+Number(this.testF.res_6f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta7(){

    if(this.testF.res_7f_1){
       this.testF.sum_res_7f=this.testF.res_7f_1;
     }
  
     if(this.testF.res_7f_2){
       this.testF.sum_res_7f=this.testF.res_7f_2;
     }
     if(this.testF.res_7f_3){
       this.testF.sum_res_7f=this.testF.res_7f_3;
     }
     if(this.testF.res_7f_4){
       this.testF.sum_res_7f=this.testF.res_7f_4;
     }
     if(this.testF.res_7f_5){
       this.testF.sum_res_7f=this.testF.res_7f_5;
     }
     if(this.testF.res_7f_6){
       this.testF.sum_res_7f=this.testF.res_7f_6;
     }
     if(this.testF.res_7f_7){
       this.testF.sum_res_7f=this.testF.res_7f_7;
     }
     if(this.testF.res_7f_8){
      this.testF.sum_res_7f=this.testF.res_7f_8;
     }
     if(this.testF.res_7f_9){
      this.testF.sum_res_7f=this.testF.res_7f_9;
     }
     if(this.testF.res_7f_10){
      this.testF.sum_res_7f=this.testF.res_7f_10;
     }
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2);
       }
     }
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3);
         }
       }
     }
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3);
         }
       }
     }
  
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           if(this.testF.res_7f_4){
             this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4);
           }
         }
       }
     }
  
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           if(this.testF.res_7f_4){
             if(this.testF.res_7f_5){
               this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           if(this.testF.res_7f_4){
             if(this.testF.res_7f_5){
               if(this.testF.res_7f_6){
                 this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_7f_1){
       if(this.testF.res_7f_2){
         if(this.testF.res_7f_3){
           if(this.testF.res_7f_4){
             if(this.testF.res_7f_5){
               if(this.testF.res_7f_6){
                 if(this.testF.res_7f_7){
                   this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_7f_1){
      if(this.testF.res_7f_2){
        if(this.testF.res_7f_3){
          if(this.testF.res_7f_4){
            if(this.testF.res_7f_5){
              if(this.testF.res_7f_6){
                if(this.testF.res_7f_7){
                  if(this.testF.res_7f_8){
                    this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_7f_1){
      if(this.testF.res_7f_2){
        if(this.testF.res_7f_3){
          if(this.testF.res_7f_4){
            if(this.testF.res_7f_5){
              if(this.testF.res_7f_6){
                if(this.testF.res_7f_7){
                  if(this.testF.res_7f_8){
                    if(this.testF.res_7f_9){
                      this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_7f_1){
      if(this.testF.res_7f_2){
        if(this.testF.res_7f_3){
          if(this.testF.res_7f_4){
            if(this.testF.res_7f_5){
              if(this.testF.res_7f_6){
                if(this.testF.res_7f_7){
                  if(this.testF.res_7f_8){
                    if(this.testF.res_7f_9){
                      if(this.testF.res_7f_10){
                        this.testF.sum_res_7f=Number(this.testF.res_7f_1)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_7f_10){
  this.testF.sum_res_7f=Number(this.testF.res_7f_10);
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
    this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9);
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8);
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7);
      }
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          if(this.testF.res_7f_5){
            this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          if(this.testF.res_7f_5){
            if(this.testF.res_7f_4){
              this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          if(this.testF.res_7f_5){
            if(this.testF.res_7f_4){
              if(this.testF.res_7f_3){
                this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          if(this.testF.res_7f_5){
            if(this.testF.res_7f_4){
              if(this.testF.res_7f_3){
                if(this.testF.res_7f_2){
                  this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_7f_10){
  if(this.testF.res_7f_9){
     if(this.testF.res_7f_8){
      if(this.testF.res_7f_7){
        if(this.testF.res_7f_6){
          if(this.testF.res_7f_5){
            if(this.testF.res_7f_4){
              if(this.testF.res_7f_3){
                if(this.testF.res_7f_2){
                  if(this.testF.res_7f_1){
                    this.testF.sum_res_7f=Number(this.testF.res_7f_10)+Number(this.testF.res_7f_9)+Number(this.testF.res_7f_8)+Number(this.testF.res_7f_7)+Number(this.testF.res_7f_6)+Number(this.testF.res_7f_5)+Number(this.testF.res_7f_4)+Number(this.testF.res_7f_3)+Number(this.testF.res_7f_2)+Number(this.testF.res_7f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta8(){

    if(this.testF.res_8f_1){
       this.testF.sum_res_8f=this.testF.res_8f_1;
     }
  
     if(this.testF.res_8f_2){
       this.testF.sum_res_8f=this.testF.res_8f_2;
     }
     if(this.testF.res_8f_3){
       this.testF.sum_res_8f=this.testF.res_8f_3;
     }
     if(this.testF.res_8f_4){
       this.testF.sum_res_8f=this.testF.res_8f_4;
     }
     if(this.testF.res_8f_5){
       this.testF.sum_res_8f=this.testF.res_8f_5;
     }
     if(this.testF.res_8f_6){
       this.testF.sum_res_8f=this.testF.res_8f_6;
     }
     if(this.testF.res_8f_7){
       this.testF.sum_res_8f=this.testF.res_8f_7;
     }
     if(this.testF.res_8f_8){
      this.testF.sum_res_8f=this.testF.res_8f_8;
     }
     if(this.testF.res_8f_9){
      this.testF.sum_res_8f=this.testF.res_8f_9;
     }
     if(this.testF.res_8f_10){
      this.testF.sum_res_8f=this.testF.res_8f_10;
     }
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2);
       }
     }
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3);
         }
       }
     }
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3);
         }
       }
     }
  
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           if(this.testF.res_8f_4){
             this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4);
           }
         }
       }
     }
  
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           if(this.testF.res_8f_4){
             if(this.testF.res_8f_5){
               this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           if(this.testF.res_8f_4){
             if(this.testF.res_8f_5){
               if(this.testF.res_8f_6){
                 this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_8f_1){
       if(this.testF.res_8f_2){
         if(this.testF.res_8f_3){
           if(this.testF.res_8f_4){
             if(this.testF.res_8f_5){
               if(this.testF.res_8f_6){
                 if(this.testF.res_8f_7){
                   this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_8f_1){
      if(this.testF.res_8f_2){
        if(this.testF.res_8f_3){
          if(this.testF.res_8f_4){
            if(this.testF.res_8f_5){
              if(this.testF.res_8f_6){
                if(this.testF.res_8f_7){
                  if(this.testF.res_8f_8){
                    this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_8f_1){
      if(this.testF.res_8f_2){
        if(this.testF.res_8f_3){
          if(this.testF.res_8f_4){
            if(this.testF.res_8f_5){
              if(this.testF.res_8f_6){
                if(this.testF.res_8f_7){
                  if(this.testF.res_8f_8){
                    if(this.testF.res_8f_9){
                      this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_8f_1){
      if(this.testF.res_8f_2){
        if(this.testF.res_8f_3){
          if(this.testF.res_8f_4){
            if(this.testF.res_8f_5){
              if(this.testF.res_8f_6){
                if(this.testF.res_8f_7){
                  if(this.testF.res_8f_8){
                    if(this.testF.res_8f_9){
                      if(this.testF.res_8f_10){
                        this.testF.sum_res_8f=Number(this.testF.res_8f_1)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_8f_10){
  this.testF.sum_res_8f=Number(this.testF.res_8f_10);
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
    this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9);
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8);
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7);
      }
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          if(this.testF.res_8f_5){
            this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          if(this.testF.res_8f_5){
            if(this.testF.res_8f_4){
              this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          if(this.testF.res_8f_5){
            if(this.testF.res_8f_4){
              if(this.testF.res_8f_3){
                this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          if(this.testF.res_8f_5){
            if(this.testF.res_8f_4){
              if(this.testF.res_8f_3){
                if(this.testF.res_8f_2){
                  this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_8f_10){
  if(this.testF.res_8f_9){
     if(this.testF.res_8f_8){
      if(this.testF.res_8f_7){
        if(this.testF.res_8f_6){
          if(this.testF.res_8f_5){
            if(this.testF.res_8f_4){
              if(this.testF.res_8f_3){
                if(this.testF.res_8f_2){
                  if(this.testF.res_8f_1){
                    this.testF.sum_res_8f=Number(this.testF.res_8f_10)+Number(this.testF.res_8f_9)+Number(this.testF.res_8f_8)+Number(this.testF.res_8f_7)+Number(this.testF.res_8f_6)+Number(this.testF.res_8f_5)+Number(this.testF.res_8f_4)+Number(this.testF.res_8f_3)+Number(this.testF.res_8f_2)+Number(this.testF.res_8f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta9(){

    if(this.testF.res_9f_1){
       this.testF.sum_res_9f=this.testF.res_9f_1;
     }
  
     if(this.testF.res_9f_2){
       this.testF.sum_res_9f=this.testF.res_9f_2;
     }
     if(this.testF.res_9f_3){
       this.testF.sum_res_9f=this.testF.res_9f_3;
     }
     if(this.testF.res_9f_4){
       this.testF.sum_res_9f=this.testF.res_9f_4;
     }
     if(this.testF.res_9f_5){
       this.testF.sum_res_9f=this.testF.res_9f_5;
     }
     if(this.testF.res_9f_6){
       this.testF.sum_res_9f=this.testF.res_9f_6;
     }
     if(this.testF.res_9f_7){
       this.testF.sum_res_9f=this.testF.res_9f_7;
     }
     if(this.testF.res_9f_8){
      this.testF.sum_res_9f=this.testF.res_9f_8;
     }
     if(this.testF.res_9f_9){
      this.testF.sum_res_9f=this.testF.res_9f_9;
     }
     if(this.testF.res_9f_10){
      this.testF.sum_res_9f=this.testF.res_9f_10;
     }
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2);
       }
     }
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3);
         }
       }
     }
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3);
         }
       }
     }
  
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           if(this.testF.res_9f_4){
             this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4);
           }
         }
       }
     }
  
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           if(this.testF.res_9f_4){
             if(this.testF.res_9f_5){
               this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           if(this.testF.res_9f_4){
             if(this.testF.res_9f_5){
               if(this.testF.res_9f_6){
                 this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_9f_1){
       if(this.testF.res_9f_2){
         if(this.testF.res_9f_3){
           if(this.testF.res_9f_4){
             if(this.testF.res_9f_5){
               if(this.testF.res_9f_6){
                 if(this.testF.res_9f_7){
                   this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_9f_1){
      if(this.testF.res_9f_2){
        if(this.testF.res_9f_3){
          if(this.testF.res_9f_4){
            if(this.testF.res_9f_5){
              if(this.testF.res_9f_6){
                if(this.testF.res_9f_7){
                  if(this.testF.res_9f_8){
                    this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_9f_1){
      if(this.testF.res_9f_2){
        if(this.testF.res_9f_3){
          if(this.testF.res_9f_4){
            if(this.testF.res_9f_5){
              if(this.testF.res_9f_6){
                if(this.testF.res_9f_7){
                  if(this.testF.res_9f_8){
                    if(this.testF.res_9f_9){
                      this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_9f_1){
      if(this.testF.res_9f_2){
        if(this.testF.res_9f_3){
          if(this.testF.res_9f_4){
            if(this.testF.res_9f_5){
              if(this.testF.res_9f_6){
                if(this.testF.res_9f_7){
                  if(this.testF.res_9f_8){
                    if(this.testF.res_9f_9){
                      if(this.testF.res_9f_10){
                        this.testF.sum_res_9f=Number(this.testF.res_9f_1)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_9f_10){
  this.testF.sum_res_9f=Number(this.testF.res_9f_10);
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
    this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9);
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8);
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7);
      }
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          if(this.testF.res_9f_5){
            this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          if(this.testF.res_9f_5){
            if(this.testF.res_9f_4){
              this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          if(this.testF.res_9f_5){
            if(this.testF.res_9f_4){
              if(this.testF.res_9f_3){
                this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          if(this.testF.res_9f_5){
            if(this.testF.res_9f_4){
              if(this.testF.res_9f_3){
                if(this.testF.res_9f_2){
                  this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_9f_10){
  if(this.testF.res_9f_9){
     if(this.testF.res_9f_8){
      if(this.testF.res_9f_7){
        if(this.testF.res_9f_6){
          if(this.testF.res_9f_5){
            if(this.testF.res_9f_4){
              if(this.testF.res_9f_3){
                if(this.testF.res_9f_2){
                  if(this.testF.res_9f_1){
                    this.testF.sum_res_9f=Number(this.testF.res_9f_10)+Number(this.testF.res_9f_9)+Number(this.testF.res_9f_8)+Number(this.testF.res_9f_7)+Number(this.testF.res_9f_6)+Number(this.testF.res_9f_5)+Number(this.testF.res_9f_4)+Number(this.testF.res_9f_3)+Number(this.testF.res_9f_2)+Number(this.testF.res_9f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta10(){

    if(this.testF.res_10f_1){
       this.testF.sum_res_10f=this.testF.res_10f_1;
     }
  
     if(this.testF.res_10f_2){
       this.testF.sum_res_10f=this.testF.res_10f_2;
     }
     if(this.testF.res_10f_3){
       this.testF.sum_res_10f=this.testF.res_10f_3;
     }
     if(this.testF.res_10f_4){
       this.testF.sum_res_10f=this.testF.res_10f_4;
     }
     if(this.testF.res_10f_5){
       this.testF.sum_res_10f=this.testF.res_10f_5;
     }
     if(this.testF.res_10f_6){
       this.testF.sum_res_10f=this.testF.res_10f_6;
     }
     if(this.testF.res_10f_7){
       this.testF.sum_res_10f=this.testF.res_10f_7;
     }
     if(this.testF.res_10f_8){
      this.testF.sum_res_10f=this.testF.res_10f_8;
     }
     if(this.testF.res_10f_9){
      this.testF.sum_res_10f=this.testF.res_10f_9;
     }
     if(this.testF.res_10f_10){
      this.testF.sum_res_10f=this.testF.res_10f_10;
     }
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2);
       }
     }
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3);
         }
       }
     }
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3);
         }
       }
     }
  
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           if(this.testF.res_10f_4){
             this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4);
           }
         }
       }
     }
  
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           if(this.testF.res_10f_4){
             if(this.testF.res_10f_5){
               this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           if(this.testF.res_10f_4){
             if(this.testF.res_10f_5){
               if(this.testF.res_10f_6){
                 this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_10f_1){
       if(this.testF.res_10f_2){
         if(this.testF.res_10f_3){
           if(this.testF.res_10f_4){
             if(this.testF.res_10f_5){
               if(this.testF.res_10f_6){
                 if(this.testF.res_10f_7){
                   this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_10f_1){
      if(this.testF.res_10f_2){
        if(this.testF.res_10f_3){
          if(this.testF.res_10f_4){
            if(this.testF.res_10f_5){
              if(this.testF.res_10f_6){
                if(this.testF.res_10f_7){
                  if(this.testF.res_10f_8){
                    this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_10f_1){
      if(this.testF.res_10f_2){
        if(this.testF.res_10f_3){
          if(this.testF.res_10f_4){
            if(this.testF.res_10f_5){
              if(this.testF.res_10f_6){
                if(this.testF.res_10f_7){
                  if(this.testF.res_10f_8){
                    if(this.testF.res_10f_9){
                      this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_10f_1){
      if(this.testF.res_10f_2){
        if(this.testF.res_10f_3){
          if(this.testF.res_10f_4){
            if(this.testF.res_10f_5){
              if(this.testF.res_10f_6){
                if(this.testF.res_10f_7){
                  if(this.testF.res_10f_8){
                    if(this.testF.res_10f_9){
                      if(this.testF.res_10f_10){
                        this.testF.sum_res_10f=Number(this.testF.res_10f_1)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_10f_10){
  this.testF.sum_res_10f=Number(this.testF.res_10f_10);
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
    this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9);
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8);
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7);
      }
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          if(this.testF.res_10f_5){
            this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          if(this.testF.res_10f_5){
            if(this.testF.res_10f_4){
              this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          if(this.testF.res_10f_5){
            if(this.testF.res_10f_4){
              if(this.testF.res_10f_3){
                this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          if(this.testF.res_10f_5){
            if(this.testF.res_10f_4){
              if(this.testF.res_10f_3){
                if(this.testF.res_10f_2){
                  this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_10f_10){
  if(this.testF.res_10f_9){
     if(this.testF.res_10f_8){
      if(this.testF.res_10f_7){
        if(this.testF.res_10f_6){
          if(this.testF.res_10f_5){
            if(this.testF.res_10f_4){
              if(this.testF.res_10f_3){
                if(this.testF.res_10f_2){
                  if(this.testF.res_10f_1){
                    this.testF.sum_res_10f=Number(this.testF.res_10f_10)+Number(this.testF.res_10f_9)+Number(this.testF.res_10f_8)+Number(this.testF.res_10f_7)+Number(this.testF.res_10f_6)+Number(this.testF.res_10f_5)+Number(this.testF.res_10f_4)+Number(this.testF.res_10f_3)+Number(this.testF.res_10f_2)+Number(this.testF.res_10f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta11(){

    if(this.testF.res_11f_1){
       this.testF.sum_res_11f=this.testF.res_11f_1;
     }
  
     if(this.testF.res_11f_2){
       this.testF.sum_res_11f=this.testF.res_11f_2;
     }
     if(this.testF.res_11f_3){
       this.testF.sum_res_11f=this.testF.res_11f_3;
     }
     if(this.testF.res_11f_4){
       this.testF.sum_res_11f=this.testF.res_11f_4;
     }
     if(this.testF.res_11f_5){
       this.testF.sum_res_11f=this.testF.res_11f_5;
     }
     if(this.testF.res_11f_6){
       this.testF.sum_res_11f=this.testF.res_11f_6;
     }
     if(this.testF.res_11f_7){
       this.testF.sum_res_11f=this.testF.res_11f_7;
     }
     if(this.testF.res_11f_8){
      this.testF.sum_res_11f=this.testF.res_11f_8;
     }
     if(this.testF.res_11f_9){
      this.testF.sum_res_11f=this.testF.res_11f_9;
     }
     if(this.testF.res_11f_10){
      this.testF.sum_res_11f=this.testF.res_11f_10;
     }
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2);
       }
     }
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3);
         }
       }
     }
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3);
         }
       }
     }
  
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           if(this.testF.res_11f_4){
             this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4);
           }
         }
       }
     }
  
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           if(this.testF.res_11f_4){
             if(this.testF.res_11f_5){
               this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           if(this.testF.res_11f_4){
             if(this.testF.res_11f_5){
               if(this.testF.res_11f_6){
                 this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_11f_1){
       if(this.testF.res_11f_2){
         if(this.testF.res_11f_3){
           if(this.testF.res_11f_4){
             if(this.testF.res_11f_5){
               if(this.testF.res_11f_6){
                 if(this.testF.res_11f_7){
                   this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_11f_1){
      if(this.testF.res_11f_2){
        if(this.testF.res_11f_3){
          if(this.testF.res_11f_4){
            if(this.testF.res_11f_5){
              if(this.testF.res_11f_6){
                if(this.testF.res_11f_7){
                  if(this.testF.res_11f_8){
                    this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_11f_1){
      if(this.testF.res_11f_2){
        if(this.testF.res_11f_3){
          if(this.testF.res_11f_4){
            if(this.testF.res_11f_5){
              if(this.testF.res_11f_6){
                if(this.testF.res_11f_7){
                  if(this.testF.res_11f_8){
                    if(this.testF.res_11f_9){
                      this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_11f_1){
      if(this.testF.res_11f_2){
        if(this.testF.res_11f_3){
          if(this.testF.res_11f_4){
            if(this.testF.res_11f_5){
              if(this.testF.res_11f_6){
                if(this.testF.res_11f_7){
                  if(this.testF.res_11f_8){
                    if(this.testF.res_11f_9){
                      if(this.testF.res_11f_10){
                        this.testF.sum_res_11f=Number(this.testF.res_11f_1)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_11f_10){
  this.testF.sum_res_11f=Number(this.testF.res_11f_10);
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
    this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9);
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8);
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7);
      }
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          if(this.testF.res_11f_5){
            this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          if(this.testF.res_11f_5){
            if(this.testF.res_11f_4){
              this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          if(this.testF.res_11f_5){
            if(this.testF.res_11f_4){
              if(this.testF.res_11f_3){
                this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          if(this.testF.res_11f_5){
            if(this.testF.res_11f_4){
              if(this.testF.res_11f_3){
                if(this.testF.res_11f_2){
                  this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_11f_10){
  if(this.testF.res_11f_9){
     if(this.testF.res_11f_8){
      if(this.testF.res_11f_7){
        if(this.testF.res_11f_6){
          if(this.testF.res_11f_5){
            if(this.testF.res_11f_4){
              if(this.testF.res_11f_3){
                if(this.testF.res_11f_2){
                  if(this.testF.res_11f_1){
                    this.testF.sum_res_11f=Number(this.testF.res_11f_10)+Number(this.testF.res_11f_9)+Number(this.testF.res_11f_8)+Number(this.testF.res_11f_7)+Number(this.testF.res_11f_6)+Number(this.testF.res_11f_5)+Number(this.testF.res_11f_4)+Number(this.testF.res_11f_3)+Number(this.testF.res_11f_2)+Number(this.testF.res_11f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta12(){

    if(this.testF.res_12f_1){
       this.testF.sum_res_12f=this.testF.res_12f_1;
     }
  
     if(this.testF.res_12f_2){
       this.testF.sum_res_12f=this.testF.res_12f_2;
     }
     if(this.testF.res_12f_3){
       this.testF.sum_res_12f=this.testF.res_12f_3;
     }
     if(this.testF.res_12f_4){
       this.testF.sum_res_12f=this.testF.res_12f_4;
     }
     if(this.testF.res_12f_5){
       this.testF.sum_res_12f=this.testF.res_12f_5;
     }
     if(this.testF.res_12f_6){
       this.testF.sum_res_12f=this.testF.res_12f_6;
     }
     if(this.testF.res_12f_7){
       this.testF.sum_res_12f=this.testF.res_12f_7;
     }
     if(this.testF.res_12f_8){
      this.testF.sum_res_12f=this.testF.res_12f_8;
     }
     if(this.testF.res_12f_9){
      this.testF.sum_res_12f=this.testF.res_12f_9;
     }
     if(this.testF.res_12f_10){
      this.testF.sum_res_12f=this.testF.res_12f_10;
     }
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2);
       }
     }
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3);
         }
       }
     }
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3);
         }
       }
     }
  
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           if(this.testF.res_12f_4){
             this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4);
           }
         }
       }
     }
  
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           if(this.testF.res_12f_4){
             if(this.testF.res_12f_5){
               this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           if(this.testF.res_12f_4){
             if(this.testF.res_12f_5){
               if(this.testF.res_12f_6){
                 this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_12f_1){
       if(this.testF.res_12f_2){
         if(this.testF.res_12f_3){
           if(this.testF.res_12f_4){
             if(this.testF.res_12f_5){
               if(this.testF.res_12f_6){
                 if(this.testF.res_12f_7){
                   this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_12f_1){
      if(this.testF.res_12f_2){
        if(this.testF.res_12f_3){
          if(this.testF.res_12f_4){
            if(this.testF.res_12f_5){
              if(this.testF.res_12f_6){
                if(this.testF.res_12f_7){
                  if(this.testF.res_12f_8){
                    this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_12f_1){
      if(this.testF.res_12f_2){
        if(this.testF.res_12f_3){
          if(this.testF.res_12f_4){
            if(this.testF.res_12f_5){
              if(this.testF.res_12f_6){
                if(this.testF.res_12f_7){
                  if(this.testF.res_12f_8){
                    if(this.testF.res_12f_9){
                      this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_12f_1){
      if(this.testF.res_12f_2){
        if(this.testF.res_12f_3){
          if(this.testF.res_12f_4){
            if(this.testF.res_12f_5){
              if(this.testF.res_12f_6){
                if(this.testF.res_12f_7){
                  if(this.testF.res_12f_8){
                    if(this.testF.res_12f_9){
                      if(this.testF.res_12f_10){
                        this.testF.sum_res_12f=Number(this.testF.res_12f_1)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_12f_10){
  this.testF.sum_res_12f=Number(this.testF.res_12f_10);
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
    this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9);
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8);
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7);
      }
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          if(this.testF.res_12f_5){
            this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          if(this.testF.res_12f_5){
            if(this.testF.res_12f_4){
              this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          if(this.testF.res_12f_5){
            if(this.testF.res_12f_4){
              if(this.testF.res_12f_3){
                this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          if(this.testF.res_12f_5){
            if(this.testF.res_12f_4){
              if(this.testF.res_12f_3){
                if(this.testF.res_12f_2){
                  this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_12f_10){
  if(this.testF.res_12f_9){
     if(this.testF.res_12f_8){
      if(this.testF.res_12f_7){
        if(this.testF.res_12f_6){
          if(this.testF.res_12f_5){
            if(this.testF.res_12f_4){
              if(this.testF.res_12f_3){
                if(this.testF.res_12f_2){
                  if(this.testF.res_12f_1){
                    this.testF.sum_res_12f=Number(this.testF.res_12f_10)+Number(this.testF.res_12f_9)+Number(this.testF.res_12f_8)+Number(this.testF.res_12f_7)+Number(this.testF.res_12f_6)+Number(this.testF.res_12f_5)+Number(this.testF.res_12f_4)+Number(this.testF.res_12f_3)+Number(this.testF.res_12f_2)+Number(this.testF.res_12f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta13(){

    if(this.testF.res_13f_1){
       this.testF.sum_res_13f=this.testF.res_13f_1;
     }
  
     if(this.testF.res_13f_2){
       this.testF.sum_res_13f=this.testF.res_13f_2;
     }
     if(this.testF.res_13f_3){
       this.testF.sum_res_13f=this.testF.res_13f_3;
     }
     if(this.testF.res_13f_4){
       this.testF.sum_res_13f=this.testF.res_13f_4;
     }
     if(this.testF.res_13f_5){
       this.testF.sum_res_13f=this.testF.res_13f_5;
     }
     if(this.testF.res_13f_6){
       this.testF.sum_res_13f=this.testF.res_13f_6;
     }
     if(this.testF.res_13f_7){
       this.testF.sum_res_13f=this.testF.res_13f_7;
     }
     if(this.testF.res_13f_8){
      this.testF.sum_res_13f=this.testF.res_13f_8;
     }
     if(this.testF.res_13f_9){
      this.testF.sum_res_13f=this.testF.res_13f_9;
     }
     if(this.testF.res_13f_10){
      this.testF.sum_res_13f=this.testF.res_13f_10;
     }
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2);
       }
     }
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3);
         }
       }
     }
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3);
         }
       }
     }
  
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           if(this.testF.res_13f_4){
             this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4);
           }
         }
       }
     }
  
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           if(this.testF.res_13f_4){
             if(this.testF.res_13f_5){
               this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           if(this.testF.res_13f_4){
             if(this.testF.res_13f_5){
               if(this.testF.res_13f_6){
                 this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_13f_1){
       if(this.testF.res_13f_2){
         if(this.testF.res_13f_3){
           if(this.testF.res_13f_4){
             if(this.testF.res_13f_5){
               if(this.testF.res_13f_6){
                 if(this.testF.res_13f_7){
                   this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_13f_1){
      if(this.testF.res_13f_2){
        if(this.testF.res_13f_3){
          if(this.testF.res_13f_4){
            if(this.testF.res_13f_5){
              if(this.testF.res_13f_6){
                if(this.testF.res_13f_7){
                  if(this.testF.res_13f_8){
                    this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_13f_1){
      if(this.testF.res_13f_2){
        if(this.testF.res_13f_3){
          if(this.testF.res_13f_4){
            if(this.testF.res_13f_5){
              if(this.testF.res_13f_6){
                if(this.testF.res_13f_7){
                  if(this.testF.res_13f_8){
                    if(this.testF.res_13f_9){
                      this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_13f_1){
      if(this.testF.res_13f_2){
        if(this.testF.res_13f_3){
          if(this.testF.res_13f_4){
            if(this.testF.res_13f_5){
              if(this.testF.res_13f_6){
                if(this.testF.res_13f_7){
                  if(this.testF.res_13f_8){
                    if(this.testF.res_13f_9){
                      if(this.testF.res_13f_10){
                        this.testF.sum_res_13f=Number(this.testF.res_13f_1)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_13f_10){
  this.testF.sum_res_13f=Number(this.testF.res_13f_10);
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
    this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9);
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8);
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7);
      }
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          if(this.testF.res_13f_5){
            this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          if(this.testF.res_13f_5){
            if(this.testF.res_13f_4){
              this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          if(this.testF.res_13f_5){
            if(this.testF.res_13f_4){
              if(this.testF.res_13f_3){
                this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          if(this.testF.res_13f_5){
            if(this.testF.res_13f_4){
              if(this.testF.res_13f_3){
                if(this.testF.res_13f_2){
                  this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_13f_10){
  if(this.testF.res_13f_9){
     if(this.testF.res_13f_8){
      if(this.testF.res_13f_7){
        if(this.testF.res_13f_6){
          if(this.testF.res_13f_5){
            if(this.testF.res_13f_4){
              if(this.testF.res_13f_3){
                if(this.testF.res_13f_2){
                  if(this.testF.res_13f_1){
                    this.testF.sum_res_13f=Number(this.testF.res_13f_10)+Number(this.testF.res_13f_9)+Number(this.testF.res_13f_8)+Number(this.testF.res_13f_7)+Number(this.testF.res_13f_6)+Number(this.testF.res_13f_5)+Number(this.testF.res_13f_4)+Number(this.testF.res_13f_3)+Number(this.testF.res_13f_2)+Number(this.testF.res_13f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta14(){

    if(this.testF.res_14f_1){
       this.testF.sum_res_14f=this.testF.res_14f_1;
     }
  
     if(this.testF.res_14f_2){
       this.testF.sum_res_14f=this.testF.res_14f_2;
     }
     if(this.testF.res_14f_3){
       this.testF.sum_res_14f=this.testF.res_14f_3;
     }
     if(this.testF.res_14f_4){
       this.testF.sum_res_14f=this.testF.res_14f_4;
     }
     if(this.testF.res_14f_5){
       this.testF.sum_res_14f=this.testF.res_14f_5;
     }
     if(this.testF.res_14f_6){
       this.testF.sum_res_14f=this.testF.res_14f_6;
     }
     if(this.testF.res_14f_7){
       this.testF.sum_res_14f=this.testF.res_14f_7;
     }
     if(this.testF.res_14f_8){
      this.testF.sum_res_14f=this.testF.res_14f_8;
     }
     if(this.testF.res_14f_9){
      this.testF.sum_res_14f=this.testF.res_14f_9;
     }
     if(this.testF.res_14f_10){
      this.testF.sum_res_14f=this.testF.res_14f_10;
     }
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2);
       }
     }
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3);
         }
       }
     }
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3);
         }
       }
     }
  
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           if(this.testF.res_14f_4){
             this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4);
           }
         }
       }
     }
  
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           if(this.testF.res_14f_4){
             if(this.testF.res_14f_5){
               this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           if(this.testF.res_14f_4){
             if(this.testF.res_14f_5){
               if(this.testF.res_14f_6){
                 this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_14f_1){
       if(this.testF.res_14f_2){
         if(this.testF.res_14f_3){
           if(this.testF.res_14f_4){
             if(this.testF.res_14f_5){
               if(this.testF.res_14f_6){
                 if(this.testF.res_14f_7){
                   this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_14f_1){
      if(this.testF.res_14f_2){
        if(this.testF.res_14f_3){
          if(this.testF.res_14f_4){
            if(this.testF.res_14f_5){
              if(this.testF.res_14f_6){
                if(this.testF.res_14f_7){
                  if(this.testF.res_14f_8){
                    this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_14f_1){
      if(this.testF.res_14f_2){
        if(this.testF.res_14f_3){
          if(this.testF.res_14f_4){
            if(this.testF.res_14f_5){
              if(this.testF.res_14f_6){
                if(this.testF.res_14f_7){
                  if(this.testF.res_14f_8){
                    if(this.testF.res_14f_9){
                      this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_14f_1){
      if(this.testF.res_14f_2){
        if(this.testF.res_14f_3){
          if(this.testF.res_14f_4){
            if(this.testF.res_14f_5){
              if(this.testF.res_14f_6){
                if(this.testF.res_14f_7){
                  if(this.testF.res_14f_8){
                    if(this.testF.res_14f_9){
                      if(this.testF.res_14f_10){
                        this.testF.sum_res_14f=Number(this.testF.res_14f_1)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_14f_10){
  this.testF.sum_res_14f=Number(this.testF.res_14f_10);
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
    this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9);
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8);
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7);
      }
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          if(this.testF.res_14f_5){
            this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          if(this.testF.res_14f_5){
            if(this.testF.res_14f_4){
              this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          if(this.testF.res_14f_5){
            if(this.testF.res_14f_4){
              if(this.testF.res_14f_3){
                this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          if(this.testF.res_14f_5){
            if(this.testF.res_14f_4){
              if(this.testF.res_14f_3){
                if(this.testF.res_14f_2){
                  this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_14f_10){
  if(this.testF.res_14f_9){
     if(this.testF.res_14f_8){
      if(this.testF.res_14f_7){
        if(this.testF.res_14f_6){
          if(this.testF.res_14f_5){
            if(this.testF.res_14f_4){
              if(this.testF.res_14f_3){
                if(this.testF.res_14f_2){
                  if(this.testF.res_14f_1){
                    this.testF.sum_res_14f=Number(this.testF.res_14f_10)+Number(this.testF.res_14f_9)+Number(this.testF.res_14f_8)+Number(this.testF.res_14f_7)+Number(this.testF.res_14f_6)+Number(this.testF.res_14f_5)+Number(this.testF.res_14f_4)+Number(this.testF.res_14f_3)+Number(this.testF.res_14f_2)+Number(this.testF.res_14f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta15(){

    if(this.testF.res_15f_1){
       this.testF.sum_res_15f=this.testF.res_15f_1;
     }
  
     if(this.testF.res_15f_2){
       this.testF.sum_res_15f=this.testF.res_15f_2;
     }
     if(this.testF.res_15f_3){
       this.testF.sum_res_15f=this.testF.res_15f_3;
     }
     if(this.testF.res_15f_4){
       this.testF.sum_res_15f=this.testF.res_15f_4;
     }
     if(this.testF.res_15f_5){
       this.testF.sum_res_15f=this.testF.res_15f_5;
     }
     if(this.testF.res_15f_6){
       this.testF.sum_res_15f=this.testF.res_15f_6;
     }
     if(this.testF.res_15f_7){
       this.testF.sum_res_15f=this.testF.res_15f_7;
     }
     if(this.testF.res_15f_8){
      this.testF.sum_res_15f=this.testF.res_15f_8;
     }
     if(this.testF.res_15f_9){
      this.testF.sum_res_15f=this.testF.res_15f_9;
     }
     if(this.testF.res_15f_10){
      this.testF.sum_res_15f=this.testF.res_15f_10;
     }
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2);
       }
     }
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3);
         }
       }
     }
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3);
         }
       }
     }
  
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           if(this.testF.res_15f_4){
             this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4);
           }
         }
       }
     }
  
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           if(this.testF.res_15f_4){
             if(this.testF.res_15f_5){
               this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           if(this.testF.res_15f_4){
             if(this.testF.res_15f_5){
               if(this.testF.res_15f_6){
                 this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_15f_1){
       if(this.testF.res_15f_2){
         if(this.testF.res_15f_3){
           if(this.testF.res_15f_4){
             if(this.testF.res_15f_5){
               if(this.testF.res_15f_6){
                 if(this.testF.res_15f_7){
                   this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_15f_1){
      if(this.testF.res_15f_2){
        if(this.testF.res_15f_3){
          if(this.testF.res_15f_4){
            if(this.testF.res_15f_5){
              if(this.testF.res_15f_6){
                if(this.testF.res_15f_7){
                  if(this.testF.res_15f_8){
                    this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_15f_1){
      if(this.testF.res_15f_2){
        if(this.testF.res_15f_3){
          if(this.testF.res_15f_4){
            if(this.testF.res_15f_5){
              if(this.testF.res_15f_6){
                if(this.testF.res_15f_7){
                  if(this.testF.res_15f_8){
                    if(this.testF.res_15f_9){
                      this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_15f_1){
      if(this.testF.res_15f_2){
        if(this.testF.res_15f_3){
          if(this.testF.res_15f_4){
            if(this.testF.res_15f_5){
              if(this.testF.res_15f_6){
                if(this.testF.res_15f_7){
                  if(this.testF.res_15f_8){
                    if(this.testF.res_15f_9){
                      if(this.testF.res_15f_10){
                        this.testF.sum_res_15f=Number(this.testF.res_15f_1)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_15f_10){
  this.testF.sum_res_15f=Number(this.testF.res_15f_10);
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
    this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9);
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8);
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7);
      }
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          if(this.testF.res_15f_5){
            this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          if(this.testF.res_15f_5){
            if(this.testF.res_15f_4){
              this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          if(this.testF.res_15f_5){
            if(this.testF.res_15f_4){
              if(this.testF.res_15f_3){
                this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          if(this.testF.res_15f_5){
            if(this.testF.res_15f_4){
              if(this.testF.res_15f_3){
                if(this.testF.res_15f_2){
                  this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_15f_10){
  if(this.testF.res_15f_9){
     if(this.testF.res_15f_8){
      if(this.testF.res_15f_7){
        if(this.testF.res_15f_6){
          if(this.testF.res_15f_5){
            if(this.testF.res_15f_4){
              if(this.testF.res_15f_3){
                if(this.testF.res_15f_2){
                  if(this.testF.res_15f_1){
                    this.testF.sum_res_15f=Number(this.testF.res_15f_10)+Number(this.testF.res_15f_9)+Number(this.testF.res_15f_8)+Number(this.testF.res_15f_7)+Number(this.testF.res_15f_6)+Number(this.testF.res_15f_5)+Number(this.testF.res_15f_4)+Number(this.testF.res_15f_3)+Number(this.testF.res_15f_2)+Number(this.testF.res_15f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta16(){

    if(this.testF.res_16f_1){
       this.testF.sum_res_16f=this.testF.res_16f_1;
     }
  
     if(this.testF.res_16f_2){
       this.testF.sum_res_16f=this.testF.res_16f_2;
     }
     if(this.testF.res_16f_3){
       this.testF.sum_res_16f=this.testF.res_16f_3;
     }
     if(this.testF.res_16f_4){
       this.testF.sum_res_16f=this.testF.res_16f_4;
     }
     if(this.testF.res_16f_5){
       this.testF.sum_res_16f=this.testF.res_16f_5;
     }
     if(this.testF.res_16f_6){
       this.testF.sum_res_16f=this.testF.res_16f_6;
     }
     if(this.testF.res_16f_7){
       this.testF.sum_res_16f=this.testF.res_16f_7;
     }
     if(this.testF.res_16f_8){
      this.testF.sum_res_16f=this.testF.res_16f_8;
     }
     if(this.testF.res_16f_9){
      this.testF.sum_res_16f=this.testF.res_16f_9;
     }
     if(this.testF.res_16f_10){
      this.testF.sum_res_16f=this.testF.res_16f_10;
     }
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2);
       }
     }
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3);
         }
       }
     }
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3);
         }
       }
     }
  
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           if(this.testF.res_16f_4){
             this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4);
           }
         }
       }
     }
  
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           if(this.testF.res_16f_4){
             if(this.testF.res_16f_5){
               this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           if(this.testF.res_16f_4){
             if(this.testF.res_16f_5){
               if(this.testF.res_16f_6){
                 this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_16f_1){
       if(this.testF.res_16f_2){
         if(this.testF.res_16f_3){
           if(this.testF.res_16f_4){
             if(this.testF.res_16f_5){
               if(this.testF.res_16f_6){
                 if(this.testF.res_16f_7){
                   this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_16f_1){
      if(this.testF.res_16f_2){
        if(this.testF.res_16f_3){
          if(this.testF.res_16f_4){
            if(this.testF.res_16f_5){
              if(this.testF.res_16f_6){
                if(this.testF.res_16f_7){
                  if(this.testF.res_16f_8){
                    this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_16f_1){
      if(this.testF.res_16f_2){
        if(this.testF.res_16f_3){
          if(this.testF.res_16f_4){
            if(this.testF.res_16f_5){
              if(this.testF.res_16f_6){
                if(this.testF.res_16f_7){
                  if(this.testF.res_16f_8){
                    if(this.testF.res_16f_9){
                      this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_16f_1){
      if(this.testF.res_16f_2){
        if(this.testF.res_16f_3){
          if(this.testF.res_16f_4){
            if(this.testF.res_16f_5){
              if(this.testF.res_16f_6){
                if(this.testF.res_16f_7){
                  if(this.testF.res_16f_8){
                    if(this.testF.res_16f_9){
                      if(this.testF.res_16f_10){
                        this.testF.sum_res_16f=Number(this.testF.res_16f_1)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_16f_10){
  this.testF.sum_res_16f=Number(this.testF.res_16f_10);
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
    this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9);
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8);
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7);
      }
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          if(this.testF.res_16f_5){
            this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          if(this.testF.res_16f_5){
            if(this.testF.res_16f_4){
              this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          if(this.testF.res_16f_5){
            if(this.testF.res_16f_4){
              if(this.testF.res_16f_3){
                this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          if(this.testF.res_16f_5){
            if(this.testF.res_16f_4){
              if(this.testF.res_16f_3){
                if(this.testF.res_16f_2){
                  this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_16f_10){
  if(this.testF.res_16f_9){
     if(this.testF.res_16f_8){
      if(this.testF.res_16f_7){
        if(this.testF.res_16f_6){
          if(this.testF.res_16f_5){
            if(this.testF.res_16f_4){
              if(this.testF.res_16f_3){
                if(this.testF.res_16f_2){
                  if(this.testF.res_16f_1){
                    this.testF.sum_res_16f=Number(this.testF.res_16f_10)+Number(this.testF.res_16f_9)+Number(this.testF.res_16f_8)+Number(this.testF.res_16f_7)+Number(this.testF.res_16f_6)+Number(this.testF.res_16f_5)+Number(this.testF.res_16f_4)+Number(this.testF.res_16f_3)+Number(this.testF.res_16f_2)+Number(this.testF.res_16f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta17(){

    if(this.testF.res_17f_1){
       this.testF.sum_res_17f=this.testF.res_17f_1;
     }
  
     if(this.testF.res_17f_2){
       this.testF.sum_res_17f=this.testF.res_17f_2;
     }
     if(this.testF.res_17f_3){
       this.testF.sum_res_17f=this.testF.res_17f_3;
     }
     if(this.testF.res_17f_4){
       this.testF.sum_res_17f=this.testF.res_17f_4;
     }
     if(this.testF.res_17f_5){
       this.testF.sum_res_17f=this.testF.res_17f_5;
     }
     if(this.testF.res_17f_6){
       this.testF.sum_res_17f=this.testF.res_17f_6;
     }
     if(this.testF.res_17f_7){
       this.testF.sum_res_17f=this.testF.res_17f_7;
     }
     if(this.testF.res_17f_8){
      this.testF.sum_res_17f=this.testF.res_17f_8;
     }
     if(this.testF.res_17f_9){
      this.testF.sum_res_17f=this.testF.res_17f_9;
     }
     if(this.testF.res_17f_10){
      this.testF.sum_res_17f=this.testF.res_17f_10;
     }
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2);
       }
     }
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3);
         }
       }
     }
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3);
         }
       }
     }
  
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           if(this.testF.res_17f_4){
             this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4);
           }
         }
       }
     }
  
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           if(this.testF.res_17f_4){
             if(this.testF.res_17f_5){
               this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           if(this.testF.res_17f_4){
             if(this.testF.res_17f_5){
               if(this.testF.res_17f_6){
                 this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_17f_1){
       if(this.testF.res_17f_2){
         if(this.testF.res_17f_3){
           if(this.testF.res_17f_4){
             if(this.testF.res_17f_5){
               if(this.testF.res_17f_6){
                 if(this.testF.res_17f_7){
                   this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_17f_1){
      if(this.testF.res_17f_2){
        if(this.testF.res_17f_3){
          if(this.testF.res_17f_4){
            if(this.testF.res_17f_5){
              if(this.testF.res_17f_6){
                if(this.testF.res_17f_7){
                  if(this.testF.res_17f_8){
                    this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_17f_1){
      if(this.testF.res_17f_2){
        if(this.testF.res_17f_3){
          if(this.testF.res_17f_4){
            if(this.testF.res_17f_5){
              if(this.testF.res_17f_6){
                if(this.testF.res_17f_7){
                  if(this.testF.res_17f_8){
                    if(this.testF.res_17f_9){
                      this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_17f_1){
      if(this.testF.res_17f_2){
        if(this.testF.res_17f_3){
          if(this.testF.res_17f_4){
            if(this.testF.res_17f_5){
              if(this.testF.res_17f_6){
                if(this.testF.res_17f_7){
                  if(this.testF.res_17f_8){
                    if(this.testF.res_17f_9){
                      if(this.testF.res_17f_10){
                        this.testF.sum_res_17f=Number(this.testF.res_17f_1)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_17f_10){
  this.testF.sum_res_17f=Number(this.testF.res_17f_10);
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
    this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9);
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8);
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7);
      }
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          if(this.testF.res_17f_5){
            this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          if(this.testF.res_17f_5){
            if(this.testF.res_17f_4){
              this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          if(this.testF.res_17f_5){
            if(this.testF.res_17f_4){
              if(this.testF.res_17f_3){
                this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          if(this.testF.res_17f_5){
            if(this.testF.res_17f_4){
              if(this.testF.res_17f_3){
                if(this.testF.res_17f_2){
                  this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_17f_10){
  if(this.testF.res_17f_9){
     if(this.testF.res_17f_8){
      if(this.testF.res_17f_7){
        if(this.testF.res_17f_6){
          if(this.testF.res_17f_5){
            if(this.testF.res_17f_4){
              if(this.testF.res_17f_3){
                if(this.testF.res_17f_2){
                  if(this.testF.res_17f_1){
                    this.testF.sum_res_17f=Number(this.testF.res_17f_10)+Number(this.testF.res_17f_9)+Number(this.testF.res_17f_8)+Number(this.testF.res_17f_7)+Number(this.testF.res_17f_6)+Number(this.testF.res_17f_5)+Number(this.testF.res_17f_4)+Number(this.testF.res_17f_3)+Number(this.testF.res_17f_2)+Number(this.testF.res_17f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta18(){

    if(this.testF.res_18f_1){
       this.testF.sum_res_18f=this.testF.res_18f_1;
     }
  
     if(this.testF.res_18f_2){
       this.testF.sum_res_18f=this.testF.res_18f_2;
     }
     if(this.testF.res_18f_3){
       this.testF.sum_res_18f=this.testF.res_18f_3;
     }
     if(this.testF.res_18f_4){
       this.testF.sum_res_18f=this.testF.res_18f_4;
     }
     if(this.testF.res_18f_5){
       this.testF.sum_res_18f=this.testF.res_18f_5;
     }
     if(this.testF.res_18f_6){
       this.testF.sum_res_18f=this.testF.res_18f_6;
     }
     if(this.testF.res_18f_7){
       this.testF.sum_res_18f=this.testF.res_18f_7;
     }
     if(this.testF.res_18f_8){
      this.testF.sum_res_18f=this.testF.res_18f_8;
     }
     if(this.testF.res_18f_9){
      this.testF.sum_res_18f=this.testF.res_18f_9;
     }
     if(this.testF.res_18f_10){
      this.testF.sum_res_18f=this.testF.res_18f_10;
     }
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2);
       }
     }
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3);
         }
       }
     }
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3);
         }
       }
     }
  
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           if(this.testF.res_18f_4){
             this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4);
           }
         }
       }
     }
  
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           if(this.testF.res_18f_4){
             if(this.testF.res_18f_5){
               this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           if(this.testF.res_18f_4){
             if(this.testF.res_18f_5){
               if(this.testF.res_18f_6){
                 this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_18f_1){
       if(this.testF.res_18f_2){
         if(this.testF.res_18f_3){
           if(this.testF.res_18f_4){
             if(this.testF.res_18f_5){
               if(this.testF.res_18f_6){
                 if(this.testF.res_18f_7){
                   this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_18f_1){
      if(this.testF.res_18f_2){
        if(this.testF.res_18f_3){
          if(this.testF.res_18f_4){
            if(this.testF.res_18f_5){
              if(this.testF.res_18f_6){
                if(this.testF.res_18f_7){
                  if(this.testF.res_18f_8){
                    this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_18f_1){
      if(this.testF.res_18f_2){
        if(this.testF.res_18f_3){
          if(this.testF.res_18f_4){
            if(this.testF.res_18f_5){
              if(this.testF.res_18f_6){
                if(this.testF.res_18f_7){
                  if(this.testF.res_18f_8){
                    if(this.testF.res_18f_9){
                      this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_18f_1){
      if(this.testF.res_18f_2){
        if(this.testF.res_18f_3){
          if(this.testF.res_18f_4){
            if(this.testF.res_18f_5){
              if(this.testF.res_18f_6){
                if(this.testF.res_18f_7){
                  if(this.testF.res_18f_8){
                    if(this.testF.res_18f_9){
                      if(this.testF.res_18f_10){
                        this.testF.sum_res_18f=Number(this.testF.res_18f_1)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_18f_10){
  this.testF.sum_res_18f=Number(this.testF.res_18f_10);
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
    this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9);
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8);
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7);
      }
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          if(this.testF.res_18f_5){
            this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          if(this.testF.res_18f_5){
            if(this.testF.res_18f_4){
              this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          if(this.testF.res_18f_5){
            if(this.testF.res_18f_4){
              if(this.testF.res_18f_3){
                this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          if(this.testF.res_18f_5){
            if(this.testF.res_18f_4){
              if(this.testF.res_18f_3){
                if(this.testF.res_18f_2){
                  this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_18f_10){
  if(this.testF.res_18f_9){
     if(this.testF.res_18f_8){
      if(this.testF.res_18f_7){
        if(this.testF.res_18f_6){
          if(this.testF.res_18f_5){
            if(this.testF.res_18f_4){
              if(this.testF.res_18f_3){
                if(this.testF.res_18f_2){
                  if(this.testF.res_18f_1){
                    this.testF.sum_res_18f=Number(this.testF.res_18f_10)+Number(this.testF.res_18f_9)+Number(this.testF.res_18f_8)+Number(this.testF.res_18f_7)+Number(this.testF.res_18f_6)+Number(this.testF.res_18f_5)+Number(this.testF.res_18f_4)+Number(this.testF.res_18f_3)+Number(this.testF.res_18f_2)+Number(this.testF.res_18f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta19(){

    if(this.testF.res_19f_1){
       this.testF.sum_res_19f=this.testF.res_19f_1;
     }
  
     if(this.testF.res_19f_2){
       this.testF.sum_res_19f=this.testF.res_19f_2;
     }
     if(this.testF.res_19f_3){
       this.testF.sum_res_19f=this.testF.res_19f_3;
     }
     if(this.testF.res_19f_4){
       this.testF.sum_res_19f=this.testF.res_19f_4;
     }
     if(this.testF.res_19f_5){
       this.testF.sum_res_19f=this.testF.res_19f_5;
     }
     if(this.testF.res_19f_6){
       this.testF.sum_res_19f=this.testF.res_19f_6;
     }
     if(this.testF.res_19f_7){
       this.testF.sum_res_19f=this.testF.res_19f_7;
     }
     if(this.testF.res_19f_8){
      this.testF.sum_res_19f=this.testF.res_19f_8;
     }
     if(this.testF.res_19f_9){
      this.testF.sum_res_19f=this.testF.res_19f_9;
     }
     if(this.testF.res_19f_10){
      this.testF.sum_res_19f=this.testF.res_19f_10;
     }
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2);
       }
     }
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3);
         }
       }
     }
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3);
         }
       }
     }
  
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           if(this.testF.res_19f_4){
             this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4);
           }
         }
       }
     }
  
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           if(this.testF.res_19f_4){
             if(this.testF.res_19f_5){
               this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           if(this.testF.res_19f_4){
             if(this.testF.res_19f_5){
               if(this.testF.res_19f_6){
                 this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_19f_1){
       if(this.testF.res_19f_2){
         if(this.testF.res_19f_3){
           if(this.testF.res_19f_4){
             if(this.testF.res_19f_5){
               if(this.testF.res_19f_6){
                 if(this.testF.res_19f_7){
                   this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_19f_1){
      if(this.testF.res_19f_2){
        if(this.testF.res_19f_3){
          if(this.testF.res_19f_4){
            if(this.testF.res_19f_5){
              if(this.testF.res_19f_6){
                if(this.testF.res_19f_7){
                  if(this.testF.res_19f_8){
                    this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_19f_1){
      if(this.testF.res_19f_2){
        if(this.testF.res_19f_3){
          if(this.testF.res_19f_4){
            if(this.testF.res_19f_5){
              if(this.testF.res_19f_6){
                if(this.testF.res_19f_7){
                  if(this.testF.res_19f_8){
                    if(this.testF.res_19f_9){
                      this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_19f_1){
      if(this.testF.res_19f_2){
        if(this.testF.res_19f_3){
          if(this.testF.res_19f_4){
            if(this.testF.res_19f_5){
              if(this.testF.res_19f_6){
                if(this.testF.res_19f_7){
                  if(this.testF.res_19f_8){
                    if(this.testF.res_19f_9){
                      if(this.testF.res_19f_10){
                        this.testF.sum_res_19f=Number(this.testF.res_19f_1)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_19f_10){
  this.testF.sum_res_19f=Number(this.testF.res_19f_10);
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
    this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9);
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8);
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7);
      }
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          if(this.testF.res_19f_5){
            this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          if(this.testF.res_19f_5){
            if(this.testF.res_19f_4){
              this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          if(this.testF.res_19f_5){
            if(this.testF.res_19f_4){
              if(this.testF.res_19f_3){
                this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          if(this.testF.res_19f_5){
            if(this.testF.res_19f_4){
              if(this.testF.res_19f_3){
                if(this.testF.res_19f_2){
                  this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_19f_10){
  if(this.testF.res_19f_9){
     if(this.testF.res_19f_8){
      if(this.testF.res_19f_7){
        if(this.testF.res_19f_6){
          if(this.testF.res_19f_5){
            if(this.testF.res_19f_4){
              if(this.testF.res_19f_3){
                if(this.testF.res_19f_2){
                  if(this.testF.res_19f_1){
                    this.testF.sum_res_19f=Number(this.testF.res_19f_10)+Number(this.testF.res_19f_9)+Number(this.testF.res_19f_8)+Number(this.testF.res_19f_7)+Number(this.testF.res_19f_6)+Number(this.testF.res_19f_5)+Number(this.testF.res_19f_4)+Number(this.testF.res_19f_3)+Number(this.testF.res_19f_2)+Number(this.testF.res_19f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta20(){

    if(this.testF.res_20f_1){
       this.testF.sum_res_20f=this.testF.res_20f_1;
     }
  
     if(this.testF.res_20f_2){
       this.testF.sum_res_20f=this.testF.res_20f_2;
     }
     if(this.testF.res_20f_3){
       this.testF.sum_res_20f=this.testF.res_20f_3;
     }
     if(this.testF.res_20f_4){
       this.testF.sum_res_20f=this.testF.res_20f_4;
     }
     if(this.testF.res_20f_5){
       this.testF.sum_res_20f=this.testF.res_20f_5;
     }
     if(this.testF.res_20f_6){
       this.testF.sum_res_20f=this.testF.res_20f_6;
     }
     if(this.testF.res_20f_7){
       this.testF.sum_res_20f=this.testF.res_20f_7;
     }
     if(this.testF.res_20f_8){
      this.testF.sum_res_20f=this.testF.res_20f_8;
     }
     if(this.testF.res_20f_9){
      this.testF.sum_res_20f=this.testF.res_20f_9;
     }
     if(this.testF.res_20f_10){
      this.testF.sum_res_20f=this.testF.res_20f_10;
     }
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2);
       }
     }
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3);
         }
       }
     }
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3);
         }
       }
     }
  
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           if(this.testF.res_20f_4){
             this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4);
           }
         }
       }
     }
  
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           if(this.testF.res_20f_4){
             if(this.testF.res_20f_5){
               this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           if(this.testF.res_20f_4){
             if(this.testF.res_20f_5){
               if(this.testF.res_20f_6){
                 this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_20f_1){
       if(this.testF.res_20f_2){
         if(this.testF.res_20f_3){
           if(this.testF.res_20f_4){
             if(this.testF.res_20f_5){
               if(this.testF.res_20f_6){
                 if(this.testF.res_20f_7){
                   this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_20f_1){
      if(this.testF.res_20f_2){
        if(this.testF.res_20f_3){
          if(this.testF.res_20f_4){
            if(this.testF.res_20f_5){
              if(this.testF.res_20f_6){
                if(this.testF.res_20f_7){
                  if(this.testF.res_20f_8){
                    this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_20f_1){
      if(this.testF.res_20f_2){
        if(this.testF.res_20f_3){
          if(this.testF.res_20f_4){
            if(this.testF.res_20f_5){
              if(this.testF.res_20f_6){
                if(this.testF.res_20f_7){
                  if(this.testF.res_20f_8){
                    if(this.testF.res_20f_9){
                      this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_20f_1){
      if(this.testF.res_20f_2){
        if(this.testF.res_20f_3){
          if(this.testF.res_20f_4){
            if(this.testF.res_20f_5){
              if(this.testF.res_20f_6){
                if(this.testF.res_20f_7){
                  if(this.testF.res_20f_8){
                    if(this.testF.res_20f_9){
                      if(this.testF.res_20f_10){
                        this.testF.sum_res_20f=Number(this.testF.res_20f_1)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_20f_10){
  this.testF.sum_res_20f=Number(this.testF.res_20f_10);
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
    this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9);
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8);
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7);
      }
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          if(this.testF.res_20f_5){
            this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          if(this.testF.res_20f_5){
            if(this.testF.res_20f_4){
              this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          if(this.testF.res_20f_5){
            if(this.testF.res_20f_4){
              if(this.testF.res_20f_3){
                this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          if(this.testF.res_20f_5){
            if(this.testF.res_20f_4){
              if(this.testF.res_20f_3){
                if(this.testF.res_20f_2){
                  this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_20f_10){
  if(this.testF.res_20f_9){
     if(this.testF.res_20f_8){
      if(this.testF.res_20f_7){
        if(this.testF.res_20f_6){
          if(this.testF.res_20f_5){
            if(this.testF.res_20f_4){
              if(this.testF.res_20f_3){
                if(this.testF.res_20f_2){
                  if(this.testF.res_20f_1){
                    this.testF.sum_res_20f=Number(this.testF.res_20f_10)+Number(this.testF.res_20f_9)+Number(this.testF.res_20f_8)+Number(this.testF.res_20f_7)+Number(this.testF.res_20f_6)+Number(this.testF.res_20f_5)+Number(this.testF.res_20f_4)+Number(this.testF.res_20f_3)+Number(this.testF.res_20f_2)+Number(this.testF.res_20f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo

  sum_pregunta21(){

    if(this.testF.res_21f_1){
       this.testF.sum_res_21f=this.testF.res_21f_1;
     }
  
     if(this.testF.res_21f_2){
       this.testF.sum_res_21f=this.testF.res_21f_2;
     }
     if(this.testF.res_21f_3){
       this.testF.sum_res_21f=this.testF.res_21f_3;
     }
     if(this.testF.res_21f_4){
       this.testF.sum_res_21f=this.testF.res_21f_4;
     }
     if(this.testF.res_21f_5){
       this.testF.sum_res_21f=this.testF.res_21f_5;
     }
     if(this.testF.res_21f_6){
       this.testF.sum_res_21f=this.testF.res_21f_6;
     }
     if(this.testF.res_21f_7){
       this.testF.sum_res_21f=this.testF.res_21f_7;
     }
     if(this.testF.res_21f_8){
      this.testF.sum_res_21f=this.testF.res_21f_8;
     }
     if(this.testF.res_21f_9){
      this.testF.sum_res_21f=this.testF.res_21f_9;
     }
     if(this.testF.res_21f_10){
      this.testF.sum_res_21f=this.testF.res_21f_10;
     }
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2);
       }
     }
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3);
         }
       }
     }
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3);
         }
       }
     }
  
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           if(this.testF.res_21f_4){
             this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4);
           }
         }
       }
     }
  
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           if(this.testF.res_21f_4){
             if(this.testF.res_21f_5){
               this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5);
             }
           }
         }
       }
     }
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           if(this.testF.res_21f_4){
             if(this.testF.res_21f_5){
               if(this.testF.res_21f_6){
                 this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_6);
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_21f_1){
       if(this.testF.res_21f_2){
         if(this.testF.res_21f_3){
           if(this.testF.res_21f_4){
             if(this.testF.res_21f_5){
               if(this.testF.res_21f_6){
                 if(this.testF.res_21f_7){
                   this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_7);
                 }
               }
             }
           }
         }
       }
     }
  
     if(this.testF.res_21f_1){
      if(this.testF.res_21f_2){
        if(this.testF.res_21f_3){
          if(this.testF.res_21f_4){
            if(this.testF.res_21f_5){
              if(this.testF.res_21f_6){
                if(this.testF.res_21f_7){
                  if(this.testF.res_21f_8){
                    this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_8);
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_21f_1){
      if(this.testF.res_21f_2){
        if(this.testF.res_21f_3){
          if(this.testF.res_21f_4){
            if(this.testF.res_21f_5){
              if(this.testF.res_21f_6){
                if(this.testF.res_21f_7){
                  if(this.testF.res_21f_8){
                    if(this.testF.res_21f_9){
                      this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_9);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
    if(this.testF.res_21f_1){
      if(this.testF.res_21f_2){
        if(this.testF.res_21f_3){
          if(this.testF.res_21f_4){
            if(this.testF.res_21f_5){
              if(this.testF.res_21f_6){
                if(this.testF.res_21f_7){
                  if(this.testF.res_21f_8){
                    if(this.testF.res_21f_9){
                      if(this.testF.res_21f_10){
                        this.testF.sum_res_21f=Number(this.testF.res_21f_1)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_10);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  
  //Reversa
  
  if(this.testF.res_21f_10){
  this.testF.sum_res_21f=Number(this.testF.res_21f_10);
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
    this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9);
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8);
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7);
      }
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6);
        }
      }
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          if(this.testF.res_21f_5){
            this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_5);
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          if(this.testF.res_21f_5){
            if(this.testF.res_21f_4){
              this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_4);
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          if(this.testF.res_21f_5){
            if(this.testF.res_21f_4){
              if(this.testF.res_21f_3){
                this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_3);
              }            
            }          
          }        
        }
      }
     }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          if(this.testF.res_21f_5){
            if(this.testF.res_21f_4){
              if(this.testF.res_21f_3){
                if(this.testF.res_21f_2){
                  this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_2);
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  if(this.testF.res_21f_10){
  if(this.testF.res_21f_9){
     if(this.testF.res_21f_8){
      if(this.testF.res_21f_7){
        if(this.testF.res_21f_6){
          if(this.testF.res_21f_5){
            if(this.testF.res_21f_4){
              if(this.testF.res_21f_3){
                if(this.testF.res_21f_2){
                  if(this.testF.res_21f_1){
                    this.testF.sum_res_21f=Number(this.testF.res_21f_10)+Number(this.testF.res_21f_9)+Number(this.testF.res_21f_8)+Number(this.testF.res_21f_7)+Number(this.testF.res_21f_6)+Number(this.testF.res_21f_5)+Number(this.testF.res_21f_4)+Number(this.testF.res_21f_3)+Number(this.testF.res_21f_2)+Number(this.testF.res_21f_1);
                  }               
                }              
              }            
            }          
          }        
        }
      }
    }
  }
  }
  
  
  }//termina el metodo




sum_pregunta22(){

  if(this.testF.res_22f_1){
     this.testF.sum_res_22f=this.testF.res_22f_1;
   }

   if(this.testF.res_22f_2){
     this.testF.sum_res_22f=this.testF.res_22f_2;
   }
   if(this.testF.res_22f_3){
     this.testF.sum_res_22f=this.testF.res_22f_3;
   }
   if(this.testF.res_22f_4){
     this.testF.sum_res_22f=this.testF.res_22f_4;
   }
   if(this.testF.res_22f_5){
     this.testF.sum_res_22f=this.testF.res_22f_5;
   }
   if(this.testF.res_22f_6){
     this.testF.sum_res_22f=this.testF.res_22f_6;
   }
   if(this.testF.res_22f_7){
     this.testF.sum_res_22f=this.testF.res_22f_7;
   }
   if(this.testF.res_22f_8){
    this.testF.sum_res_22f=this.testF.res_22f_8;
   }
   if(this.testF.res_22f_9){
    this.testF.sum_res_22f=this.testF.res_22f_9;
   }
   if(this.testF.res_22f_10){
    this.testF.sum_res_22f=this.testF.res_22f_10;
   }
   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2);
     }
   }
   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3);
       }
     }
   }
   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3);
       }
     }
   }

   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         if(this.testF.res_22f_4){
           this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4);
         }
       }
     }
   }

   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         if(this.testF.res_22f_4){
           if(this.testF.res_22f_5){
             this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5);
           }
         }
       }
     }
   }
   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         if(this.testF.res_22f_4){
           if(this.testF.res_22f_5){
             if(this.testF.res_22f_6){
               this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_6);
             }
           }
         }
       }
     }
   }

   if(this.testF.res_22f_1){
     if(this.testF.res_22f_2){
       if(this.testF.res_22f_3){
         if(this.testF.res_22f_4){
           if(this.testF.res_22f_5){
             if(this.testF.res_22f_6){
               if(this.testF.res_22f_7){
                 this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_7);
               }
             }
           }
         }
       }
     }
   }

   if(this.testF.res_22f_1){
    if(this.testF.res_22f_2){
      if(this.testF.res_22f_3){
        if(this.testF.res_22f_4){
          if(this.testF.res_22f_5){
            if(this.testF.res_22f_6){
              if(this.testF.res_22f_7){
                if(this.testF.res_22f_8){
                  this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_8);
                }
              }
            }
          }
        }
      }
    }
  }

  if(this.testF.res_22f_1){
    if(this.testF.res_22f_2){
      if(this.testF.res_22f_3){
        if(this.testF.res_22f_4){
          if(this.testF.res_22f_5){
            if(this.testF.res_22f_6){
              if(this.testF.res_22f_7){
                if(this.testF.res_22f_8){
                  if(this.testF.res_22f_9){
                    this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_9);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if(this.testF.res_22f_1){
    if(this.testF.res_22f_2){
      if(this.testF.res_22f_3){
        if(this.testF.res_22f_4){
          if(this.testF.res_22f_5){
            if(this.testF.res_22f_6){
              if(this.testF.res_22f_7){
                if(this.testF.res_22f_8){
                  if(this.testF.res_22f_9){
                    if(this.testF.res_22f_10){
                      this.testF.sum_res_22f=Number(this.testF.res_22f_1)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_10);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

//Reversa

if(this.testF.res_22f_10){
this.testF.sum_res_22f=Number(this.testF.res_22f_10);
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
  this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9);
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8);
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7);
    }
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6);
      }
    }
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        if(this.testF.res_22f_5){
          this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_5);
        }        
      }
    }
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        if(this.testF.res_22f_5){
          if(this.testF.res_22f_4){
            this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_4);
          }          
        }        
      }
    }
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        if(this.testF.res_22f_5){
          if(this.testF.res_22f_4){
            if(this.testF.res_22f_3){
              this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_3);
            }            
          }          
        }        
      }
    }
   }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        if(this.testF.res_22f_5){
          if(this.testF.res_22f_4){
            if(this.testF.res_22f_3){
              if(this.testF.res_22f_2){
                this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_2);
              }              
            }            
          }          
        }        
      }
    }
  }
}
}

if(this.testF.res_22f_10){
if(this.testF.res_22f_9){
   if(this.testF.res_22f_8){
    if(this.testF.res_22f_7){
      if(this.testF.res_22f_6){
        if(this.testF.res_22f_5){
          if(this.testF.res_22f_4){
            if(this.testF.res_22f_3){
              if(this.testF.res_22f_2){
                if(this.testF.res_22f_1){
                  this.testF.sum_res_22f=Number(this.testF.res_22f_10)+Number(this.testF.res_22f_9)+Number(this.testF.res_22f_8)+Number(this.testF.res_22f_7)+Number(this.testF.res_22f_6)+Number(this.testF.res_22f_5)+Number(this.testF.res_22f_4)+Number(this.testF.res_22f_3)+Number(this.testF.res_22f_2)+Number(this.testF.res_22f_1);
                }               
              }              
            }            
          }          
        }        
      }
    }
  }
}
}


}//termina el metodo

sum_pregunta23(){

  if(this.testF.res_23f_1){
     this.testF.sum_res_23f=this.testF.res_23f_1;
   }

   if(this.testF.res_23f_2){
     this.testF.sum_res_23f=this.testF.res_23f_2;
   }
   if(this.testF.res_23f_3){
     this.testF.sum_res_23f=this.testF.res_23f_3;
   }
   if(this.testF.res_23f_4){
     this.testF.sum_res_23f=this.testF.res_23f_4;
   }
   if(this.testF.res_23f_5){
     this.testF.sum_res_23f=this.testF.res_23f_5;
   }
   if(this.testF.res_23f_6){
     this.testF.sum_res_23f=this.testF.res_23f_6;
   }
   if(this.testF.res_23f_7){
     this.testF.sum_res_23f=this.testF.res_23f_7;
   }
   if(this.testF.res_23f_8){
    this.testF.sum_res_23f=this.testF.res_23f_8;
   }
   if(this.testF.res_23f_9){
    this.testF.sum_res_23f=this.testF.res_23f_9;
   }
   if(this.testF.res_23f_10){
    this.testF.sum_res_23f=this.testF.res_23f_10;
   }
   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2);
     }
   }
   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3);
       }
     }
   }
   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3);
       }
     }
   }

   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         if(this.testF.res_23f_4){
           this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4);
         }
       }
     }
   }

   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         if(this.testF.res_23f_4){
           if(this.testF.res_23f_5){
             this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5);
           }
         }
       }
     }
   }
   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         if(this.testF.res_23f_4){
           if(this.testF.res_23f_5){
             if(this.testF.res_23f_6){
               this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_6);
             }
           }
         }
       }
     }
   }

   if(this.testF.res_23f_1){
     if(this.testF.res_23f_2){
       if(this.testF.res_23f_3){
         if(this.testF.res_23f_4){
           if(this.testF.res_23f_5){
             if(this.testF.res_23f_6){
               if(this.testF.res_23f_7){
                 this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_7);
               }
             }
           }
         }
       }
     }
   }

   if(this.testF.res_23f_1){
    if(this.testF.res_23f_2){
      if(this.testF.res_23f_3){
        if(this.testF.res_23f_4){
          if(this.testF.res_23f_5){
            if(this.testF.res_23f_6){
              if(this.testF.res_23f_7){
                if(this.testF.res_23f_8){
                  this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_8);
                }
              }
            }
          }
        }
      }
    }
  }

  if(this.testF.res_23f_1){
    if(this.testF.res_23f_2){
      if(this.testF.res_23f_3){
        if(this.testF.res_23f_4){
          if(this.testF.res_23f_5){
            if(this.testF.res_23f_6){
              if(this.testF.res_23f_7){
                if(this.testF.res_23f_8){
                  if(this.testF.res_23f_9){
                    this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_9);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if(this.testF.res_23f_1){
    if(this.testF.res_23f_2){
      if(this.testF.res_23f_3){
        if(this.testF.res_23f_4){
          if(this.testF.res_23f_5){
            if(this.testF.res_23f_6){
              if(this.testF.res_23f_7){
                if(this.testF.res_23f_8){
                  if(this.testF.res_23f_9){
                    if(this.testF.res_23f_10){
                      this.testF.sum_res_23f=Number(this.testF.res_23f_1)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_10);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

//Reversa

if(this.testF.res_23f_10){
this.testF.sum_res_23f=Number(this.testF.res_23f_10);
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
  this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9);
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8);
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7);
    }
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6);
      }
    }
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        if(this.testF.res_23f_5){
          this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_5);
        }        
      }
    }
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        if(this.testF.res_23f_5){
          if(this.testF.res_23f_4){
            this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_4);
          }          
        }        
      }
    }
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        if(this.testF.res_23f_5){
          if(this.testF.res_23f_4){
            if(this.testF.res_23f_3){
              this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_3);
            }            
          }          
        }        
      }
    }
   }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        if(this.testF.res_23f_5){
          if(this.testF.res_23f_4){
            if(this.testF.res_23f_3){
              if(this.testF.res_23f_2){
                this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_2);
              }              
            }            
          }          
        }        
      }
    }
  }
}
}

if(this.testF.res_23f_10){
if(this.testF.res_23f_9){
   if(this.testF.res_23f_8){
    if(this.testF.res_23f_7){
      if(this.testF.res_23f_6){
        if(this.testF.res_23f_5){
          if(this.testF.res_23f_4){
            if(this.testF.res_23f_3){
              if(this.testF.res_23f_2){
                if(this.testF.res_23f_1){
                  this.testF.sum_res_23f=Number(this.testF.res_23f_10)+Number(this.testF.res_23f_9)+Number(this.testF.res_23f_8)+Number(this.testF.res_23f_7)+Number(this.testF.res_23f_6)+Number(this.testF.res_23f_5)+Number(this.testF.res_23f_4)+Number(this.testF.res_23f_3)+Number(this.testF.res_23f_2)+Number(this.testF.res_23f_1);
                }               
              }              
            }            
          }          
        }        
      }
    }
  }
}
}


}//termina el metodo




}



@Component({
  selector: 'TestIsrM',
  templateUrl: './y.html',
  styleUrls: ['./testisra3.component.css']
/*   template: `
      <div>This is your component 2 </div>
      
  `, */
})
export class TestIsrM {
  @BlockUI()
  blockUI!: NgBlockUI;
  id!: number;
  testM: TestIsraM=new TestIsraM();
  @Input() testCx!: TestIsraC;
  @Input() testFx!: TestIsraF;
  public modelArrayC: RespTestC[] = [];
  public modelArrayF: RespTestF[] = [];
  public modelArrayM: RespTestM[] = [];
  constructor(private route: ActivatedRoute, private _ini: TestIsraService) { }
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.testM.pregunta_1m=1;
    this.testM.pregunta_2m=2;
    this.testM.pregunta_3m=3;
    this.testM.pregunta_4m=4;
    this.testM.pregunta_5m=5;
    this.testM.pregunta_6m=6;
    this.testM.pregunta_7m=7;
    this.testM.pregunta_8m=8;
    this.testM.pregunta_9m=9;
    this.testM.pregunta_10m=10;
    this.testM.pregunta_11m=11;
    this.testM.pregunta_12m=12;
    this.testM.pregunta_13m=13;
    this.testM.pregunta_14m=14;
    this.testM.pregunta_15m=15;
    this.testM.pregunta_16m=16;
    this.testM.pregunta_17m=17;
    this.testM.pregunta_18m=18;
    this.testM.pregunta_19m=19;
    this.testM.pregunta_20m=20;
    this.testM.pregunta_21m=21;
    this.testM.pregunta_22m=22;
    this.testM.pregunta_23m=23;
    console.log(this.testCx);
  }


  sum_pregunta1(){

    if(this.testM.res_1m_1){
       this.testM.sum_res_1m=this.testM.res_1m_1;
     }
 
     if(this.testM.res_1m_2){
       this.testM.sum_res_1m=this.testM.res_1m_2;
     }
     if(this.testM.res_1m_3){
       this.testM.sum_res_1m=this.testM.res_1m_3;
     }
     if(this.testM.res_1m_4){
       this.testM.sum_res_1m=this.testM.res_1m_4;
     }
     if(this.testM.res_1m_5){
       this.testM.sum_res_1m=this.testM.res_1m_5;
     }
     if(this.testM.res_1m_6){
       this.testM.sum_res_1m=this.testM.res_1m_6;
     }
     if(this.testM.res_1m_7){
       this.testM.sum_res_1m=this.testM.res_1m_7;
     }
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2);
       }
     }
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3);
         }
       }
     }
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3);
         }
       }
     }
 
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_4){
             this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_4);
           }
         }
       }
     }
 
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_4){
             if(this.testM.res_1m_5){
               this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_5);
             }
           }
         }
       }
     }
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_4){
             if(this.testM.res_1m_5){
               if(this.testM.res_1m_6){
                 this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_6);
               }
             }
           }
         }
       }
     }
 
     if(this.testM.res_1m_1){
       if(this.testM.res_1m_2){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_4){
             if(this.testM.res_1m_5){
               if(this.testM.res_1m_6){
                 if(this.testM.res_1m_7){
                   this.testM.sum_res_1m=Number(this.testM.res_1m_1)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_7);
                 }
               }
             }
           }
         }
       }
     }
 
 //Reversa
 
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6);
   }
 }
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     if(this.testM.res_1m_5){
       this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_5);
     }
   }
 }
 
 
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     if(this.testM.res_1m_5){
       if(this.testM.res_1m_4){
         this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_4);
       }
     }
   }
 }
 
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     if(this.testM.res_1m_5){
       if(this.testM.res_1m_4){
         if(this.testM.res_1m_3){
           this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_3);
         }
       }
     }
   }
 }
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     if(this.testM.res_1m_5){
       if(this.testM.res_1m_4){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_2){
             this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_2);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_1m_7){
   if(this.testM.res_1m_6){
     if(this.testM.res_1m_5){
       if(this.testM.res_1m_4){
         if(this.testM.res_1m_3){
           if(this.testM.res_1m_2){
             if(this.testM.res_1m_1){
               this.testM.sum_res_1m=Number(this.testM.res_1m_7)+Number(this.testM.res_1m_6)+Number(this.testM.res_1m_5)+Number(this.testM.res_1m_4)+Number(this.testM.res_1m_3)+Number(this.testM.res_1m_2)+Number(this.testM.res_1m_1);
             }
           }
         }
       }
     }
   }
 }
 
 
 }
 
   sum_pregunta2(){
       if(this.testM.res_2m_1){
       this.testM.sum_res_2m=this.testM.res_2m_1;
     }
 
     if(this.testM.res_2m_2){
       this.testM.sum_res_2m=this.testM.res_2m_2;
     }
     if(this.testM.res_2m_3){
       this.testM.sum_res_2m=this.testM.res_2m_3;
     }
     if(this.testM.res_2m_4){
       this.testM.sum_res_2m=this.testM.res_2m_4;
     }
     if(this.testM.res_2m_5){
       this.testM.sum_res_2m=this.testM.res_2m_5;
     }
     if(this.testM.res_2m_6){
       this.testM.sum_res_2m=this.testM.res_2m_6;
     }
     if(this.testM.res_2m_7){
       this.testM.sum_res_2m=this.testM.res_2m_7;
     }
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2);
       }
     }
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3);
         }
       }
     }
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3);
         }
       }
     }
 
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_4){
             this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_4);
           }
         }
       }
     }
 
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_4){
             if(this.testM.res_2m_5){
               this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_5);
             }
           }
         }
       }
     }
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_4){
             if(this.testM.res_2m_5){
               if(this.testM.res_2m_6){
                 this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_6);
               }
             }
           }
         }
       }
     }
 
     if(this.testM.res_2m_1){
       if(this.testM.res_2m_2){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_4){
             if(this.testM.res_2m_5){
               if(this.testM.res_2m_6){
                 if(this.testM.res_2m_7){
                   this.testM.sum_res_2m=Number(this.testM.res_2m_1)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_7);
                 }
               }
             }
           }
         }
       }
     }
 
 //Reversa
 
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6);
   }
 }
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     if(this.testM.res_2m_5){
       this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_5);
     }
   }
 }
 
 
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     if(this.testM.res_2m_5){
       if(this.testM.res_2m_4){
         this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_4);
       }
     }
   }
 }
 
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     if(this.testM.res_2m_5){
       if(this.testM.res_2m_4){
         if(this.testM.res_2m_3){
           this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_3);
         }
       }
     }
   }
 }
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     if(this.testM.res_2m_5){
       if(this.testM.res_2m_4){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_2){
             this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_2);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_2m_7){
   if(this.testM.res_2m_6){
     if(this.testM.res_2m_5){
       if(this.testM.res_2m_4){
         if(this.testM.res_2m_3){
           if(this.testM.res_2m_2){
             if(this.testM.res_2m_1){
               this.testM.sum_res_2m=Number(this.testM.res_2m_7)+Number(this.testM.res_2m_6)+Number(this.testM.res_2m_5)+Number(this.testM.res_2m_4)+Number(this.testM.res_2m_3)+Number(this.testM.res_2m_2)+Number(this.testM.res_2m_1);
             }
           }
         }
       }
     }
   }
 }
 
 
   }
 
   sum_pregunta3(){
     if(this.testM.res_3m_1){
       this.testM.sum_res_3m=this.testM.res_3m_1;
     }
 
     if(this.testM.res_3m_2){
       this.testM.sum_res_3m=this.testM.res_3m_2;
     }
     if(this.testM.res_3m_3){
       this.testM.sum_res_3m=this.testM.res_3m_3;
     }
     if(this.testM.res_3m_4){
       this.testM.sum_res_3m=this.testM.res_3m_4;
     }
     if(this.testM.res_3m_5){
       this.testM.sum_res_3m=this.testM.res_3m_5;
     }
     if(this.testM.res_3m_6){
       this.testM.sum_res_3m=this.testM.res_3m_6;
     }
     if(this.testM.res_3m_7){
       this.testM.sum_res_3m=this.testM.res_3m_7;
     }
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2);
       }
     }
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3);
         }
       }
     }
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3);
         }
       }
     }
 
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_4){
             this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_4);
           }
         }
       }
     }
 
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_4){
             if(this.testM.res_3m_5){
               this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_5);
             }
           }
         }
       }
     }
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_4){
             if(this.testM.res_3m_5){
               if(this.testM.res_3m_6){
                 this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_6);
               }
             }
           }
         }
       }
     }
 
     if(this.testM.res_3m_1){
       if(this.testM.res_3m_2){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_4){
             if(this.testM.res_3m_5){
               if(this.testM.res_3m_6){
                 if(this.testM.res_3m_7){
                   this.testM.sum_res_3m=Number(this.testM.res_3m_1)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_7);
                 }
               }
             }
           }
         }
       }
     }
 
 //Reversa
 
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6);
   }
 }
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     if(this.testM.res_3m_5){
       this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_5);
     }
   }
 }
 
 
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     if(this.testM.res_3m_5){
       if(this.testM.res_3m_4){
         this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_4);
       }
     }
   }
 }
 
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     if(this.testM.res_3m_5){
       if(this.testM.res_3m_4){
         if(this.testM.res_3m_3){
           this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_3);
         }
       }
     }
   }
 }
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     if(this.testM.res_3m_5){
       if(this.testM.res_3m_4){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_2){
             this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_2);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_3m_7){
   if(this.testM.res_3m_6){
     if(this.testM.res_3m_5){
       if(this.testM.res_3m_4){
         if(this.testM.res_3m_3){
           if(this.testM.res_3m_2){
             if(this.testM.res_3m_1){
               this.testM.sum_res_3m=Number(this.testM.res_3m_7)+Number(this.testM.res_3m_6)+Number(this.testM.res_3m_5)+Number(this.testM.res_3m_4)+Number(this.testM.res_3m_3)+Number(this.testM.res_3m_2)+Number(this.testM.res_3m_1);
             }
           }
         }
       }
     }
   }
 }
 
   }
 
   sum_pregunta4(){
 
     if(this.testM.res_4m_1){
       this.testM.sum_res_4m=this.testM.res_4m_1;
     }
 
     if(this.testM.res_4m_2){
       this.testM.sum_res_4m=this.testM.res_4m_2;
     }
     if(this.testM.res_4m_3){
       this.testM.sum_res_4m=this.testM.res_4m_3;
     }
     if(this.testM.res_4m_4){
       this.testM.sum_res_4m=this.testM.res_4m_4;
     }
     if(this.testM.res_4m_5){
       this.testM.sum_res_4m=this.testM.res_4m_5;
     }
     if(this.testM.res_4m_6){
       this.testM.sum_res_4m=this.testM.res_4m_6;
     }
     if(this.testM.res_4m_7){
       this.testM.sum_res_4m=this.testM.res_4m_7;
     }
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2);
       }
     }
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3);
         }
       }
     }
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3);
         }
       }
     }
 
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_4){
             this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_4);
           }
         }
       }
     }
 
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_4){
             if(this.testM.res_4m_5){
               this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_5);
             }
           }
         }
       }
     }
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_4){
             if(this.testM.res_4m_5){
               if(this.testM.res_4m_6){
                 this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_6);
               }
             }
           }
         }
       }
     }
 
     if(this.testM.res_4m_1){
       if(this.testM.res_4m_2){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_4){
             if(this.testM.res_4m_5){
               if(this.testM.res_4m_6){
                 if(this.testM.res_4m_7){
                   this.testM.sum_res_4m=Number(this.testM.res_4m_1)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_7);
                 }
               }
             }
           }
         }
       }
     }
 
 //Reversa
 
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6);
   }
 }
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     if(this.testM.res_4m_5){
       this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_5);
     }
   }
 }
 
 
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     if(this.testM.res_4m_5){
       if(this.testM.res_4m_4){
         this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_4);
       }
     }
   }
 }
 
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     if(this.testM.res_4m_5){
       if(this.testM.res_4m_4){
         if(this.testM.res_4m_3){
           this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_3);
         }
       }
     }
   }
 }
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     if(this.testM.res_4m_5){
       if(this.testM.res_4m_4){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_2){
             this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_2);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_4m_7){
   if(this.testM.res_4m_6){
     if(this.testM.res_4m_5){
       if(this.testM.res_4m_4){
         if(this.testM.res_4m_3){
           if(this.testM.res_4m_2){
             if(this.testM.res_4m_1){
               this.testM.sum_res_4m=Number(this.testM.res_4m_7)+Number(this.testM.res_4m_6)+Number(this.testM.res_4m_5)+Number(this.testM.res_4m_4)+Number(this.testM.res_4m_3)+Number(this.testM.res_4m_2)+Number(this.testM.res_4m_1);
             }
           }
         }
       }
     }
   }
 }
 
   }
 
   sum_pregunta5(){
         if(this.testM.res_5m_1){
       this.testM.sum_res_5m=this.testM.res_5m_1;
     }
 
     if(this.testM.res_5m_2){
       this.testM.sum_res_5m=this.testM.res_5m_2;
     }
     if(this.testM.res_5m_3){
       this.testM.sum_res_5m=this.testM.res_5m_3;
     }
     if(this.testM.res_5m_4){
       this.testM.sum_res_5m=this.testM.res_5m_4;
     }
     if(this.testM.res_5m_5){
       this.testM.sum_res_5m=this.testM.res_5m_5;
     }
     if(this.testM.res_5m_6){
       this.testM.sum_res_5m=this.testM.res_5m_6;
     }
     if(this.testM.res_5m_7){
       this.testM.sum_res_5m=this.testM.res_5m_7;
     }
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2);
       }
     }
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3);
         }
       }
     }
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3);
         }
       }
     }
 
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_4){
             this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_4);
           }
         }
       }
     }
 
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_4){
             if(this.testM.res_5m_5){
               this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_5);
             }
           }
         }
       }
     }
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_4){
             if(this.testM.res_5m_5){
               if(this.testM.res_5m_6){
                 this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_6);
               }
             }
           }
         }
       }
     }
 
     if(this.testM.res_5m_1){
       if(this.testM.res_5m_2){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_4){
             if(this.testM.res_5m_5){
               if(this.testM.res_5m_6){
                 if(this.testM.res_5m_7){
                   this.testM.sum_res_5m=Number(this.testM.res_5m_1)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_7);
                 }
               }
             }
           }
         }
       }
     }
 
 //Reversa
 
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6);
   }
 }
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     if(this.testM.res_5m_5){
       this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_5);
     }
   }
 }
 
 
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     if(this.testM.res_5m_5){
       if(this.testM.res_5m_4){
         this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_4);
       }
     }
   }
 }
 
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     if(this.testM.res_5m_5){
       if(this.testM.res_5m_4){
         if(this.testM.res_5m_3){
           this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_3);
         }
       }
     }
   }
 }
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     if(this.testM.res_5m_5){
       if(this.testM.res_5m_4){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_2){
             this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_2);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_5m_7){
   if(this.testM.res_5m_6){
     if(this.testM.res_5m_5){
       if(this.testM.res_5m_4){
         if(this.testM.res_5m_3){
           if(this.testM.res_5m_2){
             if(this.testM.res_5m_1){
               this.testM.sum_res_5m=Number(this.testM.res_5m_7)+Number(this.testM.res_5m_6)+Number(this.testM.res_5m_5)+Number(this.testM.res_5m_4)+Number(this.testM.res_5m_3)+Number(this.testM.res_5m_2)+Number(this.testM.res_5m_1);
             }
           }
         }
       }
     }
   }
 }
 
   }
 
 sum_pregunta6(){
     if(this.testM.res_6m_1){
   this.testM.sum_res_6m=this.testM.res_6m_1;
 }
 
 if(this.testM.res_6m_2){
   this.testM.sum_res_6m=this.testM.res_6m_2;
 }
 if(this.testM.res_6m_3){
   this.testM.sum_res_6m=this.testM.res_6m_3;
 }
 if(this.testM.res_6m_4){
   this.testM.sum_res_6m=this.testM.res_6m_4;
 }
 if(this.testM.res_6m_5){
   this.testM.sum_res_6m=this.testM.res_6m_5;
 }
 if(this.testM.res_6m_6){
   this.testM.sum_res_6m=this.testM.res_6m_6;
 }
 if(this.testM.res_6m_7){
   this.testM.sum_res_6m=this.testM.res_6m_7;
 }
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2);
   }
 }
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3);
     }
   }
 }
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3);
     }
   }
 }
 
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_4){
         this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_4);
       }
     }
   }
 }
 
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_4){
         if(this.testM.res_6m_5){
           this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_5);
         }
       }
     }
   }
 }
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_4){
         if(this.testM.res_6m_5){
           if(this.testM.res_6m_6){
             this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_6);
           }
         }
       }
     }
   }
 }
 
 if(this.testM.res_6m_1){
   if(this.testM.res_6m_2){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_4){
         if(this.testM.res_6m_5){
           if(this.testM.res_6m_6){
             if(this.testM.res_6m_7){
               this.testM.sum_res_6m=Number(this.testM.res_6m_1)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_7);
             }
           }
         }
       }
     }
   }
 }
 
 //Reversa
 
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6);
 }
 }
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 if(this.testM.res_6m_5){
   this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_5);
 }
 }
 }
 
 
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 if(this.testM.res_6m_5){
   if(this.testM.res_6m_4){
     this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_4);
   }
 }
 }
 }
 
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 if(this.testM.res_6m_5){
   if(this.testM.res_6m_4){
     if(this.testM.res_6m_3){
       this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_3);
     }
   }
 }
 }
 }
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 if(this.testM.res_6m_5){
   if(this.testM.res_6m_4){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_2){
         this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_2);
       }
     }
   }
 }
 }
 }
 
 if(this.testM.res_6m_7){
 if(this.testM.res_6m_6){
 if(this.testM.res_6m_5){
   if(this.testM.res_6m_4){
     if(this.testM.res_6m_3){
       if(this.testM.res_6m_2){
         if(this.testM.res_6m_1){
           this.testM.sum_res_6m=Number(this.testM.res_6m_7)+Number(this.testM.res_6m_6)+Number(this.testM.res_6m_5)+Number(this.testM.res_6m_4)+Number(this.testM.res_6m_3)+Number(this.testM.res_6m_2)+Number(this.testM.res_6m_1);
         }
       }
     }
   }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta7(){
   if(this.testM.res_7m_1){
 this.testM.sum_res_7m=this.testM.res_7m_1;
 }
 
 if(this.testM.res_7m_2){
 this.testM.sum_res_7m=this.testM.res_7m_2;
 }
 if(this.testM.res_7m_3){
 this.testM.sum_res_7m=this.testM.res_7m_3;
 }
 if(this.testM.res_7m_4){
 this.testM.sum_res_7m=this.testM.res_7m_4;
 }
 if(this.testM.res_7m_5){
 this.testM.sum_res_7m=this.testM.res_7m_5;
 }
 if(this.testM.res_7m_6){
 this.testM.sum_res_7m=this.testM.res_7m_6;
 }
 if(this.testM.res_7m_7){
 this.testM.sum_res_7m=this.testM.res_7m_7;
 }
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2);
 }
 }
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3);
   }
 }
 }
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3);
   }
 }
 }
 
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_4){
       this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_4);
     }
   }
 }
 }
 
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_4){
       if(this.testM.res_7m_5){
         this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_4){
       if(this.testM.res_7m_5){
         if(this.testM.res_7m_6){
           this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_7m_1){
 if(this.testM.res_7m_2){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_4){
       if(this.testM.res_7m_5){
         if(this.testM.res_7m_6){
           if(this.testM.res_7m_7){
             this.testM.sum_res_7m=Number(this.testM.res_7m_1)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6);
 }
 }
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 if(this.testM.res_7m_5){
 this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_5);
 }
 }
 }
 
 
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 if(this.testM.res_7m_5){
 if(this.testM.res_7m_4){
   this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_4);
 }
 }
 }
 }
 
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 if(this.testM.res_7m_5){
 if(this.testM.res_7m_4){
   if(this.testM.res_7m_3){
     this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 if(this.testM.res_7m_5){
 if(this.testM.res_7m_4){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_2){
       this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_7m_7){
 if(this.testM.res_7m_6){
 if(this.testM.res_7m_5){
 if(this.testM.res_7m_4){
   if(this.testM.res_7m_3){
     if(this.testM.res_7m_2){
       if(this.testM.res_7m_1){
         this.testM.sum_res_7m=Number(this.testM.res_7m_7)+Number(this.testM.res_7m_6)+Number(this.testM.res_7m_5)+Number(this.testM.res_7m_4)+Number(this.testM.res_7m_3)+Number(this.testM.res_7m_2)+Number(this.testM.res_7m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta8(){
   if(this.testM.res_8m_1){
 this.testM.sum_res_8m=this.testM.res_8m_1;
 }
 
 if(this.testM.res_8m_2){
 this.testM.sum_res_8m=this.testM.res_8m_2;
 }
 if(this.testM.res_8m_3){
 this.testM.sum_res_8m=this.testM.res_8m_3;
 }
 if(this.testM.res_8m_4){
 this.testM.sum_res_8m=this.testM.res_8m_4;
 }
 if(this.testM.res_8m_5){
 this.testM.sum_res_8m=this.testM.res_8m_5;
 }
 if(this.testM.res_8m_6){
 this.testM.sum_res_8m=this.testM.res_8m_6;
 }
 if(this.testM.res_8m_7){
 this.testM.sum_res_8m=this.testM.res_8m_7;
 }
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2);
 }
 }
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3);
   }
 }
 }
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3);
   }
 }
 }
 
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_4){
       this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_4);
     }
   }
 }
 }
 
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_4){
       if(this.testM.res_8m_5){
         this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_4){
       if(this.testM.res_8m_5){
         if(this.testM.res_8m_6){
           this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_8m_1){
 if(this.testM.res_8m_2){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_4){
       if(this.testM.res_8m_5){
         if(this.testM.res_8m_6){
           if(this.testM.res_8m_7){
             this.testM.sum_res_8m=Number(this.testM.res_8m_1)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6);
 }
 }
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 if(this.testM.res_8m_5){
 this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_5);
 }
 }
 }
 
 
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 if(this.testM.res_8m_5){
 if(this.testM.res_8m_4){
   this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_4);
 }
 }
 }
 }
 
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 if(this.testM.res_8m_5){
 if(this.testM.res_8m_4){
   if(this.testM.res_8m_3){
     this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 if(this.testM.res_8m_5){
 if(this.testM.res_8m_4){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_2){
       this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_8m_7){
 if(this.testM.res_8m_6){
 if(this.testM.res_8m_5){
 if(this.testM.res_8m_4){
   if(this.testM.res_8m_3){
     if(this.testM.res_8m_2){
       if(this.testM.res_8m_1){
         this.testM.sum_res_8m=Number(this.testM.res_8m_7)+Number(this.testM.res_8m_6)+Number(this.testM.res_8m_5)+Number(this.testM.res_8m_4)+Number(this.testM.res_8m_3)+Number(this.testM.res_8m_2)+Number(this.testM.res_8m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta9(){
   if(this.testM.res_9m_1){
 this.testM.sum_res_9m=this.testM.res_9m_1;
 }
 
 if(this.testM.res_9m_2){
 this.testM.sum_res_9m=this.testM.res_9m_2;
 }
 if(this.testM.res_9m_3){
 this.testM.sum_res_9m=this.testM.res_9m_3;
 }
 if(this.testM.res_9m_4){
 this.testM.sum_res_9m=this.testM.res_9m_4;
 }
 if(this.testM.res_9m_5){
 this.testM.sum_res_9m=this.testM.res_9m_5;
 }
 if(this.testM.res_9m_6){
 this.testM.sum_res_9m=this.testM.res_9m_6;
 }
 if(this.testM.res_9m_7){
 this.testM.sum_res_9m=this.testM.res_9m_7;
 }
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2);
 }
 }
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3);
   }
 }
 }
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3);
   }
 }
 }
 
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_4){
       this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_4);
     }
   }
 }
 }
 
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_4){
       if(this.testM.res_9m_5){
         this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_4){
       if(this.testM.res_9m_5){
         if(this.testM.res_9m_6){
           this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_9m_1){
 if(this.testM.res_9m_2){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_4){
       if(this.testM.res_9m_5){
         if(this.testM.res_9m_6){
           if(this.testM.res_9m_7){
             this.testM.sum_res_9m=Number(this.testM.res_9m_1)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6);
 }
 }
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 if(this.testM.res_9m_5){
 this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_5);
 }
 }
 }
 
 
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 if(this.testM.res_9m_5){
 if(this.testM.res_9m_4){
   this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_4);
 }
 }
 }
 }
 
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 if(this.testM.res_9m_5){
 if(this.testM.res_9m_4){
   if(this.testM.res_9m_3){
     this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 if(this.testM.res_9m_5){
 if(this.testM.res_9m_4){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_2){
       this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_9m_7){
 if(this.testM.res_9m_6){
 if(this.testM.res_9m_5){
 if(this.testM.res_9m_4){
   if(this.testM.res_9m_3){
     if(this.testM.res_9m_2){
       if(this.testM.res_9m_1){
         this.testM.sum_res_9m=Number(this.testM.res_9m_7)+Number(this.testM.res_9m_6)+Number(this.testM.res_9m_5)+Number(this.testM.res_9m_4)+Number(this.testM.res_9m_3)+Number(this.testM.res_9m_2)+Number(this.testM.res_9m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta10(){
   if(this.testM.res_10m_1){
 this.testM.sum_res_10m=this.testM.res_10m_1;
 }
 
 if(this.testM.res_10m_2){
 this.testM.sum_res_10m=this.testM.res_10m_2;
 }
 if(this.testM.res_10m_3){
 this.testM.sum_res_10m=this.testM.res_10m_3;
 }
 if(this.testM.res_10m_4){
 this.testM.sum_res_10m=this.testM.res_10m_4;
 }
 if(this.testM.res_10m_5){
 this.testM.sum_res_10m=this.testM.res_10m_5;
 }
 if(this.testM.res_10m_6){
 this.testM.sum_res_10m=this.testM.res_10m_6;
 }
 if(this.testM.res_10m_7){
 this.testM.sum_res_10m=this.testM.res_10m_7;
 }
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2);
 }
 }
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3);
   }
 }
 }
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3);
   }
 }
 }
 
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_4){
       this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_4);
     }
   }
 }
 }
 
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_4){
       if(this.testM.res_10m_5){
         this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_4){
       if(this.testM.res_10m_5){
         if(this.testM.res_10m_6){
           this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_10m_1){
 if(this.testM.res_10m_2){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_4){
       if(this.testM.res_10m_5){
         if(this.testM.res_10m_6){
           if(this.testM.res_10m_7){
             this.testM.sum_res_10m=Number(this.testM.res_10m_1)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6);
 }
 }
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 if(this.testM.res_10m_5){
 this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_5);
 }
 }
 }
 
 
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 if(this.testM.res_10m_5){
 if(this.testM.res_10m_4){
   this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_4);
 }
 }
 }
 }
 
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 if(this.testM.res_10m_5){
 if(this.testM.res_10m_4){
   if(this.testM.res_10m_3){
     this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 if(this.testM.res_10m_5){
 if(this.testM.res_10m_4){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_2){
       this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_10m_7){
 if(this.testM.res_10m_6){
 if(this.testM.res_10m_5){
 if(this.testM.res_10m_4){
   if(this.testM.res_10m_3){
     if(this.testM.res_10m_2){
       if(this.testM.res_10m_1){
         this.testM.sum_res_10m=Number(this.testM.res_10m_7)+Number(this.testM.res_10m_6)+Number(this.testM.res_10m_5)+Number(this.testM.res_10m_4)+Number(this.testM.res_10m_3)+Number(this.testM.res_10m_2)+Number(this.testM.res_10m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta11(){
   if(this.testM.res_11m_1){
 this.testM.sum_res_11m=this.testM.res_11m_1;
 }
 
 if(this.testM.res_11m_2){
 this.testM.sum_res_11m=this.testM.res_11m_2;
 }
 if(this.testM.res_11m_3){
 this.testM.sum_res_11m=this.testM.res_11m_3;
 }
 if(this.testM.res_11m_4){
 this.testM.sum_res_11m=this.testM.res_11m_4;
 }
 if(this.testM.res_11m_5){
 this.testM.sum_res_11m=this.testM.res_11m_5;
 }
 if(this.testM.res_11m_6){
 this.testM.sum_res_11m=this.testM.res_11m_6;
 }
 if(this.testM.res_11m_7){
 this.testM.sum_res_11m=this.testM.res_11m_7;
 }
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2);
 }
 }
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3);
   }
 }
 }
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3);
   }
 }
 }
 
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_4){
       this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_4);
     }
   }
 }
 }
 
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_4){
       if(this.testM.res_11m_5){
         this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_4){
       if(this.testM.res_11m_5){
         if(this.testM.res_11m_6){
           this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_11m_1){
 if(this.testM.res_11m_2){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_4){
       if(this.testM.res_11m_5){
         if(this.testM.res_11m_6){
           if(this.testM.res_11m_7){
             this.testM.sum_res_11m=Number(this.testM.res_11m_1)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6);
 }
 }
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 if(this.testM.res_11m_5){
 this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_5);
 }
 }
 }
 
 
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 if(this.testM.res_11m_5){
 if(this.testM.res_11m_4){
   this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_4);
 }
 }
 }
 }
 
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 if(this.testM.res_11m_5){
 if(this.testM.res_11m_4){
   if(this.testM.res_11m_3){
     this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 if(this.testM.res_11m_5){
 if(this.testM.res_11m_4){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_2){
       this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_11m_7){
 if(this.testM.res_11m_6){
 if(this.testM.res_11m_5){
 if(this.testM.res_11m_4){
   if(this.testM.res_11m_3){
     if(this.testM.res_11m_2){
       if(this.testM.res_11m_1){
         this.testM.sum_res_11m=Number(this.testM.res_11m_7)+Number(this.testM.res_11m_6)+Number(this.testM.res_11m_5)+Number(this.testM.res_11m_4)+Number(this.testM.res_11m_3)+Number(this.testM.res_11m_2)+Number(this.testM.res_11m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta12(){
   if(this.testM.res_12m_1){
 this.testM.sum_res_12m=this.testM.res_12m_1;
 }
 
 if(this.testM.res_12m_2){
 this.testM.sum_res_12m=this.testM.res_12m_2;
 }
 if(this.testM.res_12m_3){
 this.testM.sum_res_12m=this.testM.res_12m_3;
 }
 if(this.testM.res_12m_4){
 this.testM.sum_res_12m=this.testM.res_12m_4;
 }
 if(this.testM.res_12m_5){
 this.testM.sum_res_12m=this.testM.res_12m_5;
 }
 if(this.testM.res_12m_6){
 this.testM.sum_res_12m=this.testM.res_12m_6;
 }
 if(this.testM.res_12m_7){
 this.testM.sum_res_12m=this.testM.res_12m_7;
 }
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2);
 }
 }
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3);
   }
 }
 }
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3);
   }
 }
 }
 
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_4){
       this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_4);
     }
   }
 }
 }
 
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_4){
       if(this.testM.res_12m_5){
         this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_4){
       if(this.testM.res_12m_5){
         if(this.testM.res_12m_6){
           this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_12m_1){
 if(this.testM.res_12m_2){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_4){
       if(this.testM.res_12m_5){
         if(this.testM.res_12m_6){
           if(this.testM.res_12m_7){
             this.testM.sum_res_12m=Number(this.testM.res_12m_1)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6);
 }
 }
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 if(this.testM.res_12m_5){
 this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_5);
 }
 }
 }
 
 
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 if(this.testM.res_12m_5){
 if(this.testM.res_12m_4){
   this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_4);
 }
 }
 }
 }
 
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 if(this.testM.res_12m_5){
 if(this.testM.res_12m_4){
   if(this.testM.res_12m_3){
     this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 if(this.testM.res_12m_5){
 if(this.testM.res_12m_4){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_2){
       this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_12m_7){
 if(this.testM.res_12m_6){
 if(this.testM.res_12m_5){
 if(this.testM.res_12m_4){
   if(this.testM.res_12m_3){
     if(this.testM.res_12m_2){
       if(this.testM.res_12m_1){
         this.testM.sum_res_12m=Number(this.testM.res_12m_7)+Number(this.testM.res_12m_6)+Number(this.testM.res_12m_5)+Number(this.testM.res_12m_4)+Number(this.testM.res_12m_3)+Number(this.testM.res_12m_2)+Number(this.testM.res_12m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta13(){
   if(this.testM.res_13m_1){
 this.testM.sum_res_13m=this.testM.res_13m_1;
 }
 
 if(this.testM.res_13m_2){
 this.testM.sum_res_13m=this.testM.res_13m_2;
 }
 if(this.testM.res_13m_3){
 this.testM.sum_res_13m=this.testM.res_13m_3;
 }
 if(this.testM.res_13m_4){
 this.testM.sum_res_13m=this.testM.res_13m_4;
 }
 if(this.testM.res_13m_5){
 this.testM.sum_res_13m=this.testM.res_13m_5;
 }
 if(this.testM.res_13m_6){
 this.testM.sum_res_13m=this.testM.res_13m_6;
 }
 if(this.testM.res_13m_7){
 this.testM.sum_res_13m=this.testM.res_13m_7;
 }
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2);
 }
 }
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3);
   }
 }
 }
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3);
   }
 }
 }
 
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_4){
       this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_4);
     }
   }
 }
 }
 
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_4){
       if(this.testM.res_13m_5){
         this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_4){
       if(this.testM.res_13m_5){
         if(this.testM.res_13m_6){
           this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_13m_1){
 if(this.testM.res_13m_2){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_4){
       if(this.testM.res_13m_5){
         if(this.testM.res_13m_6){
           if(this.testM.res_13m_7){
             this.testM.sum_res_13m=Number(this.testM.res_13m_1)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6);
 }
 }
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 if(this.testM.res_13m_5){
 this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_5);
 }
 }
 }
 
 
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 if(this.testM.res_13m_5){
 if(this.testM.res_13m_4){
   this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_4);
 }
 }
 }
 }
 
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 if(this.testM.res_13m_5){
 if(this.testM.res_13m_4){
   if(this.testM.res_13m_3){
     this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 if(this.testM.res_13m_5){
 if(this.testM.res_13m_4){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_2){
       this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_13m_7){
 if(this.testM.res_13m_6){
 if(this.testM.res_13m_5){
 if(this.testM.res_13m_4){
   if(this.testM.res_13m_3){
     if(this.testM.res_13m_2){
       if(this.testM.res_13m_1){
         this.testM.sum_res_13m=Number(this.testM.res_13m_7)+Number(this.testM.res_13m_6)+Number(this.testM.res_13m_5)+Number(this.testM.res_13m_4)+Number(this.testM.res_13m_3)+Number(this.testM.res_13m_2)+Number(this.testM.res_13m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta14(){
   if(this.testM.res_14m_1){
 this.testM.sum_res_14m=this.testM.res_14m_1;
 }
 
 if(this.testM.res_14m_2){
 this.testM.sum_res_14m=this.testM.res_14m_2;
 }
 if(this.testM.res_14m_3){
 this.testM.sum_res_14m=this.testM.res_14m_3;
 }
 if(this.testM.res_14m_4){
 this.testM.sum_res_14m=this.testM.res_14m_4;
 }
 if(this.testM.res_14m_5){
 this.testM.sum_res_14m=this.testM.res_14m_5;
 }
 if(this.testM.res_14m_6){
 this.testM.sum_res_14m=this.testM.res_14m_6;
 }
 if(this.testM.res_14m_7){
 this.testM.sum_res_14m=this.testM.res_14m_7;
 }
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2);
 }
 }
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3);
   }
 }
 }
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3);
   }
 }
 }
 
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_4){
       this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_4);
     }
   }
 }
 }
 
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_4){
       if(this.testM.res_14m_5){
         this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_4){
       if(this.testM.res_14m_5){
         if(this.testM.res_14m_6){
           this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_14m_1){
 if(this.testM.res_14m_2){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_4){
       if(this.testM.res_14m_5){
         if(this.testM.res_14m_6){
           if(this.testM.res_14m_7){
             this.testM.sum_res_14m=Number(this.testM.res_14m_1)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6);
 }
 }
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 if(this.testM.res_14m_5){
 this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_5);
 }
 }
 }
 
 
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 if(this.testM.res_14m_5){
 if(this.testM.res_14m_4){
   this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_4);
 }
 }
 }
 }
 
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 if(this.testM.res_14m_5){
 if(this.testM.res_14m_4){
   if(this.testM.res_14m_3){
     this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 if(this.testM.res_14m_5){
 if(this.testM.res_14m_4){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_2){
       this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_14m_7){
 if(this.testM.res_14m_6){
 if(this.testM.res_14m_5){
 if(this.testM.res_14m_4){
   if(this.testM.res_14m_3){
     if(this.testM.res_14m_2){
       if(this.testM.res_14m_1){
         this.testM.sum_res_14m=Number(this.testM.res_14m_7)+Number(this.testM.res_14m_6)+Number(this.testM.res_14m_5)+Number(this.testM.res_14m_4)+Number(this.testM.res_14m_3)+Number(this.testM.res_14m_2)+Number(this.testM.res_14m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta15(){
   if(this.testM.res_15m_1){
 this.testM.sum_res_15m=this.testM.res_15m_1;
 }
 
 if(this.testM.res_15m_2){
 this.testM.sum_res_15m=this.testM.res_15m_2;
 }
 if(this.testM.res_15m_3){
 this.testM.sum_res_15m=this.testM.res_15m_3;
 }
 if(this.testM.res_15m_4){
 this.testM.sum_res_15m=this.testM.res_15m_4;
 }
 if(this.testM.res_15m_5){
 this.testM.sum_res_15m=this.testM.res_15m_5;
 }
 if(this.testM.res_15m_6){
 this.testM.sum_res_15m=this.testM.res_15m_6;
 }
 if(this.testM.res_15m_7){
 this.testM.sum_res_15m=this.testM.res_15m_7;
 }
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2);
 }
 }
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3);
   }
 }
 }
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3);
   }
 }
 }
 
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_4){
       this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_4);
     }
   }
 }
 }
 
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_4){
       if(this.testM.res_15m_5){
         this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_4){
       if(this.testM.res_15m_5){
         if(this.testM.res_15m_6){
           this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_15m_1){
 if(this.testM.res_15m_2){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_4){
       if(this.testM.res_15m_5){
         if(this.testM.res_15m_6){
           if(this.testM.res_15m_7){
             this.testM.sum_res_15m=Number(this.testM.res_15m_1)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6);
 }
 }
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 if(this.testM.res_15m_5){
 this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_5);
 }
 }
 }
 
 
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 if(this.testM.res_15m_5){
 if(this.testM.res_15m_4){
   this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_4);
 }
 }
 }
 }
 
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 if(this.testM.res_15m_5){
 if(this.testM.res_15m_4){
   if(this.testM.res_15m_3){
     this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 if(this.testM.res_15m_5){
 if(this.testM.res_15m_4){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_2){
       this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_15m_7){
 if(this.testM.res_15m_6){
 if(this.testM.res_15m_5){
 if(this.testM.res_15m_4){
   if(this.testM.res_15m_3){
     if(this.testM.res_15m_2){
       if(this.testM.res_15m_1){
         this.testM.sum_res_15m=Number(this.testM.res_15m_7)+Number(this.testM.res_15m_6)+Number(this.testM.res_15m_5)+Number(this.testM.res_15m_4)+Number(this.testM.res_15m_3)+Number(this.testM.res_15m_2)+Number(this.testM.res_15m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta16(){
   if(this.testM.res_16m_1){
 this.testM.sum_res_16m=this.testM.res_16m_1;
 }
 
 if(this.testM.res_16m_2){
 this.testM.sum_res_16m=this.testM.res_16m_2;
 }
 if(this.testM.res_16m_3){
 this.testM.sum_res_16m=this.testM.res_16m_3;
 }
 if(this.testM.res_16m_4){
 this.testM.sum_res_16m=this.testM.res_16m_4;
 }
 if(this.testM.res_16m_5){
 this.testM.sum_res_16m=this.testM.res_16m_5;
 }
 if(this.testM.res_16m_6){
 this.testM.sum_res_16m=this.testM.res_16m_6;
 }
 if(this.testM.res_16m_7){
 this.testM.sum_res_16m=this.testM.res_16m_7;
 }
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2);
 }
 }
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3);
   }
 }
 }
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3);
   }
 }
 }
 
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_4){
       this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_4);
     }
   }
 }
 }
 
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_4){
       if(this.testM.res_16m_5){
         this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_4){
       if(this.testM.res_16m_5){
         if(this.testM.res_16m_6){
           this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_16m_1){
 if(this.testM.res_16m_2){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_4){
       if(this.testM.res_16m_5){
         if(this.testM.res_16m_6){
           if(this.testM.res_16m_7){
             this.testM.sum_res_16m=Number(this.testM.res_16m_1)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6);
 }
 }
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 if(this.testM.res_16m_5){
 this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_5);
 }
 }
 }
 
 
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 if(this.testM.res_16m_5){
 if(this.testM.res_16m_4){
   this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_4);
 }
 }
 }
 }
 
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 if(this.testM.res_16m_5){
 if(this.testM.res_16m_4){
   if(this.testM.res_16m_3){
     this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 if(this.testM.res_16m_5){
 if(this.testM.res_16m_4){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_2){
       this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_16m_7){
 if(this.testM.res_16m_6){
 if(this.testM.res_16m_5){
 if(this.testM.res_16m_4){
   if(this.testM.res_16m_3){
     if(this.testM.res_16m_2){
       if(this.testM.res_16m_1){
         this.testM.sum_res_16m=Number(this.testM.res_16m_7)+Number(this.testM.res_16m_6)+Number(this.testM.res_16m_5)+Number(this.testM.res_16m_4)+Number(this.testM.res_16m_3)+Number(this.testM.res_16m_2)+Number(this.testM.res_16m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta17(){
   if(this.testM.res_17m_1){
 this.testM.sum_res_17m=this.testM.res_17m_1;
 }
 
 if(this.testM.res_17m_2){
 this.testM.sum_res_17m=this.testM.res_17m_2;
 }
 if(this.testM.res_17m_3){
 this.testM.sum_res_17m=this.testM.res_17m_3;
 }
 if(this.testM.res_17m_4){
 this.testM.sum_res_17m=this.testM.res_17m_4;
 }
 if(this.testM.res_17m_5){
 this.testM.sum_res_17m=this.testM.res_17m_5;
 }
 if(this.testM.res_17m_6){
 this.testM.sum_res_17m=this.testM.res_17m_6;
 }
 if(this.testM.res_17m_7){
 this.testM.sum_res_17m=this.testM.res_17m_7;
 }
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2);
 }
 }
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3);
   }
 }
 }
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3);
   }
 }
 }
 
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_4){
       this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_4);
     }
   }
 }
 }
 
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_4){
       if(this.testM.res_17m_5){
         this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_4){
       if(this.testM.res_17m_5){
         if(this.testM.res_17m_6){
           this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_17m_1){
 if(this.testM.res_17m_2){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_4){
       if(this.testM.res_17m_5){
         if(this.testM.res_17m_6){
           if(this.testM.res_17m_7){
             this.testM.sum_res_17m=Number(this.testM.res_17m_1)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6);
 }
 }
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 if(this.testM.res_17m_5){
 this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_5);
 }
 }
 }
 
 
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 if(this.testM.res_17m_5){
 if(this.testM.res_17m_4){
   this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_4);
 }
 }
 }
 }
 
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 if(this.testM.res_17m_5){
 if(this.testM.res_17m_4){
   if(this.testM.res_17m_3){
     this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 if(this.testM.res_17m_5){
 if(this.testM.res_17m_4){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_2){
       this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_17m_7){
 if(this.testM.res_17m_6){
 if(this.testM.res_17m_5){
 if(this.testM.res_17m_4){
   if(this.testM.res_17m_3){
     if(this.testM.res_17m_2){
       if(this.testM.res_17m_1){
         this.testM.sum_res_17m=Number(this.testM.res_17m_7)+Number(this.testM.res_17m_6)+Number(this.testM.res_17m_5)+Number(this.testM.res_17m_4)+Number(this.testM.res_17m_3)+Number(this.testM.res_17m_2)+Number(this.testM.res_17m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta18(){
   if(this.testM.res_18m_1){
 this.testM.sum_res_18m=this.testM.res_18m_1;
 }
 
 if(this.testM.res_18m_2){
 this.testM.sum_res_18m=this.testM.res_18m_2;
 }
 if(this.testM.res_18m_3){
 this.testM.sum_res_18m=this.testM.res_18m_3;
 }
 if(this.testM.res_18m_4){
 this.testM.sum_res_18m=this.testM.res_18m_4;
 }
 if(this.testM.res_18m_5){
 this.testM.sum_res_18m=this.testM.res_18m_5;
 }
 if(this.testM.res_18m_6){
 this.testM.sum_res_18m=this.testM.res_18m_6;
 }
 if(this.testM.res_18m_7){
 this.testM.sum_res_18m=this.testM.res_18m_7;
 }
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2);
 }
 }
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3);
   }
 }
 }
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3);
   }
 }
 }
 
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_4){
       this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_4);
     }
   }
 }
 }
 
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_4){
       if(this.testM.res_18m_5){
         this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_4){
       if(this.testM.res_18m_5){
         if(this.testM.res_18m_6){
           this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_18m_1){
 if(this.testM.res_18m_2){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_4){
       if(this.testM.res_18m_5){
         if(this.testM.res_18m_6){
           if(this.testM.res_18m_7){
             this.testM.sum_res_18m=Number(this.testM.res_18m_1)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6);
 }
 }
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 if(this.testM.res_18m_5){
 this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_5);
 }
 }
 }
 
 
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 if(this.testM.res_18m_5){
 if(this.testM.res_18m_4){
   this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_4);
 }
 }
 }
 }
 
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 if(this.testM.res_18m_5){
 if(this.testM.res_18m_4){
   if(this.testM.res_18m_3){
     this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 if(this.testM.res_18m_5){
 if(this.testM.res_18m_4){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_2){
       this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_18m_7){
 if(this.testM.res_18m_6){
 if(this.testM.res_18m_5){
 if(this.testM.res_18m_4){
   if(this.testM.res_18m_3){
     if(this.testM.res_18m_2){
       if(this.testM.res_18m_1){
         this.testM.sum_res_18m=Number(this.testM.res_18m_7)+Number(this.testM.res_18m_6)+Number(this.testM.res_18m_5)+Number(this.testM.res_18m_4)+Number(this.testM.res_18m_3)+Number(this.testM.res_18m_2)+Number(this.testM.res_18m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta19(){
   if(this.testM.res_19m_1){
 this.testM.sum_res_19m=this.testM.res_19m_1;
 }
 
 if(this.testM.res_19m_2){
 this.testM.sum_res_19m=this.testM.res_19m_2;
 }
 if(this.testM.res_19m_3){
 this.testM.sum_res_19m=this.testM.res_19m_3;
 }
 if(this.testM.res_19m_4){
 this.testM.sum_res_19m=this.testM.res_19m_4;
 }
 if(this.testM.res_19m_5){
 this.testM.sum_res_19m=this.testM.res_19m_5;
 }
 if(this.testM.res_19m_6){
 this.testM.sum_res_19m=this.testM.res_19m_6;
 }
 if(this.testM.res_19m_7){
 this.testM.sum_res_19m=this.testM.res_19m_7;
 }
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2);
 }
 }
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3);
   }
 }
 }
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3);
   }
 }
 }
 
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_4){
       this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_4);
     }
   }
 }
 }
 
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_4){
       if(this.testM.res_19m_5){
         this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_4){
       if(this.testM.res_19m_5){
         if(this.testM.res_19m_6){
           this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_19m_1){
 if(this.testM.res_19m_2){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_4){
       if(this.testM.res_19m_5){
         if(this.testM.res_19m_6){
           if(this.testM.res_19m_7){
             this.testM.sum_res_19m=Number(this.testM.res_19m_1)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6);
 }
 }
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 if(this.testM.res_19m_5){
 this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_5);
 }
 }
 }
 
 
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 if(this.testM.res_19m_5){
 if(this.testM.res_19m_4){
   this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_4);
 }
 }
 }
 }
 
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 if(this.testM.res_19m_5){
 if(this.testM.res_19m_4){
   if(this.testM.res_19m_3){
     this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 if(this.testM.res_19m_5){
 if(this.testM.res_19m_4){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_2){
       this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_19m_7){
 if(this.testM.res_19m_6){
 if(this.testM.res_19m_5){
 if(this.testM.res_19m_4){
   if(this.testM.res_19m_3){
     if(this.testM.res_19m_2){
       if(this.testM.res_19m_1){
         this.testM.sum_res_19m=Number(this.testM.res_19m_7)+Number(this.testM.res_19m_6)+Number(this.testM.res_19m_5)+Number(this.testM.res_19m_4)+Number(this.testM.res_19m_3)+Number(this.testM.res_19m_2)+Number(this.testM.res_19m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta20(){
   if(this.testM.res_20m_1){
 this.testM.sum_res_20m=this.testM.res_20m_1;
 }
 
 if(this.testM.res_20m_2){
 this.testM.sum_res_20m=this.testM.res_20m_2;
 }
 if(this.testM.res_20m_3){
 this.testM.sum_res_20m=this.testM.res_20m_3;
 }
 if(this.testM.res_20m_4){
 this.testM.sum_res_20m=this.testM.res_20m_4;
 }
 if(this.testM.res_20m_5){
 this.testM.sum_res_20m=this.testM.res_20m_5;
 }
 if(this.testM.res_20m_6){
 this.testM.sum_res_20m=this.testM.res_20m_6;
 }
 if(this.testM.res_20m_7){
 this.testM.sum_res_20m=this.testM.res_20m_7;
 }
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2);
 }
 }
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3);
   }
 }
 }
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3);
   }
 }
 }
 
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_4){
       this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_4);
     }
   }
 }
 }
 
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_4){
       if(this.testM.res_20m_5){
         this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_4){
       if(this.testM.res_20m_5){
         if(this.testM.res_20m_6){
           this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_20m_1){
 if(this.testM.res_20m_2){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_4){
       if(this.testM.res_20m_5){
         if(this.testM.res_20m_6){
           if(this.testM.res_20m_7){
             this.testM.sum_res_20m=Number(this.testM.res_20m_1)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6);
 }
 }
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 if(this.testM.res_20m_5){
 this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_5);
 }
 }
 }
 
 
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 if(this.testM.res_20m_5){
 if(this.testM.res_20m_4){
   this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_4);
 }
 }
 }
 }
 
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 if(this.testM.res_20m_5){
 if(this.testM.res_20m_4){
   if(this.testM.res_20m_3){
     this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 if(this.testM.res_20m_5){
 if(this.testM.res_20m_4){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_2){
       this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_20m_7){
 if(this.testM.res_20m_6){
 if(this.testM.res_20m_5){
 if(this.testM.res_20m_4){
   if(this.testM.res_20m_3){
     if(this.testM.res_20m_2){
       if(this.testM.res_20m_1){
         this.testM.sum_res_20m=Number(this.testM.res_20m_7)+Number(this.testM.res_20m_6)+Number(this.testM.res_20m_5)+Number(this.testM.res_20m_4)+Number(this.testM.res_20m_3)+Number(this.testM.res_20m_2)+Number(this.testM.res_20m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta21(){
   if(this.testM.res_21m_1){
 this.testM.sum_res_21m=this.testM.res_21m_1;
 }
 
 if(this.testM.res_21m_2){
 this.testM.sum_res_21m=this.testM.res_21m_2;
 }
 if(this.testM.res_21m_3){
 this.testM.sum_res_21m=this.testM.res_21m_3;
 }
 if(this.testM.res_21m_4){
 this.testM.sum_res_21m=this.testM.res_21m_4;
 }
 if(this.testM.res_21m_5){
 this.testM.sum_res_21m=this.testM.res_21m_5;
 }
 if(this.testM.res_21m_6){
 this.testM.sum_res_21m=this.testM.res_21m_6;
 }
 if(this.testM.res_21m_7){
 this.testM.sum_res_21m=this.testM.res_21m_7;
 }
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2);
 }
 }
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3);
   }
 }
 }
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3);
   }
 }
 }
 
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_4){
       this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_4);
     }
   }
 }
 }
 
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_4){
       if(this.testM.res_21m_5){
         this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_4){
       if(this.testM.res_21m_5){
         if(this.testM.res_21m_6){
           this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_21m_1){
 if(this.testM.res_21m_2){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_4){
       if(this.testM.res_21m_5){
         if(this.testM.res_21m_6){
           if(this.testM.res_21m_7){
             this.testM.sum_res_21m=Number(this.testM.res_21m_1)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6);
 }
 }
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 if(this.testM.res_21m_5){
 this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_5);
 }
 }
 }
 
 
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 if(this.testM.res_21m_5){
 if(this.testM.res_21m_4){
   this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_4);
 }
 }
 }
 }
 
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 if(this.testM.res_21m_5){
 if(this.testM.res_21m_4){
   if(this.testM.res_21m_3){
     this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 if(this.testM.res_21m_5){
 if(this.testM.res_21m_4){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_2){
       this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_21m_7){
 if(this.testM.res_21m_6){
 if(this.testM.res_21m_5){
 if(this.testM.res_21m_4){
   if(this.testM.res_21m_3){
     if(this.testM.res_21m_2){
       if(this.testM.res_21m_1){
         this.testM.sum_res_21m=Number(this.testM.res_21m_7)+Number(this.testM.res_21m_6)+Number(this.testM.res_21m_5)+Number(this.testM.res_21m_4)+Number(this.testM.res_21m_3)+Number(this.testM.res_21m_2)+Number(this.testM.res_21m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta22(){
   if(this.testM.res_22m_1){
 this.testM.sum_res_22m=this.testM.res_22m_1;
 }
 
 if(this.testM.res_22m_2){
 this.testM.sum_res_22m=this.testM.res_22m_2;
 }
 if(this.testM.res_22m_3){
 this.testM.sum_res_22m=this.testM.res_22m_3;
 }
 if(this.testM.res_22m_4){
 this.testM.sum_res_22m=this.testM.res_22m_4;
 }
 if(this.testM.res_22m_5){
 this.testM.sum_res_22m=this.testM.res_22m_5;
 }
 if(this.testM.res_22m_6){
 this.testM.sum_res_22m=this.testM.res_22m_6;
 }
 if(this.testM.res_22m_7){
 this.testM.sum_res_22m=this.testM.res_22m_7;
 }
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2);
 }
 }
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3);
   }
 }
 }
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3);
   }
 }
 }
 
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_4){
       this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_4);
     }
   }
 }
 }
 
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_4){
       if(this.testM.res_22m_5){
         this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_4){
       if(this.testM.res_22m_5){
         if(this.testM.res_22m_6){
           this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_22m_1){
 if(this.testM.res_22m_2){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_4){
       if(this.testM.res_22m_5){
         if(this.testM.res_22m_6){
           if(this.testM.res_22m_7){
             this.testM.sum_res_22m=Number(this.testM.res_22m_1)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6);
 }
 }
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 if(this.testM.res_22m_5){
 this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_5);
 }
 }
 }
 
 
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 if(this.testM.res_22m_5){
 if(this.testM.res_22m_4){
   this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_4);
 }
 }
 }
 }
 
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 if(this.testM.res_22m_5){
 if(this.testM.res_22m_4){
   if(this.testM.res_22m_3){
     this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 if(this.testM.res_22m_5){
 if(this.testM.res_22m_4){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_2){
       this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_22m_7){
 if(this.testM.res_22m_6){
 if(this.testM.res_22m_5){
 if(this.testM.res_22m_4){
   if(this.testM.res_22m_3){
     if(this.testM.res_22m_2){
       if(this.testM.res_22m_1){
         this.testM.sum_res_22m=Number(this.testM.res_22m_7)+Number(this.testM.res_22m_6)+Number(this.testM.res_22m_5)+Number(this.testM.res_22m_4)+Number(this.testM.res_22m_3)+Number(this.testM.res_22m_2)+Number(this.testM.res_22m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo
 
 sum_pregunta23(){
   if(this.testM.res_23m_1){
 this.testM.sum_res_23m=this.testM.res_23m_1;
 }
 
 if(this.testM.res_23m_2){
 this.testM.sum_res_23m=this.testM.res_23m_2;
 }
 if(this.testM.res_23m_3){
 this.testM.sum_res_23m=this.testM.res_23m_3;
 }
 if(this.testM.res_23m_4){
 this.testM.sum_res_23m=this.testM.res_23m_4;
 }
 if(this.testM.res_23m_5){
 this.testM.sum_res_23m=this.testM.res_23m_5;
 }
 if(this.testM.res_23m_6){
 this.testM.sum_res_23m=this.testM.res_23m_6;
 }
 if(this.testM.res_23m_7){
 this.testM.sum_res_23m=this.testM.res_23m_7;
 }
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2);
 }
 }
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3);
   }
 }
 }
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3);
   }
 }
 }
 
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_4){
       this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_4);
     }
   }
 }
 }
 
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_4){
       if(this.testM.res_23m_5){
         this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_5);
       }
     }
   }
 }
 }
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_4){
       if(this.testM.res_23m_5){
         if(this.testM.res_23m_6){
           this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_6);
         }
       }
     }
   }
 }
 }
 
 if(this.testM.res_23m_1){
 if(this.testM.res_23m_2){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_4){
       if(this.testM.res_23m_5){
         if(this.testM.res_23m_6){
           if(this.testM.res_23m_7){
             this.testM.sum_res_23m=Number(this.testM.res_23m_1)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_7);
           }
         }
       }
     }
   }
 }
 }
 
 //Reversa
 
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6);
 }
 }
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 if(this.testM.res_23m_5){
 this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_5);
 }
 }
 }
 
 
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 if(this.testM.res_23m_5){
 if(this.testM.res_23m_4){
   this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_4);
 }
 }
 }
 }
 
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 if(this.testM.res_23m_5){
 if(this.testM.res_23m_4){
   if(this.testM.res_23m_3){
     this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_3);
   }
 }
 }
 }
 }
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 if(this.testM.res_23m_5){
 if(this.testM.res_23m_4){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_2){
       this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_2);
     }
   }
 }
 }
 }
 }
 
 if(this.testM.res_23m_7){
 if(this.testM.res_23m_6){
 if(this.testM.res_23m_5){
 if(this.testM.res_23m_4){
   if(this.testM.res_23m_3){
     if(this.testM.res_23m_2){
       if(this.testM.res_23m_1){
         this.testM.sum_res_23m=Number(this.testM.res_23m_7)+Number(this.testM.res_23m_6)+Number(this.testM.res_23m_5)+Number(this.testM.res_23m_4)+Number(this.testM.res_23m_3)+Number(this.testM.res_23m_2)+Number(this.testM.res_23m_1);
       }
     }
   }
 }
 }
 }
 }
 }//fin de metodo

  Enviar(){
    console.log(this.testCx);
    console.log(this.testFx);
    console.log(this.testM);

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_1c,
      res_respuesta1 :this.testCx?.res_1c_1,
      res_respuesta2 :this.testCx?.res_1c_2,
      res_respuesta3 :this.testCx?.res_1c_3,
      res_respuesta4 :this.testCx?.res_1c_4,
      res_respuesta5 :this.testCx?.res_1c_5,
      res_respuesta6 :this.testCx?.res_1c_6,
      res_respuesta7 :this.testCx?.res_1c_7,
      res_observacion  :this.testCx?.obvs_1c,
      res_sum :this.testCx?.sum_res_1c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_2c,
      res_respuesta1 :this.testCx?.res_2c_1,
      res_respuesta2 :this.testCx?.res_2c_2,
      res_respuesta3 :this.testCx?.res_2c_3,
      res_respuesta4 :this.testCx?.res_2c_4,
      res_respuesta5 :this.testCx?.res_2c_5,
      res_respuesta6 :this.testCx?.res_2c_6,
      res_respuesta7 :this.testCx?.res_2c_7,
      res_observacion  :this.testCx?.obvs_2c,
      res_sum :this.testCx?.sum_res_2c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_3c,
      res_respuesta1 :this.testCx?.res_3c_1,
      res_respuesta2 :this.testCx?.res_3c_2,
      res_respuesta3 :this.testCx?.res_3c_3,
      res_respuesta4 :this.testCx?.res_3c_4,
      res_respuesta5 :this.testCx?.res_3c_5,
      res_respuesta6 :this.testCx?.res_3c_6,
      res_respuesta7 :this.testCx?.res_3c_7,
      res_observacion  :this.testCx?.obvs_3c,
      res_sum :this.testCx?.sum_res_3c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_4c,
      res_respuesta1 :this.testCx?.res_4c_1,
      res_respuesta2 :this.testCx?.res_4c_2,
      res_respuesta3 :this.testCx?.res_4c_3,
      res_respuesta4 :this.testCx?.res_4c_4,
      res_respuesta5 :this.testCx?.res_4c_5,
      res_respuesta6 :this.testCx?.res_4c_6,
      res_respuesta7 :this.testCx?.res_4c_7,
      res_observacion  :this.testCx?.obvs_4c,
      res_sum :this.testCx?.sum_res_4c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_5c,
      res_respuesta1 :this.testCx?.res_5c_1,
      res_respuesta2 :this.testCx?.res_5c_2,
      res_respuesta3 :this.testCx?.res_5c_3,
      res_respuesta4 :this.testCx?.res_5c_4,
      res_respuesta5 :this.testCx?.res_5c_5,
      res_respuesta6 :this.testCx?.res_5c_6,
      res_respuesta7 :this.testCx?.res_5c_7,
      res_observacion  :this.testCx?.obvs_5c,
      res_sum :this.testCx?.sum_res_5c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_6c,
      res_respuesta1 :this.testCx?.res_6c_1,
      res_respuesta2 :this.testCx?.res_6c_2,
      res_respuesta3 :this.testCx?.res_6c_3,
      res_respuesta4 :this.testCx?.res_6c_4,
      res_respuesta5 :this.testCx?.res_6c_5,
      res_respuesta6 :this.testCx?.res_6c_6,
      res_respuesta7 :this.testCx?.res_6c_7,
      res_observacion  :this.testCx?.obvs_6c,
      res_sum :this.testCx?.sum_res_6c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_7c,
      res_respuesta1 :this.testCx?.res_7c_1,
      res_respuesta2 :this.testCx?.res_7c_2,
      res_respuesta3 :this.testCx?.res_7c_3,
      res_respuesta4 :this.testCx?.res_7c_4,
      res_respuesta5 :this.testCx?.res_7c_5,
      res_respuesta6 :this.testCx?.res_7c_6,
      res_respuesta7 :this.testCx?.res_7c_7,
      res_observacion  :this.testCx?.obvs_7c,
      res_sum :this.testCx?.sum_res_7c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_8c,
      res_respuesta1 :this.testCx?.res_8c_1,
      res_respuesta2 :this.testCx?.res_8c_2,
      res_respuesta3 :this.testCx?.res_8c_3,
      res_respuesta4 :this.testCx?.res_8c_4,
      res_respuesta5 :this.testCx?.res_8c_5,
      res_respuesta6 :this.testCx?.res_8c_6,
      res_respuesta7 :this.testCx?.res_8c_7,
      res_observacion  :this.testCx?.obvs_8c,
      res_sum :this.testCx?.sum_res_8c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_9c,
      res_respuesta1 :this.testCx?.res_9c_1,
      res_respuesta2 :this.testCx?.res_9c_2,
      res_respuesta3 :this.testCx?.res_9c_3,
      res_respuesta4 :this.testCx?.res_9c_4,
      res_respuesta5 :this.testCx?.res_9c_5,
      res_respuesta6 :this.testCx?.res_9c_6,
      res_respuesta7 :this.testCx?.res_9c_7,
      res_observacion  :this.testCx?.obvs_9c,
      res_sum :this.testCx?.sum_res_9c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_10c,
      res_respuesta1 :this.testCx?.res_10c_1,
      res_respuesta2 :this.testCx?.res_10c_2,
      res_respuesta3 :this.testCx?.res_10c_3,
      res_respuesta4 :this.testCx?.res_10c_4,
      res_respuesta5 :this.testCx?.res_10c_5,
      res_respuesta6 :this.testCx?.res_10c_6,
      res_respuesta7 :this.testCx?.res_10c_7,
      res_observacion  :this.testCx?.obvs_10c,
      res_sum :this.testCx?.sum_res_10c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_11c,
      res_respuesta1 :this.testCx?.res_11c_1,
      res_respuesta2 :this.testCx?.res_11c_2,
      res_respuesta3 :this.testCx?.res_11c_3,
      res_respuesta4 :this.testCx?.res_11c_4,
      res_respuesta5 :this.testCx?.res_11c_5,
      res_respuesta6 :this.testCx?.res_11c_6,
      res_respuesta7 :this.testCx?.res_11c_7,
      res_observacion  :this.testCx?.obvs_11c,
      res_sum :this.testCx?.sum_res_11c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_12c,
      res_respuesta1 :this.testCx?.res_12c_1,
      res_respuesta2 :this.testCx?.res_12c_2,
      res_respuesta3 :this.testCx?.res_12c_3,
      res_respuesta4 :this.testCx?.res_12c_4,
      res_respuesta5 :this.testCx?.res_12c_5,
      res_respuesta6 :this.testCx?.res_12c_6,
      res_respuesta7 :this.testCx?.res_12c_7,
      res_observacion  :this.testCx?.obvs_12c,
      res_sum :this.testCx?.sum_res_12c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_13c,
      res_respuesta1 :this.testCx?.res_13c_1,
      res_respuesta2 :this.testCx?.res_13c_2,
      res_respuesta3 :this.testCx?.res_13c_3,
      res_respuesta4 :this.testCx?.res_13c_4,
      res_respuesta5 :this.testCx?.res_13c_5,
      res_respuesta6 :this.testCx?.res_13c_6,
      res_respuesta7 :this.testCx?.res_13c_7,
      res_observacion  :this.testCx?.obvs_13c,
      res_sum :this.testCx?.sum_res_13c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_14c,
      res_respuesta1 :this.testCx?.res_14c_1,
      res_respuesta2 :this.testCx?.res_14c_2,
      res_respuesta3 :this.testCx?.res_14c_3,
      res_respuesta4 :this.testCx?.res_14c_4,
      res_respuesta5 :this.testCx?.res_14c_5,
      res_respuesta6 :this.testCx?.res_14c_6,
      res_respuesta7 :this.testCx?.res_14c_7,
      res_observacion  :this.testCx?.obvs_14c,
      res_sum :this.testCx?.sum_res_14c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_15c,
      res_respuesta1 :this.testCx?.res_15c_1,
      res_respuesta2 :this.testCx?.res_15c_2,
      res_respuesta3 :this.testCx?.res_15c_3,
      res_respuesta4 :this.testCx?.res_15c_4,
      res_respuesta5 :this.testCx?.res_15c_5,
      res_respuesta6 :this.testCx?.res_15c_6,
      res_respuesta7 :this.testCx?.res_15c_7,
      res_observacion  :this.testCx?.obvs_15c,
      res_sum :this.testCx?.sum_res_15c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_16c,
      res_respuesta1 :this.testCx?.res_16c_1,
      res_respuesta2 :this.testCx?.res_16c_2,
      res_respuesta3 :this.testCx?.res_16c_3,
      res_respuesta4 :this.testCx?.res_16c_4,
      res_respuesta5 :this.testCx?.res_16c_5,
      res_respuesta6 :this.testCx?.res_16c_6,
      res_respuesta7 :this.testCx?.res_16c_7,
      res_observacion  :this.testCx?.obvs_16c,
      res_sum :this.testCx?.sum_res_16c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_17c,
      res_respuesta1 :this.testCx?.res_17c_1,
      res_respuesta2 :this.testCx?.res_17c_2,
      res_respuesta3 :this.testCx?.res_17c_3,
      res_respuesta4 :this.testCx?.res_17c_4,
      res_respuesta5 :this.testCx?.res_17c_5,
      res_respuesta6 :this.testCx?.res_17c_6,
      res_respuesta7 :this.testCx?.res_17c_7,
      res_observacion  :this.testCx?.obvs_17c,
      res_sum :this.testCx?.sum_res_17c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_18c,
      res_respuesta1 :this.testCx?.res_18c_1,
      res_respuesta2 :this.testCx?.res_18c_2,
      res_respuesta3 :this.testCx?.res_18c_3,
      res_respuesta4 :this.testCx?.res_18c_4,
      res_respuesta5 :this.testCx?.res_18c_5,
      res_respuesta6 :this.testCx?.res_18c_6,
      res_respuesta7 :this.testCx?.res_18c_7,
      res_observacion  :this.testCx?.obvs_18c,
      res_sum :this.testCx?.sum_res_18c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_19c,
      res_respuesta1 :this.testCx?.res_19c_1,
      res_respuesta2 :this.testCx?.res_19c_2,
      res_respuesta3 :this.testCx?.res_19c_3,
      res_respuesta4 :this.testCx?.res_19c_4,
      res_respuesta5 :this.testCx?.res_19c_5,
      res_respuesta6 :this.testCx?.res_19c_6,
      res_respuesta7 :this.testCx?.res_19c_7,
      res_observacion  :this.testCx?.obvs_19c,
      res_sum :this.testCx?.sum_res_1c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_20c,
      res_respuesta1 :this.testCx?.res_20c_1,
      res_respuesta2 :this.testCx?.res_20c_2,
      res_respuesta3 :this.testCx?.res_20c_3,
      res_respuesta4 :this.testCx?.res_20c_4,
      res_respuesta5 :this.testCx?.res_20c_5,
      res_respuesta6 :this.testCx?.res_20c_6,
      res_respuesta7 :this.testCx?.res_20c_7,
      res_observacion  :this.testCx?.obvs_20c,
      res_sum :this.testCx?.sum_res_20c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_21c,
      res_respuesta1 :this.testCx?.res_21c_1,
      res_respuesta2 :this.testCx?.res_21c_2,
      res_respuesta3 :this.testCx?.res_21c_3,
      res_respuesta4 :this.testCx?.res_21c_4,
      res_respuesta5 :this.testCx?.res_21c_5,
      res_respuesta6 :this.testCx?.res_21c_6,
      res_respuesta7 :this.testCx?.res_21c_7,
      res_observacion  :this.testCx?.obvs_21c,
      res_sum :this.testCx?.sum_res_21c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_22c,
      res_respuesta1 :this.testCx?.res_22c_1,
      res_respuesta2 :this.testCx?.res_22c_2,
      res_respuesta3 :this.testCx?.res_22c_3,
      res_respuesta4 :this.testCx?.res_22c_4,
      res_respuesta5 :this.testCx?.res_22c_5,
      res_respuesta6 :this.testCx?.res_22c_6,
      res_respuesta7 :this.testCx?.res_22c_7,
      res_observacion  :this.testCx?.obvs_22c,
      res_sum :this.testCx?.sum_res_22c,
      res_id_paciente :this.id,
    });

    this.modelArrayC.push({
      res_pregunta:this.testCx.pregunta_23c,
      res_respuesta1 :this.testCx?.res_23c_1,
      res_respuesta2 :this.testCx?.res_23c_2,
      res_respuesta3 :this.testCx?.res_23c_3,
      res_respuesta4 :this.testCx?.res_23c_4,
      res_respuesta5 :this.testCx?.res_23c_5,
      res_respuesta6 :this.testCx?.res_23c_6,
      res_respuesta7 :this.testCx?.res_23c_7,
      res_observacion  :this.testCx?.obvs_23c,
      res_sum :this.testCx?.sum_res_23c,
      res_id_paciente :this.id,
    });


    ///Array F
    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_1f,
      res_respuesta1 :this.testFx?.res_1f_1,
      res_respuesta2 :this.testFx?.res_1f_2,
      res_respuesta3 :this.testFx?.res_1f_3,
      res_respuesta4 :this.testFx?.res_1f_4,
      res_respuesta5 :this.testFx?.res_1f_5,
      res_respuesta6 :this.testFx?.res_1f_6,
      res_respuesta7 :this.testFx?.res_1f_7,
      res_respuesta8 :this.testFx?.res_1f_8,
      res_respuesta9 :this.testFx?.res_1f_9,
      res_respuesta10 :this.testFx?.res_1f_10,
      res_observacion  :this.testFx?.obvs_1f,
      res_sum :this.testFx?.sum_res_1f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_2f,
      res_respuesta1 :this.testFx?.res_2f_1,
      res_respuesta2 :this.testFx?.res_2f_2,
      res_respuesta3 :this.testFx?.res_2f_3,
      res_respuesta4 :this.testFx?.res_2f_4,
      res_respuesta5 :this.testFx?.res_2f_5,
      res_respuesta6 :this.testFx?.res_2f_6,
      res_respuesta7 :this.testFx?.res_2f_7,
      res_respuesta8 :this.testFx?.res_2f_8,
      res_respuesta9 :this.testFx?.res_2f_9,
      res_respuesta10 :this.testFx?.res_2f_10,
      res_observacion  :this.testFx?.obvs_2f,
      res_sum :this.testFx?.sum_res_2f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_3f,
      res_respuesta1 :this.testFx?.res_3f_1,
      res_respuesta2 :this.testFx?.res_3f_2,
      res_respuesta3 :this.testFx?.res_3f_3,
      res_respuesta4 :this.testFx?.res_3f_4,
      res_respuesta5 :this.testFx?.res_3f_5,
      res_respuesta6 :this.testFx?.res_3f_6,
      res_respuesta7 :this.testFx?.res_3f_7,
      res_respuesta8 :this.testFx?.res_3f_8,
      res_respuesta9 :this.testFx?.res_3f_9,
      res_respuesta10 :this.testFx?.res_3f_10,
      res_observacion  :this.testFx?.obvs_3f,
      res_sum :this.testFx?.sum_res_3f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_4f,
      res_respuesta1 :this.testFx?.res_4f_1,
      res_respuesta2 :this.testFx?.res_4f_2,
      res_respuesta3 :this.testFx?.res_4f_3,
      res_respuesta4 :this.testFx?.res_4f_4,
      res_respuesta5 :this.testFx?.res_4f_5,
      res_respuesta6 :this.testFx?.res_4f_6,
      res_respuesta7 :this.testFx?.res_4f_7,
      res_respuesta8 :this.testFx?.res_4f_8,
      res_respuesta9 :this.testFx?.res_4f_9,
      res_respuesta10 :this.testFx?.res_4f_10,
      res_observacion  :this.testFx?.obvs_4f,
      res_sum :this.testFx?.sum_res_4f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_5f,
      res_respuesta1 :this.testFx?.res_5f_1,
      res_respuesta2 :this.testFx?.res_5f_2,
      res_respuesta3 :this.testFx?.res_5f_3,
      res_respuesta4 :this.testFx?.res_5f_4,
      res_respuesta5 :this.testFx?.res_5f_5,
      res_respuesta6 :this.testFx?.res_5f_6,
      res_respuesta7 :this.testFx?.res_5f_7,
      res_respuesta8 :this.testFx?.res_5f_8,
      res_respuesta9 :this.testFx?.res_5f_9,
      res_respuesta10 :this.testFx?.res_5f_10,
      res_observacion  :this.testFx?.obvs_5f,
      res_sum :this.testFx?.sum_res_5f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_6f,
      res_respuesta1 :this.testFx?.res_6f_1,
      res_respuesta2 :this.testFx?.res_6f_2,
      res_respuesta3 :this.testFx?.res_6f_3,
      res_respuesta4 :this.testFx?.res_6f_4,
      res_respuesta5 :this.testFx?.res_6f_5,
      res_respuesta6 :this.testFx?.res_6f_6,
      res_respuesta7 :this.testFx?.res_6f_7,
      res_respuesta8 :this.testFx?.res_6f_8,
      res_respuesta9 :this.testFx?.res_6f_9,
      res_respuesta10 :this.testFx?.res_6f_10,
      res_observacion  :this.testFx?.obvs_6f,
      res_sum :this.testFx?.sum_res_6f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_7f,
      res_respuesta1 :this.testFx?.res_7f_1,
      res_respuesta2 :this.testFx?.res_7f_2,
      res_respuesta3 :this.testFx?.res_7f_3,
      res_respuesta4 :this.testFx?.res_7f_4,
      res_respuesta5 :this.testFx?.res_7f_5,
      res_respuesta6 :this.testFx?.res_7f_6,
      res_respuesta7 :this.testFx?.res_7f_7,
      res_respuesta8 :this.testFx?.res_7f_8,
      res_respuesta9 :this.testFx?.res_7f_9,
      res_respuesta10 :this.testFx?.res_7f_10,
      res_observacion  :this.testFx?.obvs_7f,
      res_sum :this.testFx?.sum_res_7f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_8f,
      res_respuesta1 :this.testFx?.res_8f_1,
      res_respuesta2 :this.testFx?.res_8f_2,
      res_respuesta3 :this.testFx?.res_8f_3,
      res_respuesta4 :this.testFx?.res_8f_4,
      res_respuesta5 :this.testFx?.res_8f_5,
      res_respuesta6 :this.testFx?.res_8f_6,
      res_respuesta7 :this.testFx?.res_8f_7,
      res_respuesta8 :this.testFx?.res_8f_8,
      res_respuesta9 :this.testFx?.res_8f_9,
      res_respuesta10 :this.testFx?.res_8f_10,
      res_observacion  :this.testFx?.obvs_8f,
      res_sum :this.testFx?.sum_res_8f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_9f,
      res_respuesta1 :this.testFx?.res_9f_1,
      res_respuesta2 :this.testFx?.res_9f_2,
      res_respuesta3 :this.testFx?.res_9f_3,
      res_respuesta4 :this.testFx?.res_9f_4,
      res_respuesta5 :this.testFx?.res_9f_5,
      res_respuesta6 :this.testFx?.res_9f_6,
      res_respuesta7 :this.testFx?.res_9f_7,
      res_respuesta8 :this.testFx?.res_9f_8,
      res_respuesta9 :this.testFx?.res_9f_9,
      res_respuesta10 :this.testFx?.res_9f_10,
      res_observacion  :this.testFx?.obvs_9f,
      res_sum :this.testFx?.sum_res_9f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_10f,
      res_respuesta1 :this.testFx?.res_10f_1,
      res_respuesta2 :this.testFx?.res_10f_2,
      res_respuesta3 :this.testFx?.res_10f_3,
      res_respuesta4 :this.testFx?.res_10f_4,
      res_respuesta5 :this.testFx?.res_10f_5,
      res_respuesta6 :this.testFx?.res_10f_6,
      res_respuesta7 :this.testFx?.res_10f_7,
      res_respuesta8 :this.testFx?.res_10f_8,
      res_respuesta9 :this.testFx?.res_10f_9,
      res_respuesta10 :this.testFx?.res_10f_10,
      res_observacion  :this.testFx?.obvs_10f,
      res_sum :this.testFx?.sum_res_10f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_11f,
      res_respuesta1 :this.testFx?.res_11f_1,
      res_respuesta2 :this.testFx?.res_11f_2,
      res_respuesta3 :this.testFx?.res_11f_3,
      res_respuesta4 :this.testFx?.res_11f_4,
      res_respuesta5 :this.testFx?.res_11f_5,
      res_respuesta6 :this.testFx?.res_11f_6,
      res_respuesta7 :this.testFx?.res_11f_7,
      res_respuesta8 :this.testFx?.res_11f_8,
      res_respuesta9 :this.testFx?.res_11f_9,
      res_respuesta10 :this.testFx?.res_11f_10,
      res_observacion  :this.testFx?.obvs_11f,
      res_sum :this.testFx?.sum_res_11f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_12f,
      res_respuesta1 :this.testFx?.res_12f_1,
      res_respuesta2 :this.testFx?.res_12f_2,
      res_respuesta3 :this.testFx?.res_12f_3,
      res_respuesta4 :this.testFx?.res_12f_4,
      res_respuesta5 :this.testFx?.res_12f_5,
      res_respuesta6 :this.testFx?.res_12f_6,
      res_respuesta7 :this.testFx?.res_12f_7,
      res_respuesta8 :this.testFx?.res_12f_8,
      res_respuesta9 :this.testFx?.res_12f_9,
      res_respuesta10 :this.testFx?.res_12f_10,
      res_observacion  :this.testFx?.obvs_12f,
      res_sum :this.testFx?.sum_res_12f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_13f,
      res_respuesta1 :this.testFx?.res_13f_1,
      res_respuesta2 :this.testFx?.res_13f_2,
      res_respuesta3 :this.testFx?.res_13f_3,
      res_respuesta4 :this.testFx?.res_13f_4,
      res_respuesta5 :this.testFx?.res_13f_5,
      res_respuesta6 :this.testFx?.res_13f_6,
      res_respuesta7 :this.testFx?.res_13f_7,
      res_respuesta8 :this.testFx?.res_13f_8,
      res_respuesta9 :this.testFx?.res_13f_9,
      res_respuesta10 :this.testFx?.res_13f_10,
      res_observacion  :this.testFx?.obvs_13f,
      res_sum :this.testFx?.sum_res_13f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_14f,
      res_respuesta1 :this.testFx?.res_14f_1,
      res_respuesta2 :this.testFx?.res_14f_2,
      res_respuesta3 :this.testFx?.res_14f_3,
      res_respuesta4 :this.testFx?.res_14f_4,
      res_respuesta5 :this.testFx?.res_14f_5,
      res_respuesta6 :this.testFx?.res_14f_6,
      res_respuesta7 :this.testFx?.res_14f_7,
      res_respuesta8 :this.testFx?.res_14f_8,
      res_respuesta9 :this.testFx?.res_14f_9,
      res_respuesta10 :this.testFx?.res_14f_10,
      res_observacion  :this.testFx?.obvs_14f,
      res_sum :this.testFx?.sum_res_14f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_15f,
      res_respuesta1 :this.testFx?.res_15f_1,
      res_respuesta2 :this.testFx?.res_15f_2,
      res_respuesta3 :this.testFx?.res_15f_3,
      res_respuesta4 :this.testFx?.res_15f_4,
      res_respuesta5 :this.testFx?.res_15f_5,
      res_respuesta6 :this.testFx?.res_15f_6,
      res_respuesta7 :this.testFx?.res_15f_7,
      res_respuesta8 :this.testFx?.res_15f_8,
      res_respuesta9 :this.testFx?.res_15f_9,
      res_respuesta10 :this.testFx?.res_15f_10,
      res_observacion  :this.testFx?.obvs_15f,
      res_sum :this.testFx?.sum_res_15f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_16f,
      res_respuesta1 :this.testFx?.res_16f_1,
      res_respuesta2 :this.testFx?.res_16f_2,
      res_respuesta3 :this.testFx?.res_16f_3,
      res_respuesta4 :this.testFx?.res_16f_4,
      res_respuesta5 :this.testFx?.res_16f_5,
      res_respuesta6 :this.testFx?.res_16f_6,
      res_respuesta7 :this.testFx?.res_16f_7,
      res_respuesta8 :this.testFx?.res_16f_8,
      res_respuesta9 :this.testFx?.res_16f_9,
      res_respuesta10 :this.testFx?.res_16f_10,
      res_observacion  :this.testFx?.obvs_16f,
      res_sum :this.testFx?.sum_res_16f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_17f,
      res_respuesta1 :this.testFx?.res_17f_1,
      res_respuesta2 :this.testFx?.res_17f_2,
      res_respuesta3 :this.testFx?.res_17f_3,
      res_respuesta4 :this.testFx?.res_17f_4,
      res_respuesta5 :this.testFx?.res_17f_5,
      res_respuesta6 :this.testFx?.res_17f_6,
      res_respuesta7 :this.testFx?.res_17f_7,
      res_respuesta8 :this.testFx?.res_17f_8,
      res_respuesta9 :this.testFx?.res_17f_9,
      res_respuesta10 :this.testFx?.res_17f_10,
      res_observacion  :this.testFx?.obvs_17f,
      res_sum :this.testFx?.sum_res_17f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_18f,
      res_respuesta1 :this.testFx?.res_18f_1,
      res_respuesta2 :this.testFx?.res_18f_2,
      res_respuesta3 :this.testFx?.res_18f_3,
      res_respuesta4 :this.testFx?.res_18f_4,
      res_respuesta5 :this.testFx?.res_18f_5,
      res_respuesta6 :this.testFx?.res_18f_6,
      res_respuesta7 :this.testFx?.res_18f_7,
      res_respuesta8 :this.testFx?.res_18f_8,
      res_respuesta9 :this.testFx?.res_18f_9,
      res_respuesta10 :this.testFx?.res_18f_10,
      res_observacion  :this.testFx?.obvs_18f,
      res_sum :this.testFx?.sum_res_18f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_19f,
      res_respuesta1 :this.testFx?.res_19f_1,
      res_respuesta2 :this.testFx?.res_19f_2,
      res_respuesta3 :this.testFx?.res_19f_3,
      res_respuesta4 :this.testFx?.res_19f_4,
      res_respuesta5 :this.testFx?.res_19f_5,
      res_respuesta6 :this.testFx?.res_19f_6,
      res_respuesta7 :this.testFx?.res_19f_7,
      res_respuesta8 :this.testFx?.res_19f_8,
      res_respuesta9 :this.testFx?.res_19f_9,
      res_respuesta10 :this.testFx?.res_19f_10,
      res_observacion  :this.testFx?.obvs_19f,
      res_sum :this.testFx?.sum_res_19f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_20f,
      res_respuesta1 :this.testFx?.res_20f_1,
      res_respuesta2 :this.testFx?.res_20f_2,
      res_respuesta3 :this.testFx?.res_20f_3,
      res_respuesta4 :this.testFx?.res_20f_4,
      res_respuesta5 :this.testFx?.res_20f_5,
      res_respuesta6 :this.testFx?.res_20f_6,
      res_respuesta7 :this.testFx?.res_20f_7,
      res_respuesta8 :this.testFx?.res_20f_8,
      res_respuesta9 :this.testFx?.res_20f_9,
      res_respuesta10 :this.testFx?.res_20f_10,
      res_observacion  :this.testFx?.obvs_20f,
      res_sum :this.testFx?.sum_res_20f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_21f,
      res_respuesta1 :this.testFx?.res_21f_1,
      res_respuesta2 :this.testFx?.res_21f_2,
      res_respuesta3 :this.testFx?.res_21f_3,
      res_respuesta4 :this.testFx?.res_21f_4,
      res_respuesta5 :this.testFx?.res_21f_5,
      res_respuesta6 :this.testFx?.res_21f_6,
      res_respuesta7 :this.testFx?.res_21f_7,
      res_respuesta8 :this.testFx?.res_21f_8,
      res_respuesta9 :this.testFx?.res_21f_9,
      res_respuesta10 :this.testFx?.res_21f_10,
      res_observacion  :this.testFx?.obvs_21f,
      res_sum :this.testFx?.sum_res_21f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_22f,
      res_respuesta1 :this.testFx?.res_22f_1,
      res_respuesta2 :this.testFx?.res_22f_2,
      res_respuesta3 :this.testFx?.res_22f_3,
      res_respuesta4 :this.testFx?.res_22f_4,
      res_respuesta5 :this.testFx?.res_22f_5,
      res_respuesta6 :this.testFx?.res_22f_6,
      res_respuesta7 :this.testFx?.res_22f_7,
      res_respuesta8 :this.testFx?.res_22f_8,
      res_respuesta9 :this.testFx?.res_22f_9,
      res_respuesta10 :this.testFx?.res_22f_10,
      res_observacion  :this.testFx?.obvs_22f,
      res_sum :this.testFx?.sum_res_22f,
      res_id_paciente :this.id,
    });

    this.modelArrayF.push({
      res_pregunta:this.testFx.pregunta_23f,
      res_respuesta1 :this.testFx?.res_23f_1,
      res_respuesta2 :this.testFx?.res_23f_2,
      res_respuesta3 :this.testFx?.res_23f_3,
      res_respuesta4 :this.testFx?.res_23f_4,
      res_respuesta5 :this.testFx?.res_23f_5,
      res_respuesta6 :this.testFx?.res_23f_6,
      res_respuesta7 :this.testFx?.res_23f_7,
      res_respuesta8 :this.testFx?.res_23f_8,
      res_respuesta9 :this.testFx?.res_23f_9,
      res_respuesta10 :this.testFx?.res_23f_10,
      res_observacion  :this.testFx?.obvs_23f,
      res_sum :this.testFx?.sum_res_23f,
      res_id_paciente :this.id,
    });

    ///Array M

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_1m,
      res_respuesta1 :this.testM?.res_1m_1,
      res_respuesta2 :this.testM?.res_1m_2,
      res_respuesta3 :this.testM?.res_1m_3,
      res_respuesta4 :this.testM?.res_1m_4,
      res_respuesta5 :this.testM?.res_1m_5,
      res_respuesta6 :this.testM?.res_1m_6,
      res_respuesta7 :this.testM?.res_1m_7,
      res_observacion  :this.testM?.obvs_1m,
      res_sum :this.testM?.sum_res_1m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_2m,
      res_respuesta1 :this.testM?.res_2m_1,
      res_respuesta2 :this.testM?.res_2m_2,
      res_respuesta3 :this.testM?.res_2m_3,
      res_respuesta4 :this.testM?.res_2m_4,
      res_respuesta5 :this.testM?.res_2m_5,
      res_respuesta6 :this.testM?.res_2m_6,
      res_respuesta7 :this.testM?.res_2m_7,
      res_observacion  :this.testM?.obvs_2m,
      res_sum :this.testM?.sum_res_2m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_3m,
      res_respuesta1 :this.testM?.res_3m_1,
      res_respuesta2 :this.testM?.res_3m_2,
      res_respuesta3 :this.testM?.res_3m_3,
      res_respuesta4 :this.testM?.res_3m_4,
      res_respuesta5 :this.testM?.res_3m_5,
      res_respuesta6 :this.testM?.res_3m_6,
      res_respuesta7 :this.testM?.res_3m_7,
      res_observacion  :this.testM?.obvs_3m,
      res_sum :this.testM?.sum_res_3m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_4m,
      res_respuesta1 :this.testM?.res_4m_1,
      res_respuesta2 :this.testM?.res_4m_2,
      res_respuesta3 :this.testM?.res_4m_3,
      res_respuesta4 :this.testM?.res_4m_4,
      res_respuesta5 :this.testM?.res_4m_5,
      res_respuesta6 :this.testM?.res_4m_6,
      res_respuesta7 :this.testM?.res_4m_7,
      res_observacion  :this.testM?.obvs_4m,
      res_sum :this.testM?.sum_res_4m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_5m,
      res_respuesta1 :this.testM?.res_5m_1,
      res_respuesta2 :this.testM?.res_5m_2,
      res_respuesta3 :this.testM?.res_5m_3,
      res_respuesta4 :this.testM?.res_5m_4,
      res_respuesta5 :this.testM?.res_5m_5,
      res_respuesta6 :this.testM?.res_5m_6,
      res_respuesta7 :this.testM?.res_5m_7,
      res_observacion  :this.testM?.obvs_5m,
      res_sum :this.testM?.sum_res_5m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_6m,
      res_respuesta1 :this.testM?.res_6m_1,
      res_respuesta2 :this.testM?.res_6m_2,
      res_respuesta3 :this.testM?.res_6m_3,
      res_respuesta4 :this.testM?.res_6m_4,
      res_respuesta5 :this.testM?.res_6m_5,
      res_respuesta6 :this.testM?.res_6m_6,
      res_respuesta7 :this.testM?.res_6m_7,
      res_observacion  :this.testM?.obvs_6m,
      res_sum :this.testM?.sum_res_6m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_7m,
      res_respuesta1 :this.testM?.res_7m_1,
      res_respuesta2 :this.testM?.res_7m_2,
      res_respuesta3 :this.testM?.res_7m_3,
      res_respuesta4 :this.testM?.res_7m_4,
      res_respuesta5 :this.testM?.res_7m_5,
      res_respuesta6 :this.testM?.res_7m_6,
      res_respuesta7 :this.testM?.res_7m_7,
      res_observacion  :this.testM?.obvs_7m,
      res_sum :this.testM?.sum_res_7m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_8m,
      res_respuesta1 :this.testM?.res_8m_1,
      res_respuesta2 :this.testM?.res_8m_2,
      res_respuesta3 :this.testM?.res_8m_3,
      res_respuesta4 :this.testM?.res_8m_4,
      res_respuesta5 :this.testM?.res_8m_5,
      res_respuesta6 :this.testM?.res_8m_6,
      res_respuesta7 :this.testM?.res_8m_7,
      res_observacion  :this.testM?.obvs_8m,
      res_sum :this.testM?.sum_res_8m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_9m,
      res_respuesta1 :this.testM?.res_9m_1,
      res_respuesta2 :this.testM?.res_9m_2,
      res_respuesta3 :this.testM?.res_9m_3,
      res_respuesta4 :this.testM?.res_9m_4,
      res_respuesta5 :this.testM?.res_9m_5,
      res_respuesta6 :this.testM?.res_9m_6,
      res_respuesta7 :this.testM?.res_9m_7,
      res_observacion  :this.testM?.obvs_9m,
      res_sum :this.testM?.sum_res_9m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_10m,
      res_respuesta1 :this.testM?.res_10m_1,
      res_respuesta2 :this.testM?.res_10m_2,
      res_respuesta3 :this.testM?.res_10m_3,
      res_respuesta4 :this.testM?.res_10m_4,
      res_respuesta5 :this.testM?.res_10m_5,
      res_respuesta6 :this.testM?.res_10m_6,
      res_respuesta7 :this.testM?.res_10m_7,
      res_observacion  :this.testM?.obvs_10m,
      res_sum :this.testM?.sum_res_10m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_11m,
      res_respuesta1 :this.testM?.res_11m_1,
      res_respuesta2 :this.testM?.res_11m_2,
      res_respuesta3 :this.testM?.res_11m_3,
      res_respuesta4 :this.testM?.res_11m_4,
      res_respuesta5 :this.testM?.res_11m_5,
      res_respuesta6 :this.testM?.res_11m_6,
      res_respuesta7 :this.testM?.res_11m_7,
      res_observacion  :this.testM?.obvs_11m,
      res_sum :this.testM?.sum_res_11m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_12m,
      res_respuesta1 :this.testM?.res_12m_1,
      res_respuesta2 :this.testM?.res_12m_2,
      res_respuesta3 :this.testM?.res_12m_3,
      res_respuesta4 :this.testM?.res_12m_4,
      res_respuesta5 :this.testM?.res_12m_5,
      res_respuesta6 :this.testM?.res_12m_6,
      res_respuesta7 :this.testM?.res_12m_7,
      res_observacion  :this.testM?.obvs_12m,
      res_sum :this.testM?.sum_res_12m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_13m,
      res_respuesta1 :this.testM?.res_13m_1,
      res_respuesta2 :this.testM?.res_13m_2,
      res_respuesta3 :this.testM?.res_13m_3,
      res_respuesta4 :this.testM?.res_13m_4,
      res_respuesta5 :this.testM?.res_13m_5,
      res_respuesta6 :this.testM?.res_13m_6,
      res_respuesta7 :this.testM?.res_13m_7,
      res_observacion  :this.testM?.obvs_13m,
      res_sum :this.testM?.sum_res_13m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_14m,
      res_respuesta1 :this.testM?.res_14m_1,
      res_respuesta2 :this.testM?.res_14m_2,
      res_respuesta3 :this.testM?.res_14m_3,
      res_respuesta4 :this.testM?.res_14m_4,
      res_respuesta5 :this.testM?.res_14m_5,
      res_respuesta6 :this.testM?.res_14m_6,
      res_respuesta7 :this.testM?.res_14m_7,
      res_observacion  :this.testM?.obvs_14m,
      res_sum :this.testM?.sum_res_14m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_15m,
      res_respuesta1 :this.testM?.res_15m_1,
      res_respuesta2 :this.testM?.res_15m_2,
      res_respuesta3 :this.testM?.res_15m_3,
      res_respuesta4 :this.testM?.res_15m_4,
      res_respuesta5 :this.testM?.res_15m_5,
      res_respuesta6 :this.testM?.res_15m_6,
      res_respuesta7 :this.testM?.res_15m_7,
      res_observacion  :this.testM?.obvs_15m,
      res_sum :this.testM?.sum_res_15m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_16m,
      res_respuesta1 :this.testM?.res_16m_1,
      res_respuesta2 :this.testM?.res_16m_2,
      res_respuesta3 :this.testM?.res_16m_3,
      res_respuesta4 :this.testM?.res_16m_4,
      res_respuesta5 :this.testM?.res_16m_5,
      res_respuesta6 :this.testM?.res_16m_6,
      res_respuesta7 :this.testM?.res_16m_7,
      res_observacion  :this.testM?.obvs_16m,
      res_sum :this.testM?.sum_res_16m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_17m,
      res_respuesta1 :this.testM?.res_17m_1,
      res_respuesta2 :this.testM?.res_17m_2,
      res_respuesta3 :this.testM?.res_17m_3,
      res_respuesta4 :this.testM?.res_17m_4,
      res_respuesta5 :this.testM?.res_17m_5,
      res_respuesta6 :this.testM?.res_17m_6,
      res_respuesta7 :this.testM?.res_17m_7,
      res_observacion  :this.testM?.obvs_17m,
      res_sum :this.testM?.sum_res_17m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_18m,
      res_respuesta1 :this.testM?.res_18m_1,
      res_respuesta2 :this.testM?.res_18m_2,
      res_respuesta3 :this.testM?.res_18m_3,
      res_respuesta4 :this.testM?.res_18m_4,
      res_respuesta5 :this.testM?.res_18m_5,
      res_respuesta6 :this.testM?.res_18m_6,
      res_respuesta7 :this.testM?.res_18m_7,
      res_observacion  :this.testM?.obvs_18m,
      res_sum :this.testM?.sum_res_18m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_19m,
      res_respuesta1 :this.testM?.res_19m_1,
      res_respuesta2 :this.testM?.res_19m_2,
      res_respuesta3 :this.testM?.res_19m_3,
      res_respuesta4 :this.testM?.res_19m_4,
      res_respuesta5 :this.testM?.res_19m_5,
      res_respuesta6 :this.testM?.res_19m_6,
      res_respuesta7 :this.testM?.res_19m_7,
      res_observacion  :this.testM?.obvs_19m,
      res_sum :this.testM?.sum_res_1m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_20m,
      res_respuesta1 :this.testM?.res_20m_1,
      res_respuesta2 :this.testM?.res_20m_2,
      res_respuesta3 :this.testM?.res_20m_3,
      res_respuesta4 :this.testM?.res_20m_4,
      res_respuesta5 :this.testM?.res_20m_5,
      res_respuesta6 :this.testM?.res_20m_6,
      res_respuesta7 :this.testM?.res_20m_7,
      res_observacion  :this.testM?.obvs_20m,
      res_sum :this.testM?.sum_res_20m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_21m,
      res_respuesta1 :this.testM?.res_21m_1,
      res_respuesta2 :this.testM?.res_21m_2,
      res_respuesta3 :this.testM?.res_21m_3,
      res_respuesta4 :this.testM?.res_21m_4,
      res_respuesta5 :this.testM?.res_21m_5,
      res_respuesta6 :this.testM?.res_21m_6,
      res_respuesta7 :this.testM?.res_21m_7,
      res_observacion  :this.testM?.obvs_21m,
      res_sum :this.testM?.sum_res_21m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_22m,
      res_respuesta1 :this.testM?.res_22m_1,
      res_respuesta2 :this.testM?.res_22m_2,
      res_respuesta3 :this.testM?.res_22m_3,
      res_respuesta4 :this.testM?.res_22m_4,
      res_respuesta5 :this.testM?.res_22m_5,
      res_respuesta6 :this.testM?.res_22m_6,
      res_respuesta7 :this.testM?.res_22m_7,
      res_observacion  :this.testM?.obvs_22m,
      res_sum :this.testM?.sum_res_22m,
      res_id_paciente :this.id,
    });

    this.modelArrayM.push({
      res_pregunta:this.testM.pregunta_23m,
      res_respuesta1 :this.testM?.res_23m_1,
      res_respuesta2 :this.testM?.res_23m_2,
      res_respuesta3 :this.testM?.res_23m_3,
      res_respuesta4 :this.testM?.res_23m_4,
      res_respuesta5 :this.testM?.res_23m_5,
      res_respuesta6 :this.testM?.res_23m_6,
      res_respuesta7 :this.testM?.res_23m_7,
      res_observacion  :this.testM?.obvs_23m,
      res_sum :this.testM?.sum_res_23m,
      res_id_paciente :this.id,
    });


    this._ini.DeleteResp(this.id).subscribe(del=>{
      if(del){
        this._ini.EnviarRespC(this.modelArrayC).subscribe(usr => {
 
          if(usr){

            this._ini.EnviarRespF(this.modelArrayF).subscribe(usr2=>{
                if(usr2){
                  this._ini.EnviarRespM(this.modelArrayM).subscribe(usr3=>{
                    this.blockUI.stop();
                    console.log(usr3);
                    Swal.fire('Respuestas Guardadas', `${usr3.descripcion}!`, 'success');
                
                    const btn = document.getElementById('btn') as HTMLButtonElement | null;
                    btn?.setAttribute('disabled', '');
                  });
                }
            });
     
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




  }
}
