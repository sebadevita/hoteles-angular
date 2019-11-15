import { Habitacion } from './habitacion.domain';
import { Hotel } from './hotel.domain';
import { Servicio } from './servicio.domain';

export class Reserva {

    habitacion: Habitacion = new Habitacion()
    
    constructor(
        public hotel?: Hotel,
        public id?: string,
        public fechaDesde?: Date,
        public fechaHasta?: Date,
        habitacion_?: Habitacion,      
        public servicios?: Servicio[],
        public precioFinal?: number,



    ) {

        if(habitacion_){
            this.habitacion = habitacion_
        }
    }


    calcularTotal(): number{
        console.log("LO QUE ESTOY IMPRIMIENDO")
        console.log(this)
        return this.precioPorHabitacion() 
    
    // + this.precioPorServicios()) * this.cantidadDeDias()
      
}
      
      precioPorHabitacion(){
        return this.habitacion.precio
      }
      
      precioPorServicios(){
        return this.servicios.reduce((total, servicio) => total + servicio.precio, 0)
      }
      
      cantidadDeDias(){
        return 2
        

  
    }
     }
