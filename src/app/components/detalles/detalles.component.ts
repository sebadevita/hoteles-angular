import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/domain/hotel.domain';
import { HotelesService } from 'src/app/services/hoteles.service';
import { Reserva } from 'src/app/domain/reserva.domain';
import { ReservaService } from 'src/app/services/reserva.service';
import { Servicio } from 'src/app/domain/servicio.domain';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    public hotelService: HotelesService,
    public reservaService: ReservaService,) { }

  habitacionSeleccionada: string;

  posibleReserva: Reserva = new Reserva(new Hotel())
  variable: number


  async ngOnInit() {
    await this.obtenerDetallesDelHotel()
  }

  async obtenerDetallesDelHotel() {
    this.route.params.subscribe(params => {
    this.posibleReserva.hotel.id = params.id
    })

    await this.obtenerDetallesDelHotelDelService()

  }

  async obtenerDetallesDelHotelDelService(): Promise<void> {
    this.posibleReserva.hotel = await this.hotelService.obtenerDetallesDelHotel(this.posibleReserva.hotel.id) 
  }

  
  }
