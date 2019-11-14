import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/domain/hotel.domain';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    public hotelService: HotelesService) { }

  habitacionSeleccionada: string;
  habitaciones: string[] = ['Doble Económica', 'Doble Estandar', 'Triple Económica']
  servicios: string[] = ["Almuerzo", "Cena", "Cochera", "Lavandería"]

  hotelSeleccionado: Hotel


  async ngOnInit() {
    this.obtenerDetallesDelHotelDelService()
  }

  obtenerDetallesDelHotel() {
    this.route.params.subscribe(params => {
      this.hotelSeleccionado.id = params['id']
      this.obtenerDetallesDelHotelDelService()

    })

 }

  async obtenerDetallesDelHotelDelService() {

    this.hotelSeleccionado =await this.hotelService.obtenerDetallesDelHotel(this.hotelSeleccionado)

  }

}
