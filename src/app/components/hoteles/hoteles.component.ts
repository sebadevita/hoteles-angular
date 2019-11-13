import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { Hotel } from 'src/app/domain/hotel.domain';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  constructor(private router: Router, public hotelService:HotelesService) { }

  hoteles: Hotel[]
  
  async ngOnInit(){
    this.obtenerHoteles()
  }

  async obtenerHoteles(){
    this.hoteles = await this.hotelService.obtenerHoteles()
  }



  // async ngOnInit() {
  //   this.hoteles = await this.hotelService.obtenerHoteles()

  // }



}
