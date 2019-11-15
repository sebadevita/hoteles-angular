import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/app/domain/reserva.domain';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  @Input()
  reserva: Reserva

  constructor() { }

  ngOnInit() {
  }

}
