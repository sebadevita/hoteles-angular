import { Servicio } from './servicio.domain';
import { Habitacion } from './habitacion.domain';

export class Hotel {
    
    constructor(
        public id?: string,
        public nombre?: string,
        public precioBase?: number,
        public puntuacion?: number,
        public ubicacion?: string,
        public foto?: string,
        public habitaciones?: Habitacion[],
        public serviciosAdicionales?: Servicio[],

    ) { }

}