import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageMap: string = 'assets/images/map.png';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToConsultaOnibus() {
      this.router.navigate(['linhas-onibus']);  
  }

  goToConsultaLotacao() {
    this.router.navigate(['linhas-lotacao']);
  }
}
