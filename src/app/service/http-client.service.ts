import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinhaOnibus } from '../model/LinhaOnibus';
import { LinhaLotacao } from '../model/LinhaLotacao';
import { Coordenadas } from '../model/Coordenadas';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
 
  constructor(private httpClient: HttpClient) {}

  getLinhasOnibus() {
    return this.httpClient.get<LinhaOnibus[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o'
    );
  }

  getLinhasLotacao() {
    return this.httpClient.get<LinhaLotacao[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l'
    );
  }

  getItinerario(selectedId) {
    return this.httpClient.get<Coordenadas>(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${selectedId}`
    );
  }
}
