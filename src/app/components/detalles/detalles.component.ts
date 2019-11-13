import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor() { }

  habitacionSeleccionada: string;
  habitaciones: string[] = ['Doble Económica', 'Doble Estandar', 'Triple Económica']
  servicios: string[] = ["Almuerzo", "Cena", "Cochera", "Lavandería"]


  ngOnInit() {
  }

 }
