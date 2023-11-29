import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { RegistroComponent } from './pages/registro/registro.component';
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
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { FechasimpComponent } from './pages/fechasimp/fechasimp.component';

import { ConvocatoriaComponent } from './pages/convocatoria/convocatoria.component';
import { FaqsComponent } from './pages/faqs/faqs.component';

import { LoginComponent } from './pages/login/login.component';
import { ResumenesComponent } from './pages/resumenes/resumenes.component';
import { AdminresComponent } from './pages/adminres/adminres.component';
import { LoginAdmComponent } from './pages/login-adm/login-adm.component';
import { NavbarService } from './services/navbar.service';
import { HeaderAdmComponent } from './shared/header-adm/header-adm.component';
import { LogAdminComponent } from './pages/log-admin/log-admin.component';
/* import { AdminponComponent } from './pages/adminpon/adminpon.component'; */
import { AdmrevisorComponent } from './pages/admrevisor/admrevisor.component';
import { InicioadmComponent } from './pages/inicioadm/inicioadm.component';
import { BlockUIModule } from 'ng-block-ui';
import { LineamientosComponent } from './pages/lineamientos/lineamientos.component';
import { LoginPonComponent } from './pages/login-pon/login-pon.component';
import { PonenciasComponent } from './pages/ponencias/ponencias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestbaianComponent } from './pages/testbaian/testbaian.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    RegistroComponent,
    ContactoComponent,
    FechasimpComponent,

    ConvocatoriaComponent,
    FaqsComponent,

    LoginComponent,
    ResumenesComponent,
/*     AdminresComponent, */
    LoginAdmComponent,
    HeaderAdmComponent,
    LogAdminComponent,
 /*    AdminponComponent, */
    AdmrevisorComponent,
    InicioadmComponent,
    LineamientosComponent,
    LoginPonComponent,
    PonenciasComponent,
    TestbaianComponent

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
