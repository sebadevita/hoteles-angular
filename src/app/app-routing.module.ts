import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListaHotelesComponent } from './components/listaHoteles/listaHoteles.component';
import { ListaReservasComponent } from './components/listaReservas/listaReservas.component';


export const routes: Routes = [

  { path: '', redirectTo: '/aplicacion/hoteles', pathMatch: 'full' },
  { path: 'aplicacion', redirectTo: 'aplicacion/hoteles', pathMatch: 'full' },

  {
    path: 'aplicacion', component: HeaderComponent,

    children: [
      { path: 'hoteles', component: ListaHotelesComponent },
      { path: 'detallesHotel/:id', component: DetallesComponent },
      { path: 'misReservas', component: ListaReservasComponent },


    ]


  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HeaderComponent,
  HotelComponent,
  DetallesComponent,
  ListaHotelesComponent,
  ListaReservasComponent,
];
