export class Habitacion {
    
    precio: number = 0

    constructor(
        public id?: string,
        public tipo?: string,
        precio_?: number,
         
    ) { 

        if(precio_){
            this.precio = precio_
        }    }


            
}