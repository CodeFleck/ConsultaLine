import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { TarefaComponent } from './tarefa/tarefa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'linhas-onibus', component: OnibusComponent },
  { path: 'linhas-lotacao', component: LotacaoComponent},
  { path: 'tarefa', component: TarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
