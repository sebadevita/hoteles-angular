import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListaHotelesComponent } from './components/listaHoteles/listaHoteles.component';


export const routes: Routes = [

  { path: '', redirectTo: '/aplicacion/hoteles', pathMatch: 'full' },
  { path: 'aplicacion', redirectTo: 'aplicacion/hoteles', pathMatch: 'full' },

  {
    path: 'aplicacion', component: HeaderComponent,

    children: [
      { path: 'hoteles', component: ListaHotelesComponent },
      { path: 'detallesHotel', component: DetallesComponent },

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
];
