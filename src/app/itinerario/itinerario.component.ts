import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinhaLotacao } from '../model/LinhaLotacao';
import { LinhaOnibus } from '../model/LinhaOnibus';
import { HttpClientService } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Coordenadas } from '../model/Coordenadas';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.scss']
})
export class ItinerarioComponent implements OnInit {

  @Input()
  linhaLotacao: LinhaLotacao;
  @Input()
  linhaOnibus: LinhaOnibus;

  @Output()
  newItinerarioEscolhidoEvent = new EventEmitter();

  itinerario: Array<Coordenadas>;
  newLinhaOnibus: LinhaOnibus;
  newLinhaLotacao: LinhaLotacao;
  totalRecords: string;
  page: Number=1;

  constructor(private httpClientService: HttpClientService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initializeVariables();
    this.fetchItinerario();
    this.newItinerarioEscolhidoEvent.emit();
  }

  fetchItinerario() {
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        const selectedId = params['id'];
        this.httpClientService.getItinerario(selectedId).subscribe(
          response => this.handleSuccessfulResponse(response),
        );
      }
    );
  }

  handleSuccessfulResponse(response) {
    const responseArr = Object.values(response);
    let resp = responseArr.map(this.editResponse);
    this.itinerario = resp;
    this.totalRecords = response.length;
  }

  editResponse(item) {
    let coordenadas = new Coordenadas();
    coordenadas.lat = item.lat;
    coordenadas.lng = item.lng;
    return coordenadas;
  }

  initializeVariables() {
    this.newLinhaOnibus = Object.assign({}, this.linhaOnibus);
    this.newLinhaLotacao = Object.assign({}, this.linhaLotacao);
  }
}
