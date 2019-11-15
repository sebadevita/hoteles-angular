import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/domain/reserva.domain';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listaReservas',
  templateUrl: './listaReservas.component.html',
  styleUrls: ['./listaReservas.component.css']
})
export class ListaReservasComponent implements OnInit {

  reservas: Reserva[] = []

  constructor(private clienteService: ClienteService) { }

  async ngOnInit() {
    this.obtenerListaDeReservasDelCliente()
  }


  async obtenerListaDeReservasDelCliente(){
    this.reservas = await this.clienteService.obtenerReservasDelCliente()
     
  }

}
