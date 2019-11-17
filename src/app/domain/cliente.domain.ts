import { Reserva } from './reserva.domain';

export class Cliente {

    reservas: Reserva[] = []

    constructor(
        public id?: string,
        public username?: string,
        reservas_?: Reserva[],
    ) {

        if (reservas_) {
            this.reservas = reservas_
        }

    }

    agregarReserva(nuevaReserva: Reserva) {


        this.reservas.push(nuevaReserva)
        

    }

    cancelarReserva(reserva: Reserva) {


        const index = this.reservas.indexOf(reserva, 0);
        if (index > -1) {
            this.reservas.splice(index, 1);
        }

    }
}