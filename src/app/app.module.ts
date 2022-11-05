import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comunes/header/header.component';
import { FooterComponent } from './comunes/footer/footer.component';
import { HeroesCardsComponent } from './components/heroes-cards/heroes-cards.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { HereoesSearchComponent } from './components/hereoes-search/hereoes-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroesCardsComponent,
    HomeComponent,
    AboutComponent,
    DetalleComponent,
    HereoesSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
