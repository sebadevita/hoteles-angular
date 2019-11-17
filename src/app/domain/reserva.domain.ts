import { Habitacion } from './habitacion.domain';
import { Hotel } from './hotel.domain';
import { Servicio } from './servicio.domain';
import { ThrowStmt } from '@angular/compiler';

export class Reserva {

    constructor(
        public hotel?: Hotel,
        public id?: string,
        public fechaDesde?: Date,
        public fechaHasta?: Date,
        public habitacion?: Habitacion,
        public servicios?: Servicio[],
        public precioFinal?: number,



    ) {

    }


    calcularTotal(): number {

        if (this.cantidadDeDias() < 0){
            return 0

        }

        return (this.precioPorHabitacion() + this.precioPorServicios()) * this.cantidadDeDias()

    }

    validarErrores() {
        this.validarHabitacion()
        this.validarFechasVacias()
        this.validarFechaDesdePosteriorFechaHasta()
    }


    validarFechasVacias() {

        if (!this.fechaDesde) {
            throw new Error('¡El campo "fecha desde" debe contener una fecha! ')
        }

        if (!this.fechaHasta) {
            throw new Error('¡El campo "fecha hasta" debe contener una fecha! ')
        }
    }

    validarFechaDesdePosteriorFechaHasta(){
        if(this.cantidadDeDias() <= 0){
            throw new Error('¡El campo "fecha desde" debe ser anterior al campo "fecha hasta"!')

        }

    }



    validarHabitacion() {
        if (!this.habitacion) {
            throw new Error("¡Debe seleccionar un tipo de habitación para reservar!")
        }

    }

    validarDias() {

    }

    precioPorHabitacion() {
        if (this.habitacion) {
            return this.habitacion.precio
        }

        return 0
    }

    precioPorServicios() {
        if (this.servicios) {

            return this.servicios.reduce((total, servicio) => total + servicio.precio, 0)
        }

        return 0
    }

    cantidadDeDias() {
        if (this.fechaDesde && this.fechaHasta) {


            var diferencia = this.fechaHasta.getTime() - this.fechaDesde.getTime();
            var diferenciaEnDias = Math.ceil(diferencia / (1000 * 3600 * 24));
            return diferenciaEnDias

        }

        return 0
}

    esCancelable() :boolean{
     
        return this.cantidadDiasParaElDiaDeReserva() >= 7
    }

    cantidadDiasParaElDiaDeReserva(): number{
        var diferencia = new Date().getTime() - this.fechaDesde.getTime()
        var diferenciaEnDias = Math.ceil(diferencia/(1000*3600*24))
        console.log(diferenciaEnDias)
        return Math.abs(diferenciaEnDias)
    }
}
