import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {  VentaInmobiliariaComponent } from './views/venta-inmobiliaria/venta-inmobiliaria.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaulHeaderComponent } from './containers/defaul-header/defaul-header.component';
import { DefaulFooterComponent } from './containers/defaul-footer/defaul-footer.component';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { RegistroComponent } from './pages/registro/registro.component';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropietariosComponent } from './views/propietarios/propietarios.component';
import { AgregarInmobiliariaComponent } from './views/agregar-inmobiliaria/agregar-inmobiliaria.component';
import { ArriendoInmobiliariaComponent } from './views/arriendo-inmobiliaria/arriendo-inmobiliaria.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentaInmobiliariaComponent,

    DefaulHeaderComponent,
    DefaulFooterComponent,
    RegistroComponent,

    PropietariosComponent,
      AgregarInmobiliariaComponent,
      ArriendoInmobiliariaComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
     NgbAlertModule,
     IconModule,
     NgbModalModule,
     FormsModule,
     NgbModule,
     CommonModule,
     ReactiveFormsModule // form
   
  ],
  providers: [
    provideClientHydration(),
    IconSetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
