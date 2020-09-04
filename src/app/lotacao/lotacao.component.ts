import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinhaLotacao } from '../model/LinhaLotacao';
import { HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lotacao',
  templateUrl: './lotacao.component.html',
  styleUrls: ['./lotacao.component.scss']
})
export class LotacaoComponent implements OnInit {

  @Output()
  newItinerarioEscolhidoEvent = new EventEmitter();

  linhasLotacao: Array<LinhaLotacao>;
  selectedLotacao: LinhaLotacao;
  action: string;
  search: any;
  totalRecords: string;
  page: Number=1;
  
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData() {
    this.selectedLotacao = new LinhaLotacao();
    this.httpClientService.getLinhasLotacao().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedLotacaoId = params['id'];
        if (selectedLotacaoId) {
          this.selectedLotacao = this.linhasLotacao.find(selectedLotacao => selectedLotacao.id === selectedLotacaoId)
        }
      }
    );
  }
  
  handleSuccessfulResponse(response) {
    this.linhasLotacao = response;  
    this.totalRecords = response.length;
  }

  viewItinerario(id: number) {
    this.newItinerarioEscolhidoEvent.emit();
    this.router.navigate(['linhas-lotacao'], { queryParams: { id, action: 'view' } });
  }

}
