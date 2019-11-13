import { Injectable } from '@angular/core';
import { Hotel } from '../domain/hotel.domain';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

constructor() { }

lasHayas = new Hotel("H1", "Las Hayas Resort", 5500, 5, "Usuahia", "https://imgur.com/e4bgsX2.jpg")
laCaldera = new Hotel("H2", "Hosteria La Caldera", 3000, 3, "Salta", "https://imgur.com/Sh2wg91.jpg")
villaHuapi = new Hotel("H2", "Villa Huapi", 4000, 4, "Bariloche", "https://imgur.com/jJqf9f5.jpg")

hoteles = [this.lasHayas, this.villaHuapi, this.laCaldera]

async obtenerHoteles(): Promise<Hotel[]> {
  return await this.hoteles
}


}
