import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroescomponentshtmlComponent } from './heroes/heroescomponentshtml/heroescomponentshtml.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroesComponent, HeroescomponentshtmlComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
