import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LinhaOnibus } from '../model/LinhaOnibus';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getLinhasOnibus() {
    console.log("testandoooooo");
    return this.httpClient.get<LinhaOnibus[]>('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o');
    
  }
}
