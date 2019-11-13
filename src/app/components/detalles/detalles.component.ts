import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private router: Router) { }

  habitacionSeleccionada: string;
  habitaciones: string[] = ['Doble Económica', 'Doble Estandar', 'Triple Económica']
  servicios: string[] = ["Almuerzo", "Cena", "Cochera", "Lavandería"]


  ngOnInit() {
  }

 }
