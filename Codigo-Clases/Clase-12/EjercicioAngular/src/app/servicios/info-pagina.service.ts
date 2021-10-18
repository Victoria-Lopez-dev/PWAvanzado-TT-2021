

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {


  

  constructor(private http: HttpClient) {
    console.log('Servicio de infoPagina listo');
    

    this.http.get('assets/data/info-pagina.json')
    .subscribe((resp: any) => {
      
      console.log(resp);

      console.log(resp.tumblr);
      console.log(resp.pagina);
      
    });
  }


}
