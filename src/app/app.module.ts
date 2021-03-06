import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnibusComponent } from './onibus/onibus.component';
import { LotacaoComponent } from './lotacao/lotacao.component';
import { ItinerarioComponent } from './itinerario/itinerario.component';
import { SearchPipe } from './search.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TarefaComponent } from './tarefa/tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnibusComponent,
    LotacaoComponent,
    ItinerarioComponent,
    SearchPipe,
    NavBarComponent,
    TarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
