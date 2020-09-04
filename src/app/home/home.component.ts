import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'ônibus'},
    {linkId: 2, linkName: 'Lotação'}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  display(linkId) {
    console.log(linkId);
    if(linkId == 1) {
      this.router.navigate(['linhas-onibus']);  
    }
    if(linkId == 2) {
      this.router.navigate(['linhas-lotacao']);
    }
  }

}
