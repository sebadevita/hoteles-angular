import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HotelesService } from 'src/app/services/hoteles.service';
import { Hotel } from 'src/app/domain/hotel.domain';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input()
  hotel: Hotel

  constructor(private router: Router, public hotelService:HotelesService) { }

  
  ngOnInit(){}

  precioMin(){
  }




  // async ngOnInit() {
  //   this.hoteles = await this.hotelService.obtenerHoteles()

  // }



}
