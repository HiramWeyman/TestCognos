import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FechasimpComponent } from './pages/fechasimp/fechasimp.component';

import { ConvocatoriaComponent } from './pages/convocatoria/convocatoria.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

import { LoginComponent } from './pages/login/login.component';
import { ResumenesComponent } from './pages/resumenes/resumenes.component';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { AdminresComponent } from './pages/adminres/adminres.component';
import { AdminponComponent } from './pages/adminpon/adminpon.component';
import { AdmrevisorComponent } from './pages/admrevisor/admrevisor.component';
import { InicioadmComponent } from './pages/inicioadm/inicioadm.component';
import { LineamientosComponent } from './pages/lineamientos/lineamientos.component';
import { LoginPonComponent } from './pages/login-pon/login-pon.component';
import { PonenciasComponent } from './pages/ponencias/ponencias.component';
import { TestbaianComponent } from './pages/testbaian/testbaian.component';
import { TestbdidpComponent } from './pages/testbdidp/testbdidp.component';
import { TestcreenciasComponent } from './pages/testcreencias/testcreencias.component';
import { TestscidComponent } from './pages/testscid/testscid.component';
import { TestizraComponent } from './pages/testizra/testizra.component';
import { TestisraComponent } from './pages/testisra/testisra.component';


const routes: Routes = [
{path:'',component:InicioComponent}, 
{path:'inicio/:id',component:InicioComponent},
{path:'testbaian/:id',component:TestbaianComponent},
{path:'testbdidp/:id',component:TestbdidpComponent},
{path:'testcreencias/:id',component:TestcreenciasComponent},
{path:'testscid/:id',component:TestscidComponent},
{path:'testizra/:id',component:TestizraComponent},
{path:'testisra/:id',component:TestisraComponent},

{path:'registro',component:RegistroComponent},
{path:'about',component:AboutComponent},
{path:'contacto',component:ContactoComponent},
{path:'fechasimp',component:FechasimpComponent},

{path:'convocatoria',component:ConvocatoriaComponent},
{path:'faqs',component:FaqsComponent},

{path:'login',component:LoginComponent},
{path:'loginPon',component:LoginPonComponent},
{path:'resumenes',component:ResumenesComponent},
{path:'ponencias',component:PonenciasComponent},
/* {path:'logAdm',component:LoginAdmComponent}, */
{path:'logAdm',component:LoginAdmComponent},

{path:'adminres',component:AdminresComponent},

{path:'adminpon',component:AdminponComponent},

{path:'admrevisor',component:AdmrevisorComponent},

{path:'inicioadm',component:InicioadmComponent},

{path:'lineamientos',component:LineamientosComponent},

{path:'**',pathMatch:'full',redirectTo:''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
