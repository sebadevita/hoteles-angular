import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { DetallesComponent } from './components/detalles/detalles.component';


export const routes: Routes = [

  { path: '', redirectTo: '/aplicacion/hoteles', pathMatch: 'full' },
  { path: 'aplicacion', redirectTo: 'aplicacion/hoteles', pathMatch: 'full' },

  {
    path: 'aplicacion', component: HeaderComponent,

    children: [
      { path: 'hoteles', component: HotelesComponent },
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
  HotelesComponent,
  DetallesComponent
];
