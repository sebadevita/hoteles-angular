import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/domain/hotel.domain';
import { HotelesService } from 'src/app/services/hoteles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaHoteles',
  templateUrl: './listaHoteles.component.html',
  styleUrls: ['./listaHoteles.component.css']
})
export class ListaHotelesComponent implements OnInit {

  constructor(private router: Router, public hotelService:HotelesService) { }

  hoteles: Hotel[]
  
  async ngOnInit(){
    this.obtenerHoteles()
  }

  async obtenerHoteles(){
    this.hoteles = await this.hotelService.obtenerHoteles()
  }

  irADetalles(idSeleccionado: String){
    this.router.navigate(['aplicacion/detallesHotel/'+ idSeleccionado])
  }
}
