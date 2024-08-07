import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

import { AboutComponent } from './pages/about/about.component';

import { FechasimpComponent } from './pages/fechasimp/fechasimp.component';



import { LoginComponent } from './pages/login/login.component';

import { InicioadmComponent } from './pages/inicioadm/inicioadm.component';

import { TestbaianComponent } from './pages/testbaian/testbaian.component';
import { TestbdidpComponent } from './pages/testbdidp/testbdidp.component';
import { TestcreenciasComponent } from './pages/testcreencias/testcreencias.component';
import { TestscidComponent } from './pages/testscid/testscid.component';
import { TestisraComponent } from './pages/testisra/testisra.component';
import { RecuperaComponent } from './pages/recupera/recupera.component';


const routes: Routes = [
/* {path:'',component:InicioComponent},  */
{path:'inicio/:id',component:InicioComponent},
{path:'testbaian/:id',component:TestbaianComponent},
{path:'testbdidp/:id',component:TestbdidpComponent},
{path:'testcreencias/:id',component:TestcreenciasComponent},
{path:'testscid/:id',component:TestscidComponent},
{path:'testisra/:id',component:TestisraComponent},
{path:'recupera/:correo',component:RecuperaComponent},


{path:'about',component:AboutComponent},

{path:'fechasimp',component:FechasimpComponent},



{path:'login',component:LoginComponent},




{path:'inicioadm',component:InicioadmComponent},



/* {path:'**',pathMatch:'full',redirectTo:''}, */

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
