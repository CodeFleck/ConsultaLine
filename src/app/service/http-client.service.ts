import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinhaOnibus } from '../model/LinhaOnibus';
import { LinhaLotacao } from '../model/LinhaLotacao';
import { Coordenadas } from '../model/Coordenadas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
 
  constructor(private httpClient: HttpClient) {}

  getLinhasOnibus():Observable<any> {
    return this.httpClient.get<LinhaOnibus[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o'
    );
  }

  getLinhasLotacao():Observable<any> {
    return this.httpClient.get<LinhaLotacao[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l'
    );
  }

  getItinerario(selectedId):Observable<any> {
    return this.httpClient.get<Coordenadas>(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${selectedId}`
    );
  }
}
