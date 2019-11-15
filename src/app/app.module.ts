import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'

import { HotelComponent } from './components/hotel/hotel.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import {ListaHotelesComponent} from './components/listaHoteles/listaHoteles.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {ReservaComponent} from './components/reserva/reserva.component'
import {ListaReservasComponent} from './components/listaReservas/listaReservas.component'



import { AngularMaterialModule } from './angularMaterialModule'

import 'hammerjs';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HeaderComponent,
    DetallesComponent,
    ListaHotelesComponent,
    ReservaComponent,
    ListaReservasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
