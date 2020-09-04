import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinhaOnibus } from 'src/app/model/LinhaOnibus';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.scss']
})
export class OnibusComponent implements OnInit {

  @Output()
  newItinerarioEscolhidoEvent = new EventEmitter();

  linhasOnibus: Array<LinhaOnibus>;
  selectedOnibus: LinhaOnibus;
  action: string;
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedOnibus = new LinhaOnibus();
    this.refreshData();
  }

  refreshData() {
    this.httpClientService.getLinhasOnibus().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedOnibusId = params['id'];
        if (selectedOnibusId) {      
          this.selectedOnibus = this.linhasOnibus.find(onibus => onibus.id === selectedOnibusId)  
        }
      }
    );
  }

  handleSuccessfulResponse(response) {
    this.linhasOnibus = response;  
  }

  viewItinerario(id: number) {
    this.newItinerarioEscolhidoEvent.emit();
    this.router.navigate(['linhas-onibus'], { queryParams: { id, action: 'view' } });
  }
}
