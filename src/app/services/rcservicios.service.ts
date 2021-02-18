import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RcserviciosService {
  profesional: any[]=[];
  educacion: any[]=[];
  experiencia: any[]=[];
  servicios: any[]=[];

  constructor(private http: HttpClient){
    this.GetProfesional();
    this.GetExperiencia();
    this.GetEducacion();
    this.GetServicios();
    this.GetTestimonio();
  }

  private GetProfesional(){
    this.http.get('https://cb-folio-default-rtdb.firebaseio.com/Profesional.json')
             .subscribe( (respon: any[]) =>{
               this.profesional = respon;
               console.log(this.profesional);
             });
  }


  private GetEducacion(){
    this.http.get('https://cb-folio-default-rtdb.firebaseio.com/Educacion.json')
             .subscribe( (respon: any[]) =>{
               this.educacion = respon;
               console.log(this.educacion);
             });
  }

  private GetExperiencia(){
    this.http.get('https://cb-folio-default-rtdb.firebaseio.com/Experiencia.json')
             .subscribe( (respon: any[]) =>{
               this.experiencia = respon;
               console.log(this.experiencia);
             });
  }

  private GetServicios(){
    this.http.get('https://cb-folio-default-rtdb.firebaseio.com/Servicios.json')
             .subscribe( (respon: any[]) =>{
               this.servicios = respon;
               console.log(this.servicios);
             });
  }

  private GetTestimonio(){
    this.http.get('https://cb-folio-default-rtdb.firebaseio.com/Testimonio.json')
             .subscribe( (respon: any[]) =>{
               this.servicios = respon;
               console.log(this.servicios);
             });
  }

}
