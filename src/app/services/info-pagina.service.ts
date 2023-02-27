import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from './interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
    gato: any = [];
    info: infoPagina = {};
    cargada = false; // No cal dir boolean


    constructor(private http:HttpClient ) {
    // console.log('Servicio de infoPagina listo');
    // Leer el archivo JSON 
    this.cargarInfo();
    this.cargarGato(); }

    private cargarInfo(){   
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp) => {
      this.cargada = true;
      this.info = resp; // provar resp. I veurem les propietats JSON
    console.log(resp);
    });

    }

    private cargarGato() { //Donde revisamos la info de Firebase
      this.http.get('https://exam-m-90767-default-rtdb.europe-west1.firebasedatabase.app/equip.json').subscribe( resp => {
      this.gato = resp;
      console.log(resp);
      });
    }   }