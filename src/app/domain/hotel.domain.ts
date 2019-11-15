import { Servicio } from './servicio.domain';
import { Habitacion } from './habitacion.domain';

export class Hotel {

    habitaciones: Habitacion[] = [new Habitacion()]

    
    constructor(
        public id?: string,
        public nombre?: string,
        public puntuacion?: number,
        public ubicacion?: string,
        public foto?: string,
        habitaciones_?: Habitacion[],
        public serviciosAdicionales?: Servicio[],

    ) { 

        this.habitaciones = habitaciones_


    }

    // ademas el hotel ya no deberia tener precio

    precioMin(){
        return Math.min(...this.precioDeLasHabitaciones())
    }

    precioDeLasHabitaciones(): number[]{
        return this.habitaciones.map((habitacion) => {
            return habitacion.precio
        })

    }

}