import { Injectable } from '@angular/core';
import { Hotel } from '../domain/hotel.domain';
import { Habitacion } from '../domain/habitacion.domain';
import { Servicio } from '../domain/servicio.domain';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor() { }

  //REVISAR EL TEMA DE LOS PRECIOS DE LAS HABITACIONES DESPENDIENDO DEL HOTEL

  dobleEconomica = new Habitacion("Hab1", "Doble Económica", 4000)
  dobleEstandard = new Habitacion("Hab2", "Doble Estandard", 5000)
  tripleEconomica = new Habitacion("Hab3", "Triple Económica", 6000)

  simple = new Habitacion("Hab4", "Simple Economica", 2000)
  luxurie = new Habitacion("Hab5", "Luxurie", 7000)


  almuerzo = new Servicio("S1", "Almuerzo", 400)
  cena = new Servicio("S2", "Cena", 500)
  cochera = new Servicio("S3", "Cochera", 700)
  lavanderia = new Servicio("S4", "Lavandería", 300)
  desayuno = new Servicio("S5", "Desayuno", 300)

  lasHayas = new Hotel("H1",
    "Las Hayas Resort",
    5, 
    "Usuahia",
    "https://imgur.com/e4bgsX2.jpg",
    [this.simple, this.dobleEconomica, this.dobleEstandard, this.tripleEconomica,],
    [this.almuerzo, this.cena, this.lavanderia, this.cochera],
  )
  laCaldera = new Hotel("H2",
    "Hosteria La Caldera",
     3,
    "Salta",
    "https://imgur.com/Sh2wg91.jpg",
    [this.dobleEconomica, this.dobleEstandard, this.tripleEconomica],
    [this.almuerzo, this.cena, this.lavanderia, this.cochera],
  )
  villaHuapi = new Hotel("H3",
    "Villa Huapi",
    4,
    "Bariloche",
    "https://imgur.com/jJqf9f5.jpg",
    [this.dobleEconomica, this.dobleEstandard, this.tripleEconomica],
    [this.almuerzo, this.cena, this.lavanderia, this.cochera],
  )

  hoteles = [this.lasHayas, this.villaHuapi, this.laCaldera]




  async obtenerHoteles(): Promise<Hotel[]> {
    return await this.hoteles
  }

  async obtenerDetallesDelHotel(idBuscado: String): Promise<Hotel> {
    return await this.hoteles.find(hotel => hotel.id === idBuscado)
  }


}
