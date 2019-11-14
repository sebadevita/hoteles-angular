import { Habitacion } from './habitacion.domain';
import { Hotel } from './hotel.domain';
import { Servicio } from './servicio.domain';

export class Reserva {

    constructor(
        public hotel?: Hotel,
        public id?: string,
        public fechaDesde?: Date,
        public fechaHasta?: Date,
        public habitacion?: Habitacion,
        public servicios?: Servicio[],
        public precioFinal?: number,



    ) {}
         
    calcularPrecioFinal(){
        this.precioFinal = 99999
    }
    }
