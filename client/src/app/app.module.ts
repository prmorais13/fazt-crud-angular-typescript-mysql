import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameListComponent } from './components/game-list/game-list.component';

import { GamesService } from './services/games.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent, GameListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
