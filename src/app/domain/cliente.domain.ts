import { Reserva } from './reserva.domain';

export class Cliente {

    constructor(
        public id?: string,
        public reservas?: Reserva[],
    ) { }
}