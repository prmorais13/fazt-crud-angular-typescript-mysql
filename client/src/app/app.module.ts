import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameListComponent } from './components/game-list/game-list.component';

import { GamesService } from './services/games.service';
import { GameFormComponent } from './components/game-form/game-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameListComponent,
    GameFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
