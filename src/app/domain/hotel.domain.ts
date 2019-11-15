import { Servicio } from './servicio.domain';
import { Habitacion } from './habitacion.domain';

export class Hotel {

    habitaciones: Habitacion[] = [new Habitacion()]

    
    constructor(
        public id?: string,
        public nombre?: string,
        public precioBase?: number,
        public puntuacion?: number,
        public ubicacion?: string,
        public foto?: string,
        habitaciones_?: Habitacion[],
        public serviciosAdicionales?: Servicio[],

    ) { 

        this.habitaciones = habitaciones_


    }

    // ademas el hotel ya no deberia tener precio

    // precioMin(){
    //     Math.min(this.habitaciones.map(habitacion.precio)
    // }

}