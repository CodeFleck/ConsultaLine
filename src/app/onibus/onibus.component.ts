import { Component, OnInit } from '@angular/core';
import { LinhaOnibus } from 'src/app/model/LinhaOnibus';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-onibus',
  templateUrl: './onibus.component.html',
  styleUrls: ['./onibus.component.scss']
})
export class OnibusComponent implements OnInit {

  linhasOnibus: Array<LinhaOnibus>;
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getLinhasOnibus().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.linhasOnibus = response;  
  }

}
