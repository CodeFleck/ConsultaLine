import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'ônibus'},
    {linkId: 2, linkName: 'Lotação'},
    {linkId: 3, linkName: 'Tarefa'}
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
    if(linkId == 3) {
      this.router.navigate(['tarefa']);
    }
  }
}
