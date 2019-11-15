import { Injectable } from '@angular/core';
import { Reserva } from '../domain/reserva.domain';
import { Cliente } from '../domain/cliente.domain';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }

cliente: Cliente = new Cliente()

async agregarReserva(nuevaReserva: Reserva): Promise <void>{
  return await this.cliente.agregarReserva(nuevaReserva)
}

}
