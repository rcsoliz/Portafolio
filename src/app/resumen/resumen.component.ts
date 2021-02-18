import { Component, OnInit } from '@angular/core';
import { RcserviciosService } from '../services/rcservicios.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  listProfesion: any[]=[];
  constructor(public rcService: RcserviciosService) {
    //this.listProfesion = rcService.profesional;
  }

  ngOnInit(): void {
  }

}
