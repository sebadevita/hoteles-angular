import { Injectable } from '@angular/core';
import { Reserva } from '../domain/reserva.domain';
import { Cliente } from '../domain/cliente.domain';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }

cliente: Cliente = new Cliente("C1", "Sebastián", [])

async agregarReserva(nuevaReserva: Reserva): Promise <void>{
  return await this.cliente.agregarReserva(nuevaReserva)
}

async obtenerClienteLogueado(){
  return await this.cliente
}

async obtenerReservasDelCliente(){
  return await this.cliente.reservas

}

}
