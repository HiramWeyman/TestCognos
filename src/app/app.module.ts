import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { FechasimpComponent } from './pages/fechasimp/fechasimp.component';



import { LoginComponent } from './pages/login/login.component';

import { NavbarService } from './services/navbar.service';
import { HeaderAdmComponent } from './shared/header-adm/header-adm.component';

/* import { AdminponComponent } from './pages/adminpon/adminpon.component'; */

import { InicioadmComponent } from './pages/inicioadm/inicioadm.component';
import { BlockUIModule } from 'ng-block-ui';

import { ReactiveFormsModule } from '@angular/forms';
import { TestbaianComponent } from './pages/testbaian/testbaian.component';
import { TestbdidpComponent } from './pages/testbdidp/testbdidp.component';
import { TestcreenciasComponent } from './pages/testcreencias/testcreencias.component';
import { TestscidComponent } from './pages/testscid/testscid.component';

import { TestisraComponent } from './pages/testisra/testisra.component';
import { TestIsr } from './pages/testisra/testisra.component';
import { TestIsrM } from './pages/testisra/testisra.component';
import { RecuperaComponent } from './pages/recupera/recupera.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
   
    FechasimpComponent,



    LoginComponent,

    HeaderAdmComponent,


    InicioadmComponent,

    TestbaianComponent,
    TestbdidpComponent,
    TestcreenciasComponent,
    TestscidComponent,

    TestisraComponent,
    TestIsr,
    TestIsrM,
    RecuperaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
