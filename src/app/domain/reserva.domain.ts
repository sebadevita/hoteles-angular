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
        return (this.precioPorHabitacion() + this.precioPorServicios()) * this.cantidadDeDias()
      
}
      
      precioPorHabitacion(){
          if(this.habitacion){
             return this.habitacion.precio
            }

            return 0
      }
      
      precioPorServicios(){
          if (this.servicios){

              return this.servicios.reduce((total, servicio) => total + servicio.precio, 0)
            }

            return 0
      }
      
      cantidadDeDias(){
          if (this.fechaDesde && this.fechaHasta){
              
              
              var diferencia = Math.abs(this.fechaHasta.getTime() - this.fechaDesde.getTime());
              var diferenciaEnDias = Math.ceil(diferencia / (1000 * 3600 * 24));  
              console.log(diferenciaEnDias)
              return diferenciaEnDias

          }

          return 0

        

  
    }
     }
