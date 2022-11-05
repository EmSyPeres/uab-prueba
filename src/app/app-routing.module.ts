import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesCardsComponent } from './components/heroes-cards/heroes-cards.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HereoesSearchComponent } from './components/hereoes-search/hereoes-search.component';

const routes: Routes = [

  //path:'heroe/id', component:HeroesComponent,

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'detalle/:id',component:DetalleComponent},
  {path:'cards',component:HeroesCardsComponent},
  {path:'detalle',component:DetalleComponent},
  {path:'about',component:AboutComponent},
  {path:'search',component:HereoesSearchComponent},
  {path:'**',component:HomeComponent}
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
